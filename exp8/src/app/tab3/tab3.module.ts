import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CalendarModule } from 'ion2-calendar';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgCalendarModule,

    ExploreContainerComponentModule,
    RouterModule.forChild([
      {
        
        path: '', component: Tab3Page 
      }
    ]),
    CalendarModule
  ],
  declarations: [Tab3Page],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
  
})

export class Tab3PageModule {}
