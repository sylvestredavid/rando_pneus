import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleFichePageRoutingModule } from './nouvelle-fiche-routing.module';

import { NouvelleFichePage } from './nouvelle-fiche.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NouvelleFichePageRoutingModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
  declarations: [NouvelleFichePage]
})
export class NouvelleFichePageModule {}
