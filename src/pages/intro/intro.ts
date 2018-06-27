import { Storage } from '@ionic/storage';

import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  }

 ionViewDidLoad() {

  
    this.storage.get('intro-done').then(done => {
     if (!done) {
         this.storage.set('intro-done', true);
         this.navCtrl.setRoot(IntroPage);
      }
     });
   }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
    
  }
 



  
}
