import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoodlePage } from './moodle.page';

const routes: Routes = [
  {
    path: '',
    component: MoodlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodlePageRoutingModule {}
