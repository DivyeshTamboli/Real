import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';

/**
 * Generated class for the FirebaseImagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firebase-images',
  templateUrl: 'firebase-images.html',
})
export class FirebaseImagesPage {
  public product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController ) {
    
    this.product = this.navParams.get('product');

    for (var propName in this.product) {
      if (this.product.hasOwnProperty(propName)) {
        this.product = this.product[propName];
        // do something with each element here
      }
    }
    console.log('product111', this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebaseImagesPage');
    
  }
  showDetails(image)
  {
    console.log("image-->",image);
    this.modalCtrl.create(ProductDetailsPage,{data:image}).present();
  }
}
