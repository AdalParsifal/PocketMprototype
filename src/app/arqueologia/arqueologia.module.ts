import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArqueologiaPageRoutingModule } from './arqueologia-routing.module';

import { ArqueologiaPage } from './arqueologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArqueologiaPageRoutingModule
  ],
  declarations: [ArqueologiaPage]
})
export class ArqueologiaPageModule {}
