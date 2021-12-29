import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampingPage } from './camping.page';

const routes: Routes = [
  {
    path: '',
    component: CampingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampingPageRoutingModule {}
