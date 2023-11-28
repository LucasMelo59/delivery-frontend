import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Produto } from 'src/app/models/Produto';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit{
  @Input() data_products!: Produto_ArquivoDTO;
  @Output() carregaDadosProduto = new EventEmitter()

  constructor(private route: Router) {}
  ngOnInit(): void {

  }
  detailsProduct(produto_nome: string) {
    console.log("teste");

    // this.route.navigate(['/produtos', produto_nome])
    this.carregaDadosProduto.emit(produto_nome)
  }


  // detailsProduct(produto_id: number) {
  //   this.route.navigate(['/produtos', produto_id])
  // }


}
