import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetLinksPageRoutingModule } from './meet-links-routing.module';

import { MeetLinksPage } from './meet-links.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetLinksPageRoutingModule
  ],
  declarations: [MeetLinksPage]
})
export class MeetLinksPageModule {}
