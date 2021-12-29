import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
  
})
export class Tab2Page {

  constructor(public alert:AlertController, public toastController:ToastController, public actionSheetController: ActionSheetController) {}
  

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
  async showToast(){
    const toast=await this.toastController.create({
      color:'success',
      message: 'Thank you for your valuable feedback',
      duration:2000,
      position:'middle'
      
    });
    toast.present();
  }
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Share',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Whats-App',
          role: 'success',
          icon: 'logo-whatsapp',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Instagram',
          icon: 'logo-instagram',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Vimeo',
          icon: 'logo-vimeo',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  
      const { role } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  
  

}
