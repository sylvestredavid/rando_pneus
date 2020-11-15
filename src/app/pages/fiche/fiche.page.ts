import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';
import {FicheService} from '../../services/fiches.service';
import {Events} from '../../services/events';
import {FicheModel} from '../../models/fiche.model';
import {MOCK_FICHES} from '../../models/fiches.mock';
import {FicheFirebaseService} from '../../services/fiche-firebase.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-fiche',
    templateUrl: './fiche.page.html',
    styleUrls: ['./fiche.page.scss'],
})
export class FichePage implements OnInit, OnDestroy {
    fiches: FicheModel[];
    sub: Subscription;
    user: any;

    constructor(public alertCtrl: AlertController,
                public router: Router,
                private ficheService: FicheService,
                public events: Events,
                public loadingCtrl: LoadingController,
                private ficheFirebaseService: FicheFirebaseService) {

        events.destroy('ficheEnvoyed');
    }

   async getFiches() {
        const loading = await this.loadingCtrl.create({
            message: 'Récupération des fiches en cours...'
        });
        if(!this.fiches) {
            await loading.present();
        }

        this.sub = this.ficheFirebaseService.fiches$.subscribe(
            fichesF => {
                this.fiches = fichesF;
                loading.dismiss();
            }
        );

        // this.fiches = MOCK_FICHES
    }


    ngOnInit(): void {
        this.getFiches();
    }


    detailPage(id: number): void {
        this.router.navigate(['edit-fiche/' + id]);
    }


    delete(event: Event, id: number): void {
        event.stopPropagation();
        this.showConfirm(id);
    }

    edit(event: Event, id: number): void {
        event.stopPropagation();
        this.router.navigate(['edit-fiche/' + id]);
    }

    send(event: Event, fiche: FicheModel): void {
        event.stopPropagation();
        this.ficheService.sendFiche(fiche);
    }

    async showConfirm(id: any) {
        const confirm = await this.alertCtrl.create({
            header: 'Confirmation',
            message: 'Voulez-vous vraiment supprimer cette fiche ?',
            buttons: [
                {
                    text: 'Oui',
                    handler: () => {
                        this.ficheFirebaseService.deleteFiche(id)
                            .then(() => this.removeItem(id));
                    }
                },
                {
                    text: 'Annuler',
                    handler: () => {
                    }
                }
            ]
        });
        await confirm.present();
    }


    removeItem(id: any) {
        for (let i = 0; i < this.fiches.length; i++) {
            if (this.fiches[i].id === id) {
                this.fiches.splice(i, 1);
            }
        }
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
