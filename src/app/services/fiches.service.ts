import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FicheModel} from '../models/fiche.model';
import {AlertController, LoadingController} from '@ionic/angular';
import {Events} from './events';
import { Storage } from '@ionic/storage';
import {FicheFirebaseService} from './fiche-firebase.service';


@Injectable({
    providedIn: 'root'
})
export class FicheService {
    private url = 'https://www.rando-pneus.fr/api/mailTest.php';  // URL to web api
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    fiche: any;
    user: UserModel;

    constructor(public events: Events, public loadingCtrl: LoadingController, public storage: Storage, public http: HttpClient,
                public alertCtrl: AlertController, private ficheFirebaseService: FicheFirebaseService) {
        this.fiche = [];
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    getFiches() {
        const arr = [];
        return this.storage.forEach((value, key, index) => {
            if (key.indexOf('fiche') === 0) {
                arr.push(value);
            }
        }).then(() => arr);
    }


    getFiche(id: number) {
        return this.storage.get('fiche' + id).then(
            (val) => val
        ).catch(this.handleError);
    }


    async sendFiche(fiche: FicheModel) {
        const loading = await this.loadingCtrl.create({
            message: 'Envoi en cours...'
        });

        await loading.present();

        const ficheClean: any = fiche;
        const user = await this.storage.get('user');
        // ficheClean.signatureClient = encodeURIComponent(window.btoa(ficheClean.signatureClient));
        // ficheClean.signatureResponsable = encodeURIComponent(window.btoa(ficheClean.signatureResponsable));
        ficheClean.nom = user && user.nom ? user.nom : fiche.nomClient;
        ficheClean.prenom = user && user.prenom ? user.prenom : '';
        /************************/
        return this.http
            .post(this.url, JSON.stringify(ficheClean), {headers: this.headers})
            .subscribe(
                res => {
                    if (res) {
                        loading.dismiss(); // fin du loading
                        this.presentAlert('Demande envoyée !', 'Votre fiche a bien été envoyée.', ficheClean, true);
                    }
                },
                error => {
                    console.log(error)
                    loading.dismiss(); // fin du loading
                    this.presentAlert('Erreur',
                        'Votre fiche n\'a pas été envoyée, elle sera envoyée lorsque le serveur sera joignable.', ficheClean, false);
                }
            );


    }

    create(fiche: FicheModel, callback) {

        this.storage.ready().then(() => {

            this.storage.get('i').then(val => {
                const i: number = val + 1; // set l'id de la fiche
                fiche.id = i;
                this.storage.set('fiche' + i, fiche);
                this.storage.set('i', i);

                callback(true);
            })
                .catch(this.handleError);
        });


    }


    edit(id: number, fiche: FicheModel) {

        fiche.id = id;
        return this.storage.set('fiche' + id, fiche);
    }

    delete(id: number) {
        return this.storage.remove('fiche' + id);
    }


    async presentAlert(title: string, subTitle: string, ficheClean: FicheModel, isSended: boolean) {
        const alert = await this.alertCtrl.create({
            header: title,
            subHeader: subTitle,
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        if (isSended) {
                            this.events.publish('ficheEnvoyed', {});
                        }
                    }
                }
            ]
        });
        ficheClean.envoye = true; // on maj le champs envoye a true, et on edit la fiche
        ficheClean.aEnvoyer = false; // on maj le champs envoye a true, et on edit la fiche

        if(isNaN(ficheClean.id)) {
            this.ficheFirebaseService.updateFiche(ficheClean)
        } else {
            this.edit(ficheClean.id, ficheClean);
        }

        await alert.present();
    }
}
