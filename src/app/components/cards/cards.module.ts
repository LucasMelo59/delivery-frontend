
import { NgModule } from '@angular/core';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardProdutoComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardProdutoComponent

  ]

})
export class CardModule { }
