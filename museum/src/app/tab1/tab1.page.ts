import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}
painting()
{
  this.router.navigate(['/paintings']);
}
sculpture()
{
  this.router.navigate(['/sculptures']);
}
animal()
{
  this.router.navigate(['/animals']);
}
artifact()
{
  this.router.navigate(['/artifacts']);
}
}
