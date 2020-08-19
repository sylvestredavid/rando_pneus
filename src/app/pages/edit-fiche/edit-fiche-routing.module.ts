import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFichePage } from './edit-fiche.page';

const routes: Routes = [
  {
    path: '',
    component: EditFichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFichePageRoutingModule {}
