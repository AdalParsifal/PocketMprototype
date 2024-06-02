import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArqueologiaPage } from './arqueologia.page';

const routes: Routes = [
  {
    path: '',
    component: ArqueologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArqueologiaPageRoutingModule {}
