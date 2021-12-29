import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(protected router:Router) {}
 
  async onClick(){
    this.router.navigate(['/student-list'])
  }
}
