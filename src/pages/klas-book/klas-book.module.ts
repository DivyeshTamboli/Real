import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KlasBookPage } from './klas-book';

@NgModule({
  declarations: [
    KlasBookPage,
  ],
  imports: [
    IonicPageModule.forChild(KlasBookPage),
  ],
})
export class KlasBookPageModule {}
