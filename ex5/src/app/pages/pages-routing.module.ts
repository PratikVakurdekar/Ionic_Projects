import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'admission',
    loadChildren: () => import('./admission/admission.module').then( m => m.AdmissionPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('./vision/vision.module').then( m => m.VisionPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'admission',
    loadChildren: () => import('./admission/admission.module').then( m => m.AdmissionPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'moodle',
    loadChildren: () => import('./moodle/moodle.module').then( m => m.MoodlePageModule)
  },
  {
    path: 'placements',
    loadChildren: () => import('./placements/placements.module').then( m => m.PlacementsPageModule)
  },
  {
    path: 'meet-links',
    loadChildren: () => import('./meet-links/meet-links.module').then( m => m.MeetLinksPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
