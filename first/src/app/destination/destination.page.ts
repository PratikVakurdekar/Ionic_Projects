import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
 
  international()
  {
    this.router.navigate(['/international']);
  }
  camping()
  {
    this.router.navigate(['/camping']);
  }
  
  bike()
  {
    this.router.navigate(['/bike']);
  }

}
