import { Declaration } from './../../../node_modules/@types/estree/index.d';

import { NgModule } from '@angular/core';

import { CardModule } from './cards/cards.module';
import { CommonModule } from '@angular/common';
import { HeadersModule } from './headers/headers.module';
import { FeatureComponent } from './feature/feature.component';
import { BannersModule } from './banners/banners.module';
import { FooterHomeComponent } from './footers/footer-home/footer-home.component';
import { FootersModule } from './footers/footers.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    HeadersModule,
    BannersModule,
    FootersModule,

  ],
  exports: [
    CardModule,
    HeadersModule,
    FeatureComponent,
    BannersModule,
    FootersModule
  ]
})
export class ComponentsModule { }
