
import { NgModule } from '@angular/core';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardsSkeletonComponent } from './cards-skeleton/cards-skeleton.component';

@NgModule({
  declarations: [
    CardProdutoComponent,
    CardsSkeletonComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule
  ],
  exports: [
    CardProdutoComponent,
    CardsSkeletonComponent,
  ]

})
export class CardModule { }
