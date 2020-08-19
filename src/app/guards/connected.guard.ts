import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";
import {FicheFirebaseService} from '../services/fiche-firebase.service';

@Injectable()
export class ConnectedGuard implements CanActivate {
  constructor(private ficheFirebaseService: FicheFirebaseService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('userId')) {
        this.ficheFirebaseService.getFiches(+localStorage.getItem('userId'));
        this.router.navigate(['accueil'])
    } else {
        return true;
    }
  }
}
