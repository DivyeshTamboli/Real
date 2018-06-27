import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the Firebaseimage125Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firebaseimage125',
  templateUrl: 'firebaseimage125.html',
})
export class Firebaseimage125Page {

  public products: object[] = [];
  public product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController ) {
    
    this.products = this.navParams.get('product');

    for (var propName in this.products) {
      if (this.products.hasOwnProperty(propName)) {
        this.product= this.products[propName];
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
