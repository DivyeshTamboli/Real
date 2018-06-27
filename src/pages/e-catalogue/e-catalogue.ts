import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { Vivo125BookPage } from './../vivo125-book/vivo125-book';
import { PixelDigitalBookPage } from './../pixel-digital-book/pixel-digital-book';
import { LaminateBookPage } from './../laminate-book/laminate-book';
import { RealKitchenBookPage } from './../real-kitchen-book/real-kitchen-book';
import { KlasBookPage } from './../klas-book/klas-book';
import { picLinks } from './../../Links/picLinks';


/**
 * Generated class for the ECataloguePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e-catalogue',
  templateUrl: 'e-catalogue.html',
})
export class ECataloguePage {
  imageLinks: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public picLinks: picLinks) {

    this.imageLinks = this.picLinks.getAllLinks();
  }

  
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ECataloguePage');
  }


  onClickofKlasBook() {
    this.navCtrl.push(KlasBookPage);
  }

  onClickofLaminateBook() {
    this.navCtrl.push(LaminateBookPage);
  }

  onClickofRealKitchenBook() {
    this.navCtrl.push(RealKitchenBookPage);
  }

  onClickofPixelDigitalBook() {
    this.navCtrl.push(PixelDigitalBookPage);
  }

  onClickofVivo125Book()
  {
    this.navCtrl.push(Vivo125BookPage);
  }

}
