import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SYMCAPage } from './symca.page';

const routes: Routes = [
  {
    path: '',
    component: SYMCAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SYMCAPageRoutingModule {}
