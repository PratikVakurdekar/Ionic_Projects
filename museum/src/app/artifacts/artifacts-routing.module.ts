import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtifactsPage } from './artifacts.page';

const routes: Routes = [
  {
    path: '',
    component: ArtifactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtifactsPageRoutingModule {}
