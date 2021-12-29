/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";

import { FormGroup, FormBuilder } from "@angular/forms";
import { StudentService } from './../shared/student.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  studentForm: FormGroup;
  user :any;
  navCtrl: any;
  constructor(
    public authService: AuthenticationService,    public router: Router,
    private stuService: StudentService,
    public fb: FormBuilder

  ) {

    if(authService.isLoggedIn){
      console.log("loggedIn");
       this.user = localStorage.getItem('email');
      console.log(localStorage.getItem('email'))
    }else{
      this.router.navigate(['login']);

    }
  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: [''],
      lname: [''],
      city: [''],
      email: [''],
      mobile: [''],
      class :[''],
      uid: [''],
      course: ['']
    })
  }
  formSubmit() {
    if (!this.studentForm.valid) {
      return false;
    } else {
      this.stuService.createStudent(this.studentForm.value).then(res => {
        console.log(res);
        this.studentForm.reset();
        this.router.navigate(['tabs']);
      })
        .catch(error => console.log(error));
    }
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
}
