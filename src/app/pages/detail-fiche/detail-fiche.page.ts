import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FicheService} from '../../services/fiches.service';
import {Events} from '../../services/events';
import {FicheModel} from '../../models/fiche.model';
import {FicheFirebaseService} from '../../services/fiche-firebase.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-detail-fiche',
    templateUrl: './detail-fiche.page.html',
    styleUrls: ['./detail-fiche.page.scss'],
})
export class DetailFichePage implements OnInit, OnDestroy {

    fiche: FicheModel;
    user: any;
    id: any;
    subscription: Subscription;

    constructor(public router: Router,
                public route: ActivatedRoute,
                private ficheService: FicheService,
                public events: Events,
                private ficheFirebaseService: FicheFirebaseService) { // un system d'event emitter pour revenir a la page "fiche" quand la pop est fermée (navcontroller inutilisable sur un service)
        this.id = this.route.snapshot.params.id;

        events.subscribe('ficheEnvoyed', () => {
            this.router.navigate(['fiche']);
        });

    }


    ngOnInit(): void {
        this.getFiche(this.id);
    }


    getFiche(id: number) {
        this.subscription = this.ficheFirebaseService.fiches$.subscribe(
            fiches => {
                this.fiche = fiches.find(f => f.id === id);
                this.fiche.vue = true;
                this.fiche.modifieParBureau = false;
                this.ficheFirebaseService.updateFiche(this.fiche);
            }
        );
    }


    send(event: Event, fiche: FicheModel): void {
        event.stopPropagation();
        this.ficheService.sendFiche(fiche);

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
