import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArqueologiaPageRoutingModule } from './arqueologia-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ArqueologiaPage } from './arqueologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArqueologiaPageRoutingModule,
    SharedModule 
  ],
  declarations: [ArqueologiaPage]
})
export class ArqueologiaPageModule {}
