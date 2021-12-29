import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router) {}

 info()
 {
   window.open('https://www.spit.ac.in/')
 }
 library()
 {
   window.open('https://library.spit.ac.in/syllabus.html')
 }
 
}
