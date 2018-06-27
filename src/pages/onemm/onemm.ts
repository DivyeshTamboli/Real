import { ProductimagesPage } from './../productimages/productimages';
import { ProductService } from './../../services/product.service';
import { PointEightmmPage } from './../point-eightmm/point-eightmm';
import { OnepointtwofivemmPage } from './../onepointtwofivemm/onepointtwofivemm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from "@ionic-native/social-sharing";

/**
 * Generated class for the OnemmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onemm',
  templateUrl: 'onemm.html',
})
export class OnemmPage {

  productType: string[] = ['textures', 'solids', 'woodgrain','sparklingcollection','colourcore','eshine','speciallaminates'];

  constructor(
    private sharing: SocialSharing,
    public navCtrl: NavController,
    public productService: ProductService) {

  }


  fetchProducts(productType: string, i: number) {
    console.log('name of ' ,productType, i);
    this.productService.fetchProduct(i, productType).subscribe((data: any[]) => {
      console.log('data', data);

      console.log('data changed', data);
      
      this.navCtrl.push(ProductimagesPage, { products: data });
    });

  }

  onWhatsappShare() {
    this.sharing.shareViaWhatsApp('Divyesh').then(() => {
      console.log("Shared")
    }).catch(error => {
      console.log("Error");
    })
  }


}
