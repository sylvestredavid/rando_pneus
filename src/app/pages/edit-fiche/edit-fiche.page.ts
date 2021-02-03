import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SignatureClientComponent} from '../../components/signatures/signature-client.component';
import {SignatureResponsableComponent} from '../../components/signatures/signature-responsable.component';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FicheService} from '../../services/fiches.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Events} from '../../services/events';
import * as moment from 'moment';
import {FicheModel} from '../../models/fiche.model';
import {FicheFirebaseService} from '../../services/fiche-firebase.service';
import {UtilsService} from '../../services/utils.service';
import {Camera, CameraOptions} from '@ionic-native/Camera/ngx';
import {ActionSheetController, AlertController, LoadingController} from '@ionic/angular';
import {Base64} from '@ionic-native/base64/ngx';
import {Subscription} from 'rxjs';
import {LZStringService} from 'ng-lz-string';
import {File} from '@ionic-native/file/ngx';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
    selector: 'app-edit-fiche',
    templateUrl: './edit-fiche.page.html',
    styleUrls: ['./edit-fiche.page.scss'],
})
export class EditFichePage implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('signatureClient') signatureClient: SignatureClientComponent;
    @ViewChild('signatureResponsable') signatureResponsable: SignatureResponsableComponent;


    fiche: FicheModel;
    photos: { nom: string; data: string }[];
    id: number;
    msgErreur: string;
    ficheForm: FormGroup;
    autosend: boolean;
    fournitures: FormGroup;
    fournituresList: Array<string>;
    fournituresArray: Array<FormGroup> = [];
    numberForm: number;
    subrcisption: Subscription;

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                public router: Router,
                public events: Events,
                public alertCtrl: AlertController,
                private camera: Camera,
                private base64: Base64,
                private utilsService: UtilsService,
                public loadingCtrl: LoadingController,
                private actionSheetController: ActionSheetController,
                private lz: LZStringService,
                private file: File,
                private afStorage: AngularFireStorage,
                private ficheFirebaseService: FicheFirebaseService) {
        this.id = this.route.snapshot.params.id;
    }

    ngOnInit() {
        this.initializeItems();
        this.getFiche(this.id);
    }

    ngAfterViewInit() {

    }

    getFiche(id: any) {
        this.subrcisption = this.ficheFirebaseService.fiches$.subscribe(
            fiches => {
                this.fiche = fiches.find(f => f.id === id);
                this.photos = this.fiche.photos ? this.fiche.photos : [];
                this.constructFourni();
                this.fiche.vue = true;
                this.fiche.modifieParBureau = false;
                this.ficheFirebaseService.updateFiche(this.fiche);
            }
        );
        // construit le tableau des fournitures
    }

    constructFourni() { // construit le tableau des fournitures
        if (this.fiche.fournitures) {
            for (const fourni of this.fiche.fournitures) {
                this.fournituresArray.push(
                    this.formBuilder.group({
                        nom: fourni.nom,
                        quantite: fourni.quantite
                    })
                );
            }
        }
        this.initForm(); // une fois qu'on a fait le tableau on init le form


    }


    initForm() {
        this.ficheForm = this.formBuilder.group({
            arrive: [this.fiche.arrive, Validators.required],
            depart: [this.fiche.depart, Validators.required],
            temps: [this.fiche.temps],
            positionRoue: [this.fiche.positionRoue, Validators.required],
            nomClient: [this.fiche.nomClient, Validators.required],
            nomAdresse: [this.fiche.nomAdresse],
            dimension: [this.fiche.dimension],
            dimensionLibre: [this.fiche.dimensionLibre],
            nvh: [this.fiche.nvh],
            kmCompteur: [this.fiche.kmCompteur],
            demontage: [this.fiche.demontage],
            depose: [this.fiche.depose],
            reparation: [this.fiche.reparation],
            chaair: [this.fiche.chaair],
            retaillage: [this.fiche.retaillage],
            emplatre: this.formBuilder.group({ // <-- the child FormGroup
                nom: this.fiche.emplatre ? this.fiche.emplatre.nom : '',
                quantite: this.fiche.emplatre ? this.fiche.emplatre.quantite : ''
            }),
            forfait: [this.fiche.forfait],
            fournitures: this.formBuilder.array(this.fournituresArray),
            observation: [this.fiche.observation],
            numeroPneu: [this.fiche.numeroPneu],
            pression: [this.fiche.pression],
            serrage: [this.fiche.serrage]
        });
        setTimeout(() => {
            this.signatureClient.signaturePad.fromDataURL(this.lz.decompress(this.fiche.signatureClient));
            this.signatureResponsable.signaturePad.fromDataURL(this.lz.decompress(this.fiche.signatureResponsable));

        }, 1000);
    }


    calculTime(): void {
        this.ficheForm.controls.temps.setValue(this.utilsService.calculTime(this.ficheForm));
    }

    async save() {
        const loading = await this.loadingCtrl.create({
            message: 'Modification de la fiche en cours...'
        });
        await loading.present();
        this.ficheForm.value.signatureClient = this.lz.compress(this.signatureClient.getSignature()); //
        this.ficheForm.value.signatureResponsable = this.lz.compress(this.signatureResponsable.getSignature()); //
        this.ficheForm.value.photos = this.photos;
        const fiche = this.ficheForm.value;
        fiche.id = this.fiche.id;
        fiche.userId = this.fiche.userId;
        this.ficheFirebaseService.updateFiche(fiche)
            .then(() => {
                loading.dismiss();
                this.router.navigate(['fiche']);
            });
    }


    addFourniture() {
        const control = this.ficheForm.controls.fournitures as FormArray;
        control.push(this.createItem());
    }

    createItem(): FormGroup {
        return this.formBuilder.group({
            nom: '',
            quantite: '1'
        });
    }

    deleteFourni(i: number) {
        const control = this.ficheForm.controls.fournitures as FormArray;
        control.removeAt(i);
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
                this.file.resolveLocalFilesystemUrl(imageData)
                    .then((entry: any) => {
                        entry.file(file => this.readFile(file));
                    })
                    .catch(err => {
                        alert('Error while reading file.');
                    });
                // const date = new Date();
                // const name = 'image-' + date.getTime();
                // this.photos.push({
                //     nom: name,
                //     data: 'data:image/*;base64,' + imageData
                // });
            })
            .catch(e => console.log(e));
    }

    readFile(file: any) {
        const reader = new FileReader();
        reader.onload = () => {
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            const date = new Date();
            const name = 'image-' + date.getTime();
            this.afStorage.ref('photos/' + localStorage.getItem('userId') + '/' + name)
                .put(imgBlob)
                .then((ok: any) => {
                    this.afStorage.ref(ok.metadata.fullPath).getDownloadURL().subscribe(
                        path => {
                            this.photos.push({
                                nom: name,
                                data: path
                            });
                        }
                    );
                });
        };
        reader.readAsArrayBuffer(file);
    }

    async deletePhoto(i: number) {
        const confirm = await this.alertCtrl.create({
            header: 'Supprimer cette pièce-jointe ?',
            message: 'Voulez vous vraiment procéder à la suppression de cette pièce jointe? Attention cette action est définitive.',
            buttons: [
                {
                    text: 'Valider',
                    handler: () => {
                        this.afStorage.storage.refFromURL(this.photos[i].data).delete();
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

    ngOnDestroy(): void {
        this.subrcisption.unsubscribe();
    }
}
