import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationPageRoutingModule } from '../destination/destination-routing.module';
import { DestinationPageModule } from '../destination/destination.module';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
dest()
{
  this.router.navigate(['/destination']);
}
about()
{
  this.router.navigate(['/aboutus']);
}
}
