import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router) {}

  showmore()
{
  document.getElementById("second").style.display = 'block';
  document.getElementById("first").style.display = 'none';

}
showless()
{
  document.getElementById("second").style.display = 'none';
  document.getElementById("first").style.display = 'block';

}
facebook()
{
window.open('https://www.facebook.com/spitmca/');
}
twitter()
{
  window.open('https://twitter.com/bvbspit');
}
instagram()
{
  window.open('https://www.instagram.com/ace_committee_spit_mca/');
}
}
