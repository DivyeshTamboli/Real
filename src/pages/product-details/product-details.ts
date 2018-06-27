import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
data:any;
  constructor(private alertCtrl: AlertController,public viewctrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.get("data");
    console.log("in firebase page",this.data);
  }

  modalDismiss()
  {
    this.viewctrl.dismiss();  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  showAlert()
  {
    alert("Your Record has been captured!");
    console.log("divyesh");
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter Your Details',
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name'
        },
        {
          name: 'Mobile Number',
          placeholder: 'Mobile Number',
          type: 'phone'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if (data.username=='demo', data.password="demo") {
              // logged in! 
              this.presentAlert2();

            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }
  presentAlert2() {
    let alert = this.alertCtrl.create({
      title: 'Details Submitted Succesfully',
      subTitle: 'Our Executive will shortly Contact you.',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
