import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SYMCAPageRoutingModule } from './symca-routing.module';

import { SYMCAPage } from './symca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SYMCAPageRoutingModule
  ],
  declarations: [SYMCAPage]
})
export class SYMCAPageModule {}
