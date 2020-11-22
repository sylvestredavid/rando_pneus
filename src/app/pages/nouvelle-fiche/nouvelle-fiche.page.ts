import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FicheService} from '../../services/fiches.service';
import {UserService} from '../../services/user.service';
import {ActionSheetController, AlertController, LoadingController, NavController} from '@ionic/angular';
import {Events} from '../../services/events';
import {Router} from '@angular/router';
import {SignatureClientComponent} from '../../components/signatures/signature-client.component';
import {SignatureResponsableComponent} from '../../components/signatures/signature-responsable.component';
import * as moment from 'moment';
import {FicheFirebaseService} from '../../services/fiche-firebase.service';
import {FicheModel} from '../../models/fiche.model';
import {Camera, CameraOptions} from '@ionic-native/Camera/ngx';
import {Base64} from '@ionic-native/base64/ngx';
import {UtilsService} from '../../services/utils.service';


@Component({
    selector: 'app-nouvelle-fiche',
    templateUrl: './nouvelle-fiche.page.html',
    styleUrls: ['./nouvelle-fiche.page.scss'],
})
export class NouvelleFichePage implements OnInit {

    @ViewChild('signatureClient') signatureClient: SignatureClientComponent;
    @ViewChild('signatureResponsable') signatureResponsable: SignatureResponsableComponent;


    msgErreur: string;
    ficheForm: FormGroup;
    autosend: boolean;
    fournitures: FormGroup;
    fournituresList: Array<string>;
    numberForm: number;
    photos: { nom: string; data: string }[];

    constructor(private formBuilder: FormBuilder,
                private ficheService: FicheService,
                private userService: UserService,
                public router: Router,
                public events: Events,
                public alertCtrl: AlertController,
                private camera: Camera,
                private base64: Base64,
                private utilsService: UtilsService,
                private actionSheetController: ActionSheetController,
                public loadingCtrl: LoadingController,
                private ficheFirebaseService: FicheFirebaseService) {
        events.subscribe('ficheEnvoyed', () => { // quand une fiche est envoyée on retourne sur fichePage
            this.router.navigate(['fiche']);
        });
    }


    ngOnInit() {
        this.ficheForm = this.formBuilder.group({
            arrive: ['', Validators.required],
            depart: ['', Validators.required],
            temps: [''],
            positionRoue: ['', Validators.required],
            nomClient: ['', Validators.required],
            nomAdresse: [''],
            dimension: ['0'],
            dimensionLibre: [''],
            nvh: [''],
            kmCompteur: [''],
            demontage: [''],
            depose: [''],
            reparation: [''],
            chaair: [''],
            retaillage: [''],
            emplatre: this.formBuilder.group({ // <-- the child FormGroup
                nom: '',
                quantite: ''
            }),
            forfait: [''],
            observation: [''],
            numeroPneu: [''],
            pression: [''],
            serrage: [''],
            fournitures: this.formBuilder.array([])
        });
        this.photos = [];
        this.userService.getState().then(autosend => {
                this.autosend = autosend;
            }
        );
        this.initializeItems();
    }

    calculTime(): void {
        this.ficheForm.controls.temps.setValue(this.utilsService.calculTime(this.ficheForm));
    }

    /* AUTOCOMPLETION FOURNITURES OLD WAY START*/
    insertInput(fourniture: string, i: number) {
        // insert le résultat de la recherche dans le bon champ
        (this.ficheForm.controls.fournitures as FormGroup).controls[i].patchValue({
            nom: fourniture
        });
        this.fournituresList = [];
    }


