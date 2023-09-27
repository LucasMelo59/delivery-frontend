import { Component, OnInit } from '@angular/core';
import { PerfilProdutoService } from './perfil-produto.service';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { PŕodutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { ArquivosService } from 'src/app/service/arquivos.service';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.scss']
})
export class PerfilProdutoComponent implements OnInit {

  teste : any[] = []

  constructor(private serviceProduto: PerfilProdutoService, private serviceArquivo: ArquivosService){}
  ngOnInit(): void {

    this.serviceProduto.getProdutoById(2).subscribe((res: ProdutoRest) => {
      res.imagens_do_produto.forEach((x:PŕodutoImgs) => {
        this.serviceArquivo.downlodImagem(x.id).subscribe((res: any) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.teste.push(reader.result as string);
          }
          reader.readAsDataURL(res)
        })
        console.log(x);
      });

    })


  }


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
