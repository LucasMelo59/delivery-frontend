
import { NgModule } from '@angular/core';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CardProdutoComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardProdutoComponent,
  ]

})
export class CardModule { }
