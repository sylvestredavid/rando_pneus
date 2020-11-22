import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuController, NavController } from "@ionic/angular";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { FicheFirebaseService } from "../../services/fiche-firebase.service";
import { OneSignal } from "@ionic-native/onesignal/ngx";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  loginForm: FormGroup;
  user: any;

  constructor(
    private oneSignal: OneSignal,
    private menu: MenuController,
    public router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private ficheFirebaseService: FicheFirebaseService
  ) {
    this.loginForm = this.formBuilder.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  /*
   * @function oneSignalNotificationPush()
   * @summary Init oneSignal notification push
   */
  initOneSignalNotificationPush() {
    try {
      this.oneSignal.startInit(
        "5ed634ba-df2d-4ea7-8fd2-bbfcd32af902",
        "861834275864"
      );

      this.oneSignal.inFocusDisplaying(
        this.oneSignal.OSInFocusDisplayOption.Notification
      );

      this.oneSignal.sendTags({
        comiteo: "app-generic-test",
      });

      this.oneSignal.getPermissionSubscriptionState();

      this.oneSignal.endInit();
    } catch (e) {
      console.warn("cordova_not_available");
    }
  }

  appendDeviceToFirebase(user) {
    this.oneSignal
      .getIds()
      .then((onfulfilled) => {
        alert(onfulfilled.userId)
        this.userService.addToken(user.id, onfulfilled.userId).subscribe();
      })
      .catch(() => {});
  }

  submit() {
    this.initOneSignalNotificationPush();
    this.userService.login(this.loginForm.value).subscribe(
      (user) => {
        localStorage.setItem("userId", "" + user.id);
        this.userService.storUser(user);
        this.appendDeviceToFirebase(user);
        this.ficheFirebaseService.getFiches(user.id);

        this.router.navigate(["accueil"]);
      },
      (err) => alert(err.error)
    );
    // this.router.navigate(['accueil']);
    // this.ficheFirebaseService.getFiches();
  }
}
