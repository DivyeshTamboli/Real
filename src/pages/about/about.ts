import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CompanyProfilePage } from './../company-profile/company-profile';
import { VissionPage } from './../vission/vission';
/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  onClickofcomapnyProfile()
  {
   this.navCtrl.push(CompanyProfilePage);
  }
  
  onClickofvission()
  {
   this.navCtrl.push(VissionPage);
  }
}
