import { OnepointtwofivemmPage } from './../onepointtwofivemm/onepointtwofivemm';
import { OnemmPage } from './../onemm/onemm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import { PointEightmmPage } from '../point-eightmm/point-eightmm';

/**
 * Generated class for the ProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  productsList : any[]=[];
  constructor(public http:Http, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get('https://realtouchnotification.firebaseio.com/data/0/1mm/0/textures/0/polaris.json').map(res => res.json()).
    subscribe(data=>{
      console.log('data',data),
     this.productsList=data;
    }  )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  onClickOnemmPage() {

  
    this.navCtrl.push(OnemmPage);
  }

  onClickPointEightmmPage() {
    this.navCtrl.push(PointEightmmPage);
  }

  onClickOnepointtwofivemmPage() {
    this.navCtrl.push(OnepointtwofivemmPage);
  }

 


}
