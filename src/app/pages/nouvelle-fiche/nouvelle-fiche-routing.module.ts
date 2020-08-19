import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelleFichePage } from './nouvelle-fiche.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelleFichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelleFichePageRoutingModule {}
