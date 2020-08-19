import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MenuController, NavController} from '@ionic/angular';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {FicheFirebaseService} from '../../services/fiche-firebase.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {


    loginForm: FormGroup;
    user: any;


    constructor(private menu: MenuController, public router: Router, private formBuilder: FormBuilder, private userService: UserService,
                private ficheFirebaseService: FicheFirebaseService) {
        this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    submit() {
        this.userService.login(this.loginForm.value).subscribe(
            user => {
                console.log(user)
                localStorage.setItem('userId', '' + user.id);
                this.userService.storUser(user);
                this.userService.addToken(user.id, this.userService.token).subscribe();
                this.ficheFirebaseService.getFiches(user.id);
                this.router.navigate(['accueil']);
            },
            err => alert(err.error)
        );
        // this.router.navigate(['accueil']);
        // this.ficheFirebaseService.getFiches();
    }
}
