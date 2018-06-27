import { Product125Service } from './../services/product125.service';
import { ProductService } from './../services/product.service';
import { ProductDetailsPage } from './../pages/product-details/product-details';
import { IntroPage } from './../pages/intro/intro';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import { picLinks } from './../Links/picLinks';
import { KlasBookPage } from './../pages/klas-book/klas-book';
import { LaminateBookPage } from './../pages/laminate-book/laminate-book';
import { Vivo125BookPage } from './../pages/vivo125-book/vivo125-book';
import { RealKitchenBookPage } from './../pages/real-kitchen-book/real-kitchen-book';
import { PixelDigitalBookPage } from './../pages/pixel-digital-book/pixel-digital-book';
import { SocialSharing } from '@ionic-native/social-sharing';
import { OnepointtwofivemmPage } from './../pages/onepointtwofivemm/onepointtwofivemm';
import { PointEightmmPage } from './../pages/point-eightmm/point-eightmm';
import { OnemmPage } from './../pages/onemm/onemm';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingController } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { QualityPage } from './../pages/quality/quality';
import { ProductsPage } from './../pages/products/products';
import { InquiryPage } from './../pages/inquiry/inquiry';
import { AboutPage } from './../pages/about/about';
import { ECataloguePage } from './../pages/e-catalogue/e-catalogue';
import { InAppBrowser } from "@ionic-native/in-app-browser";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { AgmCoreModule } from '@agm/core';
import { ProductimagesPage } from '../pages/productimages/productimages';
import { FirebaseImagesPage } from '../pages/firebase-images/firebase-images';
import { Firebaseimage125Page } from '../pages/firebaseimage125/firebaseimage125';
import { CompanyProfilePage } from '../pages/company-profile/company-profile';
import { VissionPage } from '../pages/vission/vission';


@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    HomePage,
    AboutPage,
    ProductsPage,
    QualityPage,
    ECataloguePage,
    InquiryPage,
    OnemmPage,
    PointEightmmPage,
    OnepointtwofivemmPage,
    LaminateBookPage,
    Vivo125BookPage,
    KlasBookPage,
    PixelDigitalBookPage,
    RealKitchenBookPage,
    ProductDetailsPage,
    ProductimagesPage,
    FirebaseImagesPage,
   Firebaseimage125Page,
   CompanyProfilePage,
VissionPage


  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC231NgYxZ1CJ38PTf65qFPTipPHnexfRM'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    HomePage,
    AboutPage,
    ProductsPage,
    QualityPage,
    ECataloguePage,
    InquiryPage,
    OnemmPage,
    PointEightmmPage,
    OnepointtwofivemmPage,
    PixelDigitalBookPage,
    RealKitchenBookPage,
    Vivo125BookPage,
    LaminateBookPage,
    KlasBookPage,
    ProductDetailsPage,
    ProductimagesPage,
    FirebaseImagesPage,
    Firebaseimage125Page,
    CompanyProfilePage,
    VissionPage





  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SocialSharing,
    InAppBrowser,
    picLinks,
    EmailComposer,
    CallNumber,
    LoadingController,
    IonicStorageModule,
    ProductService,
    Product125Service



  ]
})
export class AppModule { }
