import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {FicheService} from '../../services/fiches.service';
import {Events} from '../../services/events';
import {FicheModel} from '../../models/fiche.model';
import {MOCK_FICHES} from '../../models/fiches.mock';
import {FicheFirebaseService} from '../../services/fiche-firebase.service';

@Component({
    selector: 'app-fiche',
    templateUrl: './fiche.page.html',
    styleUrls: ['./fiche.page.scss'],
})
export class FichePage implements OnInit {
    fiches: FicheModel[];
    user: any;

    constructor(public alertCtrl: AlertController,
                public router: Router,
                private ficheService: FicheService,
                public events: Events,
                private ficheFirebaseService: FicheFirebaseService) {

        events.destroy('ficheEnvoyed');
    }

    getFiches(): void {

        this.ficheFirebaseService.fiches$.subscribe(
            fichesF => {
                this.fiches = []
                this.ficheService.getFiches().then(fiches => {
                        this.fiches = [...fiches, ...fichesF];
                    }
                );
                this.fiches = this.fiches.reverse()
            }
        );

        // this.fiches = MOCK_FICHES
    }


    ngOnInit(): void {
        this.getFiches();
    }


    detailPage(id: number): void {
        this.router.navigate(['detail-fiche/' + id]);
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
                        this.ficheService.delete(id).then(
                            () => {
                                this.ficheFirebaseService.deleteFiche(id)
                                    .then(() => this.removeItem(id))
                            }
                        );
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
}
