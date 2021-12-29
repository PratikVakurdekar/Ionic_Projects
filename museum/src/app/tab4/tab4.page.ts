import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public toastController:ToastController) { }

  ngOnInit() {
  }
  async showToast(){
    const toast=await this.toastController.create({
      color:'success',
      message: 'Thank you for your valuable feedback',
      duration:2000,
      position:'middle'
      
    });
    toast.present();
   
  }

}
