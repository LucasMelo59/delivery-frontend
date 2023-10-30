import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
  @Input() data_products: Produto_ArquivoDTO[] = []
  @Input() loading = false;

  constructor(private route: Router) {}
  ngOnInit(): void {


  }

  detailsProduct(produto_id: number) {
    this.route.navigate(['/produtos', produto_id])
  }


}
