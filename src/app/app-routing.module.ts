import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hall',
    loadChildren: () => import('./hall/hall.module').then( m => m.HallPageModule)
  },
  {
    path: 'galeria-internacional',
    loadChildren: () => import('./galeria-internacional/galeria-internacional.module').then( m => m.GaleriaInternacionalPageModule)
  },
  {
    path: 'galeria-nacional',
    loadChildren: () => import('./galeria-nacional/galeria-nacional.module').then( m => m.GaleriaNacionalPageModule)
  },
  {
    path: 'arqueologia',
    loadChildren: () => import('./arqueologia/arqueologia.module').then( m => m.ArqueologiaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
