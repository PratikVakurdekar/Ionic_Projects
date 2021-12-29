import { Component } from '@angular/core';

import { AlertController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alert:AlertController, public toastController:ToastController) {}

  async presentAlertConfirm() {
    const alert = await this.alert.create ({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to Register for this event? ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
            this.toastController.create({
              message:'you have successfully registered',
              duration:2000,
              position:'middle',
              color:'success'
              
            }).then(res=>res.present());
           
          }
        }
        
      ]
    });

    await alert.present();
  }
  

}
