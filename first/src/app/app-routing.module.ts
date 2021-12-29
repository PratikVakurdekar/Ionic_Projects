import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'destination',
    loadChildren: () => import('./destination/destination.module').then( m => m.DestinationPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'international',
    loadChildren: () => import('./international/international.module').then( m => m.InternationalPageModule)
  },
  {
    path: 'domestic',
    loadChildren: () => import('./domestic/domestic.module').then( m => m.DomesticPageModule)
  },
  {
    path: 'camping',
    loadChildren: () => import('./camping/camping.module').then( m => m.CampingPageModule)
  },
  {
    path: 'bike',
    loadChildren: () => import('./bike/bike.module').then( m => m.BikePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
