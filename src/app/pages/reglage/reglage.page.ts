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
        localStorage.removeItem('userId');
        this.router.navigate(['']);
    }

    change(elem) {
      this.userService.autoSend(elem.checked);
    }
}
