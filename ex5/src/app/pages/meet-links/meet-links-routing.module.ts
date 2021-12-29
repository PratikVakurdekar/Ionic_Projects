import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetLinksPage } from './meet-links.page';

const routes: Routes = [
  {
    path: '',
    component: MeetLinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetLinksPageRoutingModule {}
