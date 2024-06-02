import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaNacionalPage } from './galeria-nacional.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaNacionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaNacionalPageRoutingModule {}
