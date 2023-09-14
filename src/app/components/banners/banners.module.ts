import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { HomeBannerComponent } from './home-banner/home-banner.component';



@NgModule({
  declarations: [
    HomeBannerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeBannerComponent
  ]
})
export class BannersModule { }
