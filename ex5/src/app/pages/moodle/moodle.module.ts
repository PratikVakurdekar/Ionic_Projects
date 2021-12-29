import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodlePageRoutingModule } from './moodle-routing.module';

import { MoodlePage } from './moodle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodlePageRoutingModule
  ],
  declarations: [MoodlePage]
})
export class MoodlePageModule {}
