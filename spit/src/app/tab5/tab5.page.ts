import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Input, EventEmitter ,Output} from "@angular/core";

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  @Input() rating: number ;
  currentRate=0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;
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
