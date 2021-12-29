import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtifactsPageRoutingModule } from './artifacts-routing.module';

import { ArtifactsPage } from './artifacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtifactsPageRoutingModule
  ],
  declarations: [ArtifactsPage]
})
export class ArtifactsPageModule {}
