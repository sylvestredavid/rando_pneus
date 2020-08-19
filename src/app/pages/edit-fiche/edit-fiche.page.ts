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
import {ActionSheetController, AlertController} from '@ionic/angular';
import {Base64} from '@ionic-native/base64/ngx';
import {Subscription} from 'rxjs';

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
    subrcisption: Subscription

    constructor(private formBuilder: FormBuilder,
                private ficheService: FicheService,
                private route: ActivatedRoute,
                public router: Router,
                public events: Events,
                public alertCtrl: AlertController,
                private camera: Camera,
                private base64: Base64,
                private utilsService: UtilsService,
                private actionSheetController: ActionSheetController,
                private ficheFirebaseService: FicheFirebaseService) {
        this.id = this.route.snapshot.params.id;
    }

    ngOnInit() {
        this.initializeItems();
        this.getFiche(this.id);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.signatureClient.signaturePad.fromDataURL(this.fiche.signatureClient);
            this.signatureResponsable.signaturePad.fromDataURL(this.fiche.signatureResponsable);

        }, 500);

    }

    getFiche(id: any) {
        this.ficheService.getFiche(id)
            .then(
                fiche => {
                    if (fiche) {
                        this.fiche = fiche;
                        this.constructFourni();
                    } else {
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
                    }
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
            depart: [this.fiche.depart],
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
    }


    calculTime(): void {
        this.ficheForm.controls.temps.setValue(this.utilsService.calculTime(this.ficheForm));
    }

    save(): void {
        this.ficheForm.value.signatureClient = this.signatureClient.getSignature(); //
        this.ficheForm.value.signatureResponsable = this.signatureResponsable.getSignature(); //
        this.ficheForm.value.photos = this.photos;
        if (isNaN(this.id)) {
            const fiche = this.ficheForm.value;
            fiche.id = this.fiche.id;
            fiche.userId = this.fiche.userId;
            this.ficheFirebaseService.updateFiche(fiche)
                .then(() => {
                    this.router.navigate(['fiche']);
                });
        } else {
            this.ficheService.edit(this.id, this.ficheForm.value)
                .then(() => {
                    this.router.navigate(['fiche']);
                });
        }
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

    ngOnDestroy(): void {
        this.subrcisption.unsubscribe()
    }
}
