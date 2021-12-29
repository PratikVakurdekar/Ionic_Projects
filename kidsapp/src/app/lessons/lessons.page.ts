import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  alphabets()
{
  this.router.navigate(['/alphabets']);
}
numbers()
{
  this.router.navigate(['/numbers']);
}
stories()
{
  this.router.navigate(['/stories']);
}
colors()
{
  this.router.navigate(['/colors']);
}
shapes()
{
  this.router.navigate(['/shapes']);
}

}
