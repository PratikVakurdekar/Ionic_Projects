import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moodle',
  templateUrl: './moodle.page.html',
  styleUrls: ['./moodle.page.scss'],
})
export class MoodlePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  moodle()
  {
    window.open('https://moodle.spit.ac.in/login/index.php')
  }
  gclass()
  {
    window.open('https://classroom.google.com/u/1/h')
  }

}
