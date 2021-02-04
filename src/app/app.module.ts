import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ConnectedGuard } from "./guards/connected.guard";
import { IsConnectedGuard } from "./guards/is-connected.guard";
import { Camera } from "@ionic-native/Camera/ngx";
import { Base64 } from "@ionic-native/base64/ngx";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { LZStringModule, LZStringService } from 'ng-lz-string';
import { File } from '@ionic-native/file/ngx';
import {LaunchNavigator} from '@ionic-native/launch-navigator/ngx';

const firebaseConfig = {
  apiKey: "AIzaSyDIF_Gu-dVLpN6m1PYDUZ_rgKYXMs1-NcE",
  authDomain: "rando-pneus.firebaseapp.com",
  databaseURL: "https://rando-pneus.firebaseio.com",
  // databaseURL: "https://rando-pneus-test.firebaseio.com/",
  projectId: "rando-pneus",
  storageBucket: "rando-pneus.appspot.com",
  messagingSenderId: "861834275864",
  appId: "1:861834275864:web:91203fdc810af3fe93676d",
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
      name: "__mydb",
      driverOrder: ["sqlite", "websql", "indexeddb"],
    }),
  ],
  providers: [
    StatusBar,
    Camera,
    ConnectedGuard,
    IsConnectedGuard,
    SplashScreen,
    File,
    LaunchNavigator,
    LZStringService,
    Base64,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OneSignal,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