    getItems(ev: any, i: number) {
        this.numberForm = i;
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        const val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.fournituresList = this.fournituresList.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.fournituresList = this.fournituresList.slice(0, 3);
        } else {
            this.fournituresList = [];
        }
    }

    /*AUTO COMPLETION FOURNITURE OLD WAY END*/

    createItem(): FormGroup {
        return this.formBuilder.group({
            nom: '',
            quantite: '1'
        });
    }


    addFourniture() {
        const control = this.ficheForm.controls.fournitures as FormArray;
        control.push(this.createItem());
    }

    deleteFourni(i: number) {
        const control = this.ficheForm.controls.fournitures as FormArray;
        control.removeAt(i);
    }

    async save() {
        const loading = await this.loadingCtrl.create({
            message: 'Enregistrement de la fiche en cours...'
        });

        await loading.present();
        this.ficheForm.value.signatureClient = this.signatureClient.getSignature(); // recupere les coordoonnees
        this.ficheForm.value.signatureResponsable = this.signatureResponsable.getSignature();
        this.ficheForm.value.aEnvoyer = true;
        this.ficheForm.value.envoye = false;
        this.ficheForm.value.vue = true;
        this.ficheForm.value.modifieParBureau = false;
        this.ficheForm.value.photos = this.photos;
        this.ficheForm.value.emplatre.nom = this.ficheForm.value.emplatre.nom || 'Emplâtre'; // on met le nom emplatre par default
        // this.ficheService.create(this.ficheForm.value, (value) => {
        //     if (value) {
        //         console.log(value)
        //         this.callback();
        //     }
        // });
        const fiche: FicheModel = this.ficheForm.value;
        fiche.userId = localStorage.getItem('userId');
        this.ficheFirebaseService.addFiche(fiche)
            .then(
                f => {
                    fiche.id = f.key;
                    this.ficheFirebaseService.updateFiche(fiche)
                        .then(() => {
                            this.callback(fiche);
                            this.ficheForm.reset();
                            loading.dismiss();
                        });
                }
            )
            .catch(err => {
                loading.dismiss();
                this.presentAlert();
            })

    }

    async presentAlert() {
        const confirm = await this.alertCtrl.create({
            header: 'Un probleme est survenu lors de la création de la fiche.',
            buttons: [
                {
                    text: 'ok',
                }
            ],
            mode: 'ios'
        });
        await confirm.present();
    }

    callback(fiche: FicheModel) {
        if (this.autosend) {
            this.ficheService.sendFiche(fiche); // fait direct un setroot avec la reception de l event "ficheenvoyed"
        } else {
            this.router.navigate(['fiche']);
        }
    }


    clear(signature: string) {
        if (signature === 'client') {
            this.signatureClient.signaturePad.clear();
        } else if (signature === 'responsable') {
            this.signatureResponsable.signaturePad.clear();
        }
    }


    initializeItems() {
        this.fournituresList = [
            'PNEU 10 X 16.5 CAMSO',
            'PNEU 10.0/75 X 15.3 ALLIANCE A317',
            'PNEU 10.5 X 18 EUROGRIP MT45',
            'PNEU 1000 X 20 EUROGRIP MT54',
            'PNEU 11 X 22.5 HANKOOK AM06',
            'PNEU 11.5/80 X 15.3 EUROGRIP IM45',
            'PNEU 11.5/80 X 15.3 ALLIANCE A315',
            'PNEU 12 X 16.5 CAMSO',
            'PNEU 12 X 22.5 HDC1 CONTINENTAL',
            'PNEU 12 X 22.5 HSC1 CONTINENTAL',
            'PNEU 12 X 22.5 HANKOOK AM09',
            'PNEU 12 X 22.5 HANKOOK DM09',
            'PNEU 12 X 22.5 MICHELIN XZY2',
            'PNEU 12 X 22.5 RECHAPE SDY3',
            'PNEU 12.0/75 X 18 EUROGRIP MT63',
            'PNEU 12.5 X 20 EUROGRIP MT54',
            'PNEU 12.5/80 X 18 EUROGRIP MT45',
            'PNEU 12.5/80 X 18 EUROGRIP MT54',
            'PNEU 13 X 22.5 HDC1 CONTINENTAL',
            'PNEU 13 X 22.5 HSC1 CONTINENTAL',
            'PNEU 13 X 22.5 AM09 HANKOOK',
            'PNEU 13 X 22.5 DM09 HANKOOK',
            'PNEU 13 X 22.5 XDY WORKS MICHELIN',
            'PNEU 13 X 22.5 XZY WORKS MICHELIN',
            'PNEU 13 X 22.5 RECHAPE SDY3',
            'PNEU 135 X 13 HANKOOK K715',
            'PNEU 14.5 X 20 EUROGRIP MT54',
            'PNEU 14.9 X 24 ALLIANCE A358',
            'PNEU 145 X 13 C HANKOOK RA08',
            'PNEU 145 X 13 HANKOOK K715',
            'PNEU 15.5/80 X 24 ALLIANCE A324',
            'PNEU 15.5/80 X 24 EUROGRIP IM54',
            'PNEU 15.5/80 X 24 BKT',
            'PNEU 155 X 13 HANKOOK K715',
            'PNEU 155 X 13 LAUFENN LK14',
            'PNEU 155 X 13 C HANKOOK RA18',
            'PNEU 16.5/85 X 24 ALLIANCE A358',
            'PNEU 165 X 13 C HANKOOK RA08',
            'PNEU 165 X 14 C HANKOOK RA18',
            'PNEU 175 X 14 C HANKOOK RA18',
            'PNEU 18 X 19.5 EUROGRIP MT63',
            'PNEU 185 X 14 C HANKOOK RA18',
            'PNEU 185 X 15 C HANKOOK RA18',
            'PNEU 185/75 X 14 C HANKOOK RA18',
            'PNEU 185/75 X 16 C HANKOOK RA18',
            'PNEU 195 X 14 C HANKOOK RA18',
            'PNEU 195 X 14 C LAUFENN LV01',
            'PNEU 195 X 15 C HANKOOK RA18',
            'PNEU 195/65 X 16 C HANKOOK RA18',
            'PNEU 195/65 X 16 C VRESDESTEIN COMTRAC',
            'PNEU 195/70 X 15 C HANKOOK RA08',
            'PNEU 195/70 X 15 C VREDESTEIN COMTRAC',
            'PNEU 195/75 X 16 C HANKOOK RA18',
            'PNEU 195/75 X 16 C LAUFENN LV01',
            'PNEU 195/75 X 16 C VREDESTEIN COMTRAC',
            'PNEU 23/8.50 X 12 CAMSO',
            'PNEU 235/65 X 16 C HANKOOK RA18',
            'PNEU 235/65 X 16 C VREDESTEIN COMTRAC',
            'PNEU 27/8.50 X 15 EUROGRIP ST30',
            'PNEU 28.9 X 15 EUROGRIP IT30',
            'PNEU 315/70 X 22.5 HS3 CONTINENTAL',
            'PNEU 315/70 X 22.5 HD3 CONTINENTAL',
            'PNEU 315/70 X 22.5 AH31 HANKOOK',
            'PNEU 315/70 X 22.5 DH05 HANKOOK',
            'PNEU 315/70 X 22.5 DH31 HANKOOK',
            'PNEU 315/70 X 22.5 M729 BRIDGESTONE',
            'PNEU 315/70 X 22.5 R249 BRIDGESTONE',
            'PNEU 315/70 X 22.5 XDE MICHELIN',
            'PNEU 315/70 X 22.5 XZE MICHELIN',
            'PNEU 315/80 X 22.5 R249 BRIDGESTONE',
            'PNEU 315/80 X 22.5 M729 BRIDGESTONE',
            'PNEU 315/80 X 22.5 M749 BRIDGESTONE',
            'PNEU 315/80 X 22.5 HD3 CONTINENTAL',
            'PNEU 315/80 X 22.5 HS3 CONTINENTAL',
            'PNEU 315/80 X 22.5 AH22+ HANKOOK',
            'PNEU 315/80 X 22.5 AH31 HANKOOK',
            'PNEU 315/80 X 22.5 DH05 HANKOOK',
            'PNEU 315/80 X 22.5 DH31 HANKOOK',
            'PNEU 315/80 X 22.5 DM09 HANKOOK',
            'PNEU 315/80 X 22.5 XDE MICHELIN',
            'PNEU 315/80 X 22.5 XZE MICHELIN',
            'PNEU 315/80 X 22.5 RECHAPE SDE2',
            'PNEU 315/80 X 22.5 RECHAPE SDY3',
            'PNEU 385/55 X 22.5 HS3 CONTINENTAL',
            'PNEU 385/55 X 22.5 HD3 CONTINENTAL',
            'PNEU 385/55 X 22.5 AH31 HANKOOK',
            'PNEU 385/55 X 22.5 TH22 HANKOOK',
            'PNEU 385/55 X 22.5 MULTI T MICHELIN',
            'PNEU 385/55 X 22.5 MULTI F MICHELIN',
            'PNEU 385/55 X 22.5 R168 BRIDGESTONE',
            'PNEU 385/55 X 22.5 R249 BRIDGESTONE',
            'PNEU 385/65 X 22.5 HS3 CONTINENTAL',
            'PNEU 385/65 X 22.5 HD3 CONTINENTAL',
            'PNEU 385/65 X 22.5 AH31 HANKOOK',
            'PNEU 385/65 X 22.5 AM15+ HANKOOK',
            'PNEU 385/65 X 22.5 TH22 HANKOOK',
            'PNEU 385/65 X 22.5 TM15 HANKOOK',
            'PNEU 385/65 X 22.5 XTE3 MICHELIN',
            'PNEU 385/65 X 22.5 MULTI T MICHELIN',
            'PNEU 385/65 X 22.5 MULTI F MICHELIN',
            'PNEU 385/65 X 22.5 R168+ BRIDGESTONE',
            'PNEU 385/65 X 22.5 R249 BRIDGESTONE',
            'PNEU 400 X 8 VREDESTEIN V47',
            'PNEU 405/70 X 24 EUROGRIP MT54',
            'PNEU 440/80 X 24 ALLIANCE A325',
            'PNEU 440/80 X 24 MICHELIN POWER CL',
            'PNEU 445/65 X 22.5 AM15 HANKOOK',
            'PNEU 445/65 X 22.5 M748 BRIDGESTONE',
            'PNEU 445/65 X 22.5 M844 BRIDGESTONE',
            'PNEU 5/70 X 12 CAMSO',
            'PNEU 600 X 9 EUROGRIP IT3',
            'PNEU 700 X 12 EUROGRIP IT30',
            'Retaillage',
            'Equilibrage grand PL',
            'Equilibrage petit PL',
            'Rallonge 1197',
            'Rallonge R210 (souple)',
            'Rallonge coudee W353',
            'Rallonge V615 (rigide)',
            'Gonflage mousse polyuréthane',
            'Produit anti-crevaison',
            'Jante neuve 385/65 x 22.5 déport 0',
            'Jante neuve 385/65 x 22.5 déport 120',
            'Jante neuve 315/80 x 22.5',
            'Jante neuve 315/70 x 22.5',
            'Jante neuve 445/65 x 22.5',
            'Jante neuve 13 x 22.5',
            'Jante neuve 12 x 22.5',
            'Jante neuve 11 x 22.5',
            'Joint tyran',
            'Joint sulla',
            'Joint heupo',
            'Chambre à air 5/70 x 12',
            'Chambre à air 11.5/80 x 15.3',
            'Chambre à air 15.5/80 x 24',
            'Chambre à air 12.5/80 x 18',
            'Chambre à air 405/70 x 20',
            'Chambre à air 28.9 x 15',
            'Chambre à air 23.1 x 26',
            'Chambre à air 10 x 16.5',
            'Chambre à air 205 x 15',
            'Chambre à air 12 x 16.5',
            'Chambre à air 600 x 9',
            'Chambre à air 700 x 12',
            'Chambre à air 10.5/80 x 18',
            'Chambre à air 18 x 19.5',
            'Chambre à air 12.5 x 20',
            'Chambre à air 1000 x 20',
            'Chambre à air 1200 x 20',
            'Chambre à air 14.5 x 20',
            'Chambre à air 600/40 x 22.5',
            'Chambre à air 16/70 x 20',
            'Valve Alcoa jante alu',
            'Valve TR413',
            'Valve TR414L',
            'Valve TR415',
            'Valve 1294 (445)',
            'Valve GC',
            'Valve 1486 (13)',
            'Valve GSW35',
            'Valve 2123 (13 COURTE)',
            'Valve 4441 (445)',
            'Valve 1151 (445)'
        ];
    }

    async uploadImage() {
        const actionSheet = await this.actionSheetController.create({
            buttons: [
                {
                    text: 'Ouvrir l’appareil photo',
                    handler: () => {
                        this.pickImage(this.camera.PictureSourceType.CAMERA);
                    },
                },
                {
                    text: 'Ouvrir la pellicule',
                    handler: () => {
                        this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                    },
                },
                {
                    text: 'Annuler',
                    role: 'cancel',
                },
            ],
            cssClass: 'actionSheet',
            mode: 'ios'
        });
        await actionSheet.present();
    }

    pickImage(source) {
        const options: CameraOptions = {
            quality: 100,
            sourceType: source,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(
            (imageData) => {
                const date = new Date();
                const name = 'image-' + date.getTime();
                this.photos.push({
                    nom: name,
                    data: 'data:image/*;base64,' + imageData
                });
            })
            .catch(e => console.log(e));
    }

    async deletePhoto(i: number) {
        const confirm = await this.alertCtrl.create({
            header: 'Supprimer cette pièce-jointe ?',
            message: 'Voulez vous vraiment procéder à la suppression de cette pièce jointe? Attention cette action est définitive.',
            buttons: [
                {
                    text: 'Valider',
                    handler: () => {
                        this.photos.splice(i, 1);
                    }
                },
                {
                    text: 'Annuler'
                }
            ],
            mode: 'ios'
        });
        await confirm.present();
    }
}
