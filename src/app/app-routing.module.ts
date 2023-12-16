import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { AnnoncesPage } from './annonces/annonces.page';
import { UpdateAnnoncePage } from './annonces/update-annonce.page';
import { CreateAnnoncePage } from './annonces/create-annonce.page';
import { AllAnnoncesPage } from './all_annonces/all_annonces.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'annonces',
    component: AnnoncesPage
  },
  {
    path: 'all-annonces',
    component: AllAnnoncesPage
  },
  {
    path: 'create-annonce',
    component: CreateAnnoncePage
  },
  {
    path: 'update-annonce/:id',
    component: UpdateAnnoncePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
