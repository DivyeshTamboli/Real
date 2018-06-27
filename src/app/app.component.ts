import { HomePage } from './../pages/home/home';

import { IntroPage } from './../pages/intro/intro';

import { InAppBrowser } from '@ionic-native/in-app-browser';



import { Component, ViewChild } from '@angular/core';
import { Nav, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { QualityPage } from './../pages/quality/quality';
import { ProductsPage } from './../pages/products/products';
import { InquiryPage } from './../pages/inquiry/inquiry';
import { AboutPage } from './../pages/about/about';
import { ECataloguePage } from './../pages/e-catalogue/e-catalogue';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { Platform } from 'ionic-angular/platform/platform';






@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;



  rootPage: any = HomePage;
  loader: any;

  pages: Array<{ title: string, component: any }>;
  icons: Array<{ name: string }>;
  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public inAppBrowser: InAppBrowser,
    public LoadingCtrl: LoadingController,
    public storage: Storage
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();


      var notificationOpenedCallback = function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };

      window["plugins"].OneSignal
        .startInit("ace74f7f-0c6b-472a-92ef-be4bb2e2f4a8", "318026263467")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    })

    firebase.initializeApp(
      {

        apiKey: "AIzaSyD-mO9a93Wt4Om8Y8io8N4ILNaRsbu5jEs",
        authDomain: "realtouchnotification.firebaseapp.com",
        databaseURL: "https://realtouchnotification.firebaseio.com",
        projectId: "realtouchnotification",
        storageBucket: "realtouchnotification.appspot.com",
        messagingSenderId: "318026263467"
      });


    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Home', component: HomePage },
      { title: 'About us', component: AboutPage },
      { title: 'Products', component: ProductsPage },
      { title: 'Quality', component: QualityPage },
      { title: 'E-Catalougue', component: ECataloguePage },
      { title: 'Inquiry', component: InquiryPage },



    ];

    this.icons = [

      { name: 'home' },
      { name: 'About us'},
      { name: 'Products'},
      { name: 'Quality' },
      { name: 'E-Catalougue' },
      { name: 'Inquiry' },



    ];

  }


  presentLoading() {

    this.loader = this.LoadingCtrl.create({
      content: "Authenticating..."
    });

    this.loader.present();

  }

  initializeApp() {

    this.presentLoading();
    this.platform.ready().then(() => {

      this.storage.get('introShown').then((result) => {

        if (result) {
          this.rootPage = 'HomePage';
        } else {
          this.rootPage = 'HomePage';
          this.storage.set('introShown', true);
        }

        this.loader.dismiss();

      });

    });

    // this.platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();

    // });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  onFbClick() {
    this.inAppBrowser.create('https://www.facebook.com/pages/Realtouch-Laminate/1019176871498478');
  }




}
