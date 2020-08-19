import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FicheFirebaseService} from '../services/fiche-firebase.service';

@Injectable()
export class IsConnectedGuard implements CanActivate {
    constructor(private ficheFirebaseService: FicheFirebaseService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('userId')) {
            if (this.ficheFirebaseService.fiches$) {
                console.log('on ne récupere pas')
                return true;
            } else {
                console.log('on récupere')
                this.ficheFirebaseService.getFiches(+localStorage.getItem('userId'));
                return true;
            }
        } else {
            this.router.navigate(['']);
        }
    }
}
