import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseImagesPage } from './firebase-images';

@NgModule({
  declarations: [
    FirebaseImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseImagesPage),
  ],
})
export class FirebaseImagesPageModule {}
