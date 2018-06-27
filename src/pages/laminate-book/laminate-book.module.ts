import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaminateBookPage } from './laminate-book';

@NgModule({
  declarations: [
    LaminateBookPage,
  ],
  imports: [
    IonicPageModule.forChild(LaminateBookPage),
  ],
})
export class LaminateBookPageModule {}
