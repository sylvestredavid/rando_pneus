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
export class UtilsService {

    constructor() {
    }


    calculTime(ficheForm): void {
        if (ficheForm.get('depart').value !== '' && ficheForm.get('arrive').value !== '') {
            const arrive = new Date(ficheForm.get('arrive').value);
            const depart = new Date(ficheForm.get('depart').value);
            arrive.setSeconds(0, 0)
            depart.setSeconds(0, 0)
            const diff = depart.getTime() - arrive.getTime()
            console.log(diff)
            let heures: any = Math.floor(diff / (1000 * 60 * 60));
            let minutes: any = Math.floor(diff / (1000 * 60)) - (heures * 60);
            console.log(heures)
            console.log(minutes)
            heures = heures ? heures + 'h' : '';
            minutes = this.formatTempsPasse(minutes, 'm');
            return heures + minutes;

        }
    }

    formatTempsPasse(dataTime: number, initial: string) {
        let unit: any = dataTime;
        if (unit === 0) {
            unit = '';
        } else if (unit > 0 && unit < 10) {
            unit = '0' + unit + initial;
        } else {
            unit = unit + initial;
        }
        return unit;
    }
}
