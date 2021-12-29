import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

lessons()
{
  this.router.navigate(['/lessons']);
}
practice()
{
  this.router.navigate(['/practice']);
}
leaderboard()
{
  this.router.navigate(['/leaderboard']);
}
profile()
{
  this.router.navigate(['/profile']);
}


}
