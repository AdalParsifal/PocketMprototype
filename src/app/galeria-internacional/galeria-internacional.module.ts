import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaInternacionalPageRoutingModule } from './galeria-internacional-routing.module';

import { GaleriaInternacionalPage } from './galeria-internacional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaInternacionalPageRoutingModule
  ],
  declarations: [GaleriaInternacionalPage]
})
export class GaleriaInternacionalPageModule {}
