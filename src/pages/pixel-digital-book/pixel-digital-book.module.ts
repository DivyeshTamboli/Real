import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PixelDigitalBookPage } from './pixel-digital-book';

@NgModule({
  declarations: [
    PixelDigitalBookPage,
  ],
  imports: [
    IonicPageModule.forChild(PixelDigitalBookPage),
  ],
})
export class PixelDigitalBookPageModule {}
