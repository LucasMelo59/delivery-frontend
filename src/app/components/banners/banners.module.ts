import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { ParallaxBannerComponent } from './parallax-banner/parallax-banner.component';



@NgModule({
  declarations: [
    HomeBannerComponent,
    ParallaxBannerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeBannerComponent,
    ParallaxBannerComponent
  ]
})
export class BannersModule { }
