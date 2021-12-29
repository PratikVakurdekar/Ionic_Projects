import { Component, OnInit } from '@angular/core';
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { feedback } from '../shared/feedback';
import { FeedbackService } from '../shared/feedback.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  
    total: number;
    Feedbacks = [];
    constructor( private feedService: FeedbackService, private router: Router) {}
  
    ngOnInit(){
      this.fetchFeedback();
      const feedbackRes = this.feedService.getFeedbackList();
     feedbackRes.snapshotChanges().subscribe(res => {
        this.Feedbacks = [];
        res.forEach(item => {
          const a = item.payload.toJSON();
          a['$key'] = item.key;
        this.total += Number(a['rate']);
        console.log(this.total);
          this.Feedbacks.push(a as feedback);
        });
      });
    }
    fetchFeedback() {
      this.feedService.getFeedbackList().valueChanges().subscribe(res => {
        console.log(res);
      });
    }
  
    // buttonClick(id) {
    //   this.router.navigate(['/view-student/',id]);
    // }
  
  }
  