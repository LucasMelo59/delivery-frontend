import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ArquivosService } from 'src/app/service/arquivos.service';
import { Produto_ArquivoDTO } from '../../../models/dto/produto_arquivoDTO';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { PerfilProdutoService } from 'src/app/pages/perfil-produto/perfil-produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sections-views-cards-produtos',
  templateUrl: './sections-views-cards-produtos.component.html',
  styleUrls: ['./sections-views-cards-produtos.component.scss']
})
export class SectionsViewsCardsProdutosComponent {

  constructor(private route: Router){}

  @Input() data_products: Produto_ArquivoDTO[] = []
  @Output() submit_data = new EventEmitter();
  data_imagens = [];

  submitFilter(data: any) {
    this.submit_data.emit(data)
  }

  detailsProduct(produto_id: number) {
    this.route.navigate(['/produtos', produto_id])
  }
}



