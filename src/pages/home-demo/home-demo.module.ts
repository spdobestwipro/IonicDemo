import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeDemo } from './home-demo';

@NgModule({
  declarations: [
    HomeDemo,
  ],
  imports: [
    IonicPageModule.forChild(HomeDemo),
  ],
})
export class HomeDemoModule {}
