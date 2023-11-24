import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ArquivosService } from 'src/app/service/arquivos.service';
import { Produto_ArquivoDTO } from '../../../models/dto/produto_arquivoDTO';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { PerfilProdutoService } from 'src/app/pages/perfil-produto/perfil-produto.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sections-views-cards-produtos',
  templateUrl: './sections-views-cards-produtos.component.html',
  styleUrls: ['./sections-views-cards-produtos.component.scss']
})
export class SectionsViewsCardsProdutosComponent implements OnInit{

  constructor(private route: Router){}
  ngOnInit(): void {

    
  }
  @Input() loading: boolean = false;
  @Input() data_products: Produto_ArquivoDTO[] = []
  @Output() submit_data = new EventEmitter();
  data_imagens = [];
  activeTab = 1;
  titleTab = "Swipe"
  show = false;

  submitFilter(data: any, tabActive: number) {
    this.submit_data.emit(data)
    this.activeTab = tabActive;
    this.titleTab = data;
    this.showOptions();
  }


  showOptions() {
    this.show = !this.show;
  }
}



