import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampingPageRoutingModule } from './camping-routing.module';

import { CampingPage } from './camping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampingPageRoutingModule
  ],
  declarations: [CampingPage]
})
export class CampingPageModule {}
