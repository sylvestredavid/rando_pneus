import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { UserService } from "./services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  pages: Array<{ title: string; url: string; icon: string }>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private router: Router
  ) {
    this.initializeApp();
    this.pages = [
      { title: "Accueil", url: "accueil", icon: "home-sharp" },
      { title: "Mes fiches", url: "fiche", icon: "document-text-sharp" },
      { title: "Nouvelle fiche", url: "nouvelle-fiche", icon: "pencil-sharp" },
      { title: "Réglages", url: "reglage", icon: "settings-sharp" },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
}
