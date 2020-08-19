import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FicheService} from '../../services/fiches.service';
import {UserService} from '../../services/user.service';
import {ActionSheetController, AlertController, NavController} from '@ionic/angular';
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
                private ficheFirebaseService: FicheFirebaseService) {
        this.ficheForm = this.formBuilder.group({
            arrive: ['', Validators.required],
            depart: [''],
            temps: [''],
            positionRoue: ['', Validators.required],
            nomClient: ['', Validators.required],
            nomAdresse: [''],
            dimension: [''],
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
        events.subscribe('ficheEnvoyed', () => { // quand une fiche est envoyée on retourne sur fichePage
            this.router.navigate(['fiche']);
        });
    }


    ngOnInit() {
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

    save(): void {
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
                    console.log(f);
                    fiche.id = f.key;
                    this.ficheFirebaseService.updateFiche(fiche)
                        .then(() => this.callback(fiche));
                }
            );

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
            'Retaillage',
            'Equilibrage petit PL',
            'Equilibrage grand PL',
            'Rallonge 1197',
            'Rallonge R210 (souple)',
            'Rallonge coudee W353',
            'Rallonge V615 (rigide)',
            'Gonflage mousse polyurethane (kg)',
            'Produit anti-crevaison',
            'Jante neuve 385/65 x 22.5 Deport 0',
            'Jante neuve 385/65 x 22.5 Deport 120',
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
            'Rustine PN02',
            'Rustine PN03',
            'Rustine PN04',
            'Rustine PN05',
            'Rustine PN06',
            'Valve Alcoa jante alu',
            'Valve TR 413',
            'Valve TR 414 L',
            'Valve TR 415',
            'Valva 1294',
            'Valve GC',
            'Vave 1486',
            'Valve GSW35',
            'Valve 2123',
            'Valve 4441',
            'Valve 1151',
        ];
    }

    async uploadImage() {
        const actionSheet = await this.actionSheetController.create({
            buttons: [
                {
                    text: 'Ouvrir l’appareil photo',
                    handler: () => {
                        console.log('Ouvrir l’appareil photo');
                        this.pickImage(this.camera.PictureSourceType.CAMERA);
                    },
                },
                {
                    text: 'Ouvrir la pellicule',
                    handler: () => {
                        console.log('Ouvrir la pellicule');
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
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(
            (imageData) => {
                const imageSplit = imageData.split('/');
                const name = imageSplit[imageSplit.length - 1];
                console.log(name);
                this.base64.encodeFile(imageData).then((base64File: string) => {
                    this.photos.push({
                        nom: name,
                        data: base64File
                    });
                }, (err) => {
                    console.log(err);
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
