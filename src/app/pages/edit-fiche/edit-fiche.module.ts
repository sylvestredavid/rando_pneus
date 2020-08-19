import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFichePageRoutingModule } from './edit-fiche-routing.module';

import { EditFichePage } from './edit-fiche.page';
import {NouvelleFichePageRoutingModule} from '../nouvelle-fiche/nouvelle-fiche-routing.module';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFichePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [EditFichePage]
})
export class EditFichePageModule {}
