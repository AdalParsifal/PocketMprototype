import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaInternacionalPage } from './galeria-internacional.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaInternacionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaInternacionalPageRoutingModule {}
