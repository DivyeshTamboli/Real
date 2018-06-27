
import { ProductService } from './../../services/product.service';
import { Product125Service } from './../../services/product125.service';


import { PointEightmmPage } from './../point-eightmm/point-eightmm';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import 'rxjs/Rx';
import { ProductDetailsPage } from '../product-details/product-details';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ProductimagesPage } from '../productimages/productimages';
import { Firebaseimage125Page } from '../firebaseimage125/firebaseimage125';


/**
 * Generated class for the OnepointtwofivemmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onepointtwofivemm',
  templateUrl: 'onepointtwofivemm.html',

})
export class OnepointtwofivemmPage {
  public products: object[] = [];
  texturesList : any[]=[];
  productType: string[] = ['curvewood', 'denveroak', 'frontier','highgloss','libris','maridian','oak','steekoak','supermatt','veneer','wonderwood','woody'];
  constructor( public http:Http, 
    public navCtrl: NavController,
     public navParams: NavParams, 
     public modalCtrl: ModalController,
     public productService: Product125Service  ) {

      this.products = this.navParams.get('products');
      
      
  
    }
    fetchImages(productType: any) {

      
    }

    fetchProducts(productType: string, i: number) {
      console.log(productType, i);
      this.productService.fetchProduct(i, productType).subscribe((data: any[]) => {
        console.log('data', data);
  
        console.log('data changed', data);
       // this.navCtrl.push(ProductimagesPage, { products: data });
        this.navCtrl.push(Firebaseimage125Page, { product: data });
       // this.navCtrl.push(ProductimagesPage, { products: data });
      });
   
    

   // this.http.get('https://realtouchnotification.firebaseio.com/data/0/1mm/0/textures/0/polaris.json').map(res => res.json()).
  //  subscribe(data=>{
    //  console.log('data',data),
   //  this.texturesList=data;
  //  } 
    
  
  
 // )


  
  }

  showDetails(image)
  {
    console.log(image);
    this.modalCtrl.create(ProductDetailsPage,{data:image}).present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OnepointtwofivemmPage');
  }
  onClickCurvewood()
  {
    this.navCtrl.push(PointEightmmPage);
  }

  onClickDenverOak()
  {
  this.navCtrl.push(PointEightmmPage);
  }
  onClickFrontier()
  {
    this.navCtrl.push(PointEightmmPage);
  }
  onClickHighgloss()
  {
    this.navCtrl.push(PointEightmmPage);
  }
  onClickLibris()
  {
    this.navCtrl.push(PointEightmmPage);
  }


  onClickMaridian()
  {
    this.navCtrl.push(PointEightmmPage);
  }

  onClickOak()
  {
    this.navCtrl.push(PointEightmmPage);
  }
  onClickSteekoak()
  {
    this.navCtrl.push(PointEightmmPage);
  }
  onClickSupermatt()
  {
    this.navCtrl.push(PointEightmmPage);
  }
  onClickVeneer()
  {
    this.navCtrl.push(PointEightmmPage);
  }
  onClickWonderwood()
  {
    this.navCtrl.push(PointEightmmPage);
  }
  onClickWoody()
  {
    this.navCtrl.push(PointEightmmPage);
  }

}
