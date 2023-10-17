import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Produto } from 'src/app/models/Produto';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {

  constructor(private route: Router, private  spinner: NgxSpinnerService) {
    this.spinner.show();
   }

  @Input() data_products: Produto_ArquivoDTO[] = []

  detailsProduct(produto_id: number) {
    this.route.navigate(['/produtos', produto_id])
  }

}
