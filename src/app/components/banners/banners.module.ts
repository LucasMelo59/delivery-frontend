import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { ParallaxBannerComponent } from './parallax-banner/parallax-banner.component';
import { SimpleBannerComponent } from './simple-banner/simple-banner.component';



@NgModule({
  declarations: [
    HomeBannerComponent,
    ParallaxBannerComponent,
    SimpleBannerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeBannerComponent,
    ParallaxBannerComponent,
    SimpleBannerComponent
  ]
})
export class BannersModule { }
