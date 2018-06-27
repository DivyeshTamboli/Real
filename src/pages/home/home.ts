import { IntroPage } from './../intro/intro';
import { Storage } from '@ionic/storage';
import { picLinks } from './../../Links/picLinks';



import { ECataloguePage } from './../e-catalogue/e-catalogue';

import { OnepointtwofivemmPage } from './../onepointtwofivemm/onepointtwofivemm';
import { PointEightmmPage } from './../point-eightmm/point-eightmm';
import { OnemmPage } from './../onemm/onemm';


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ProductsPage } from '../products/products';
import { InquiryPage } from '../inquiry/inquiry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  splash=null;


  
  imageLinks: string[] = [];

  constructor(public navCtrl: NavController,
    public picLinks: picLinks, public storage:Storage) {

      if(this.splash == '' || typeof this.splash !== "undefined" || null == this.splash) {
        this.splash = true; 
        } 
        

      

    this.imageLinks = this.picLinks.getAllLinks();


  }


 ionViewDidLoad() {
  this.storage.get('intro-done').then(done => {
    if (!done) {
      this.storage.set('intro-done', true);
      this.navCtrl.setRoot(IntroPage);}});
      
    setTimeout(() =>
      this.splash = false, 3000);
      
  }

  onClickofCircleAbout(){

    this.navCtrl.push(AboutPage);
  }

  onClickofCircleProducts(){
    console.log("clicked");
        this.navCtrl.push(ProductsPage);
      }
      onClickofCircleCatalogue(){
        console.log("clicked");
            this.navCtrl.push(ECataloguePage);
          }
          onClickofCircleInquiry(){
            console.log("clicked");
                this.navCtrl.push(InquiryPage);
              }
  
  onClickOnemmPage() {
  console.log("clicked");
    this.navCtrl.push(OnemmPage);
  }

  onClickPointEightmmPage() {
    this.navCtrl.push(PointEightmmPage);
  }

  onClickOnepointtwofivemmPage() {
    console.log("clicked2.5");
    this.navCtrl.push(OnepointtwofivemmPage);
  }

  onClickEcataloguePage() {
    this.navCtrl.push(ECataloguePage);
  }








}










