import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 // {
 //   path: '',
   // redirectTo: 'home',
    //pathMatch: 'full'
  //},
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'alphabets',
    loadChildren: () => import('./alphabets/alphabets.module').then( m => m.AlphabetsPageModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('./numbers/numbers.module').then( m => m.NumbersPageModule)
  },
  {
    path: 'colors',
    loadChildren: () => import('./colors/colors.module').then( m => m.ColorsPageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./stories/stories.module').then( m => m.StoriesPageModule)
  },
  {
    path: 'shapes',
    loadChildren: () => import('./shapes/shapes.module').then( m => m.ShapesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: 'practice',
    loadChildren: () => import('./practice/practice.module').then( m => m.PracticePageModule)
  },
  {
    path: 'lessons',
    loadChildren: () => import('./lessons/lessons.module').then( m => m.LessonsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
