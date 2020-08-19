import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
private url = 'https://www.rando-pneus.fr/api/login.php';  // URL to web api
private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(public storage: Storage, public http: HttpClient) {

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



  login(user: UserModel) {
    if (user.login === null || user.password === null) {
      return null;
    } else {
      return this.http.post<UserModel>(this.url, JSON.stringify(user), {headers: this.headers})
      }
  }

  storUser(user: UserModel){
   this.storage.set('user', user);
  }

  addToken(userId: number, deviceToken: string){
    return this.http.post('https://www.rando-pneus.fr/api/add-token.php', {id: userId, token: deviceToken}, {headers: this.headers});
  }


  deleteAll() : Promise<any> {
   return this.storage.clear();
  }

  autoSend(state: boolean) {
      this.storage.set('autoSend', state);
  }

  getState(){
    return  this.storage.get('autoSend');
  }
}
