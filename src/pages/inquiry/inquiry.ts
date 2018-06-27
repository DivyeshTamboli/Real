import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {Http, Request, RequestMethod} from "@angular/http";
import { NgForm } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';



@IonicPage()
@Component({
  selector: 'page-inquiry',
  templateUrl: 'inquiry.html',
})
export class InquiryPage {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer: EmailComposer,private callNumber: CallNumber) {



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InquiryPage');
  }



  onSubmit(form: NgForm) {     

        let email = {
          to: 'divyesh.as.dvs@gmail.com',
          subject: 'Support Team',
          body: 'dfdfdf',
          isHtml: true
        };

        this.emailComposer.open(email);
      
  
    console.log(form);
  }

  onCallClick()
  {
    this.callNumber.callNumber("09925146551", true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
    
  }

  



}
