import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FCM} from '../../plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM';
import {ConnectedGuard} from './guards/connected.guard';
import {IsConnectedGuard} from './guards/is-connected.guard';
import { Camera } from '@ionic-native/Camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

const firebaseConfig = {
    apiKey: 'AIzaSyBDydLYUR4N_NjfJZ8wV2iWweVkRUno7Sg',
    authDomain: 'rando-pneu.firebaseapp.com',
    databaseURL: 'https://rando-pneu.firebaseio.com',
    projectId: 'rando-pneu',
    storageBucket: 'rando-pneu.appspot.com',
    messagingSenderId: '468724977097',
    appId: '1:468724977097:web:69b3472a067293f0616c18'
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        IonicStorageModule.forRoot({
            name: '__mydb',
            driverOrder: ['sqlite', 'websql', 'indexeddb']
        })
    ],
    providers: [
        StatusBar,
        Camera,
        ConnectedGuard,
        IsConnectedGuard,
        SplashScreen,
        Base64,
        FCM,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
