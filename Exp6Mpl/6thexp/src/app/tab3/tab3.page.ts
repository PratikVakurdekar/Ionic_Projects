import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public toast:ToastController,public router:Router){}
 
  async showToast(){
    const toast=await this.toast.create({
      color:'success',
      message: 'Your Application is been Submitted',
      duration:2000,
      position:'middle'
      
    });
    toast.present();
   
  }
  
apply(){
  this.router.navigate(['tabs/tab1']);
}  



}
