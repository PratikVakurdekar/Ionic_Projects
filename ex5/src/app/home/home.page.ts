import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController) {}
  openEnd() {
    this.menu.open('end');
  }

  

  college()
  {
   this.menu.enable(true,'menu-content');
   this.menu.open('menu-content'); 
  }
  faculty()
  {
   this.menu.enable(true,'menu-content');
   this.menu.open('menu-content'); 
  }
  placement()
  {
   this.menu.enable(true,'menu-content');
   this.menu.open('menu-content'); 
  }
  events()
  {
   this.menu.enable(true,'menu-content');
   this.menu.open('menu-content'); 
  }
  logout()
  {
   this.menu.enable(true,'menu-content');
   this.menu.open('menu-content'); 
  }

}
