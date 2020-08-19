import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFichePageRoutingModule } from './detail-fiche-routing.module';

import { DetailFichePage } from './detail-fiche.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFichePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [DetailFichePage]
})
export class DetailFichePageModule {}
