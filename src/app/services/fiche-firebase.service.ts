import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {FicheModel} from '../models/fiche.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FicheFirebaseService {
  ficheList: AngularFireList<FicheModel>;
  fiches$: Observable<FicheModel[]>;

  constructor(private af: AngularFireDatabase, private http: HttpClient) {
  }

  getFiches(userId: number) {
    console.log('getFiches')
    this.ficheList = this.af.list<FicheModel>('fiches',
        ref => ref.orderByChild('userId').equalTo('' + userId));
    this.fiches$ = this.ficheList.valueChanges();
  }

  addFiche(fiche: any) {
    return this.af.list<FicheModel>('fiches').push(fiche);
  }

  updateFiche(fiche: any) {
    return this.af.list<FicheModel>('fiches').update(fiche.id, fiche);
  }

  deleteFiche(id: string) {
    if (id) {
      return this.af.list<FicheModel>('fiches').remove(id);
    }
  }
}
