import { Declaration } from './../../../node_modules/@types/estree/index.d';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { CardModule } from './cards/cards.module';
import { CommonModule } from '@angular/common';
import { HeadersModule } from './headers/headers.module';
import { FeatureComponent } from './feature/feature.component';
import { BannersModule } from './banners/banners.module';
import { FooterHomeComponent } from './footers/footer-home/footer-home.component';
import { FootersModule } from './footers/footers.module';
import { RouterModule } from '@angular/router';
import { CarroselComponent } from './carrosel/carrosel.component';
import { SectionsViewsCardsProdutosComponent } from './exibicao/sections-views-cards-produtos/sections-views-cards-produtos.component';
import { register } from 'swiper/element/bundle';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SectionsViewsCategoryComponent } from './exibicao/sections-views-category/sections-views-category.component';
import { SliderComponent } from './sliders/slider/slider.component';
import { SectionsCardsGuideComponent } from './exibicao/sections-cards-guide/sections-cards-guide.component';
import { SimpleBannerComponent } from './banners/simple-banner/simple-banner.component';
import { SectionBlogComponent } from './exibicao/section-blog/section-blog.component';
import { SectionInstaBlogComponent } from './exibicao/section-insta-blog/section-insta-blog.component';

register();

@NgModule({
  declarations: [
    FeatureComponent,
    CarroselComponent,
    SectionsViewsCardsProdutosComponent,
    BreadcrumbComponent,
    SectionsViewsCategoryComponent,
    SliderComponent,
    SectionsCardsGuideComponent,
    SectionBlogComponent,
    SectionInstaBlogComponent

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
    FootersModule,
    CarroselComponent,
    SectionsViewsCardsProdutosComponent,
    BreadcrumbComponent,
    SliderComponent,
    SectionsCardsGuideComponent,
    SectionBlogComponent,
    SectionInstaBlogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
