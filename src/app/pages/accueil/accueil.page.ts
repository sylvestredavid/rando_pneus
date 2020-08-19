import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mesFiches(){
    this.router.navigate(['fiche']);
    // this.menu.swipeEnable(true);
  }

  reglages(){
    this.router.navigate(['reglage']);
    // this.menu.swipeEnable(true);
  }

  nouvelleFiche(){
    this.router.navigate(['nouvelle-fiche']);
    // this.menu.swipeEnable(true);
  }

}
