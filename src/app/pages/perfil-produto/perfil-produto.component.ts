import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.scss']
})
export class PerfilProdutoComponent {

  listImagensProduto = [
    {
      pathImg: "/assets/produtcs/57968305-800-auto.jpg"
    },
    {
      pathImg: "/assets/produtcs/57968304-800-auto.jpg"
    },
    {
      pathImg: "/assets/produtcs/57968303-800-auto.jpg"
    },
    {
      pathImg: "/assets/produtcs/58091631-1600-auto (1).jpg"
    }
  ];

  tamanhoBlusas = [
    {
      tamanho: "XL"
    },
    {
      tamanho: "XXL"
    },
    {
      tamanho: "Small"
    }
  ]


}
