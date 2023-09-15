import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {

  constructor(private route: Router) { }

@Input() modeloDeColecao:string = ""
@Input() listaProdutos: Array<Produto>  = []

  verDetalhes() {
    const productId = 123;

    this.route.navigate(['/produto', productId])

  }

}
