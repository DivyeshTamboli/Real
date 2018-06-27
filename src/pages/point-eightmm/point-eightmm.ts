import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import { ProductDetailsPage } from '../product-details/product-details';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
/**
 * Generated class for the PointEightmmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-point-eightmm',
  templateUrl: 'point-eightmm.html',
})
export class PointEightmmPage {
 
  texturesList : any[]=[];

  constructor( public http:Http, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController  ) {

    this.http.get('https://realtouchnotification.firebaseio.com/data/0/1mm/0/textures/0/polaris.json').map(res => res.json()).
    subscribe(data=>{
      console.log('data',data),
     this.texturesList=data;
     console.log('text',this.texturesList);
    } 
  
  
  )

  }

  showDetails(image)
  {
    console.log(image);
    this.modalCtrl.create(ProductDetailsPage,{data:image}).present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PointEightmmPage');
  }

}
