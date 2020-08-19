import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {LoginPage} from '../login/login.page';

@Component({
    selector: 'app-reglage',
    templateUrl: './reglage.page.html',
    styleUrls: ['./reglage.page.scss'],
})
export class ReglagePage {

    autosend: boolean;

    constructor(public alertCtrl: AlertController, public router: Router, private userService: UserService) {
        this.userService.getState().then(autosend => {
            this.autosend = autosend;
        });
    }

    deconnexion() {
        event.stopPropagation();
        this.showConfirm();
    }


    async showConfirm() {
        const confirm = await this.alertCtrl.create({
            header: 'Confirmation',
            message: 'Il est vivement déconseillé de vous déconnecter, cela supprimera toutes vos fiches. Souhaitez-vous malgré tout vous déconnecter ?',
            buttons: [
                {
                    text: 'Oui',
                    handler: () => {
                        localStorage.removeItem('userId');
                        this.router.navigate(['']);
                        // this.userService.deleteAll().then(() => this.router.navigate(['']));
                    }
                },
                {
                    text: 'Annuler'
                }
            ]
        });
        await confirm.present();
    }

    change(elem) {
      this.userService.autoSend(elem.checked);
    }
}
