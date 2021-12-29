import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.page.html',
  styleUrls: ['./practice.page.scss'],
})
export class PracticePage implements OnInit {

  constructor(public toastController:ToastController) { }
  async showToast(){
    const toast=await this.toastController.create({
      color:'success',
      message: 'Correct Answer',
      duration:2000,
      position:'middle'
      
    });
    toast.present();
   
  }
  async showtoast(){
    const toast=await this.toastController.create({
      color:'danger',
      message: 'Wrong Answer',
      duration:2000,
      position:'middle'
      
    });
    toast.present();
   
  }
  ngOnInit() {
  }

}
