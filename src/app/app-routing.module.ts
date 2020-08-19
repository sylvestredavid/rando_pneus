import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ConnectedGuard} from './guards/connected.guard';
import {IsConnectedGuard} from './guards/is-connected.guard';

const routes: Routes = [
  {path: '', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [ConnectedGuard]},
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule),
    canActivate: [IsConnectedGuard]
  },
  {
    path: 'fiche',
    loadChildren: () => import('./pages/fiche/fiche.module').then( m => m.FichePageModule),
    canActivate: [IsConnectedGuard]
  },
  {
    path: 'nouvelle-fiche',
    loadChildren: () => import('./pages/nouvelle-fiche/nouvelle-fiche.module').then( m => m.NouvelleFichePageModule),
    canActivate: [IsConnectedGuard]
  },
  {
    path: 'reglage',
    loadChildren: () => import('./pages/reglage/reglage.module').then( m => m.ReglagePageModule),
    canActivate: [IsConnectedGuard]
  },
  {
    path: 'edit-fiche/:id',
    loadChildren: () => import('./pages/edit-fiche/edit-fiche.module').then( m => m.EditFichePageModule),
    canActivate: [IsConnectedGuard]
  },
  {
    path: 'detail-fiche/:id',
    loadChildren: () => import('./pages/detail-fiche/detail-fiche.module').then( m => m.DetailFichePageModule),
    canActivate: [IsConnectedGuard]
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./pages/a-propos/a-propos.module').then( m => m.AProposPageModule),
    canActivate: [IsConnectedGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
