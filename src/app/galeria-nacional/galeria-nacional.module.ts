import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaNacionalPageRoutingModule } from './galeria-nacional-routing.module';

import { GaleriaNacionalPage } from './galeria-nacional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaNacionalPageRoutingModule
  ],
  declarations: [GaleriaNacionalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GaleriaNacionalPageModule {}
