import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseImagesPage } from '../firebase-images/firebase-images';
import { concat } from 'rxjs/operator/concat';

/**
 * Generated class for the ProductimagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productimages',
  templateUrl: 'productimages.html',
})
export class ProductimagesPage {
  productType: string[]; 
  public products: object[] = [];
  public nameArr: any[] = [];
  public temp: any[] = [];
  public names = Object.getOwnPropertyNames(this.products);
  public productdetails;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = this.navParams.get('products');
      console.log('prods',this.products);
    //console.log('names',this.names);
   



    if(this.products.length==23){
     this.productdetails=['Polaris','Loftwood','Tanoak','Maridian Wood','Veneer 1.0','Deep Oak','Maribino','Luxury Wood','Bianco','Oak','SuperMatt 1.0','Castello','Mood Wood','TrendzWood','BarkWood','Luxia','Artex','Caissa','Romanza Wood','Rubber Wood Alabaster','Woody Stripes','Natural Collection','Carissa E-Shine'];
    this.productType= ['polaris', 'loftwood', 'tanoak','maridianwood','veneer10','deepoak','maribino','luxurywood','binaco','oak10','supermatt10','castello','moodwood','trendzwood','barkwood','luxia','artex','carissa','romanzawood','rubberwoodalabaster','woddystripes','naturalcollection','carissaeshine'];
    }
    else
    {
      if(this.products.length==2){
        this.productdetails=['Plain Colours','Foil'];
        this.productType= ['plaincolours','foil'];
      
       }
       else
       {
        if(this.products.length==7){
          
          this.productdetails=['Emboss Digital Doorskin','Floral','GeorgiaFame lather','Kitchen Cabinate Digital','Laser cutting','Metal Door wardrobe','Pixel Digital'];
          this.productType= ['emboosdigitaldoorskin','floral','georgiafamelather','kitchenlaminatesdigitallaminates','lasercuttinglaminates','metaldoorwardrobe','pixeldigital'];
        
         }
         else
         {
          if(this.products.length==1)
          {
         
          this.temp=this.products['0'];
          if(this.temp["Woodgrain"]){
            this.productdetails=['Woodgrain'];
            this.productType= ['woodgrain'];
            }
          if(this.temp["sparklingcollection"]){
              this.productdetails=['Sparkling Collection'];
              this.productType= ['sparklingcollections'];
              }
          if(this.temp["colourcore"]){
                this.productdetails=['Colour Core'];
                this.productType= ['colourcore'];
                }          
          if(this.temp["eshine"]){
                  this.productdetails=['E-Shine'];
                  this.productType= ['extrashine'];
                  }   
          
          
           }
     
         }
   
       }

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductimagesPage');
    //console.log('productdetailss',this.productdetails);
   
  }

  fetchImages(product: any) {
    this.navCtrl.push(FirebaseImagesPage, { product: product });
  }

}
