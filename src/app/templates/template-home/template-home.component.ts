import { Component } from '@angular/core';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-template-home',
  templateUrl: './template-home.component.html',
  styleUrls: ['./template-home.component.scss']
})
export class TemplateHomeComponent {

 listaProdutos: Array<Produto> = [
  {
    nomeProduto: "Blusa branca",
    caminhoImagem: "/assets/produtcs/58091631-1600-auto (1).jpg",
    descricaoProduto: "Blusa Masculina",
    preco: 80,
    modeloDeColecao: ""
  }
 ]

}
