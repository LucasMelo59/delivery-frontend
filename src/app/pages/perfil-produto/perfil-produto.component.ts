import { Component, OnInit } from '@angular/core';
import { PerfilProdutoService } from './perfil-produto.service';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { ArquivosService } from 'src/app/service/arquivos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.scss']
})
export class PerfilProdutoComponent implements OnInit {

  listImagensProduto : any[] = []
  productId: any = "";
  mainImg: any;
  activeTamanho: number = 0;
  activeCor: number = 0
  quantidade: number = 1; // Valor inicial da quantidade

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

  cores = [
    {
      style: "hsl(353,100%,67%)",
      cor: "vermelho"
    },
    {
      style: "hsl(37,100%,65%)",
      cor: "laranja"
    },
    {
      style: "hsl(49,100%,60%)",
      cor: "amarelo"
    },
    {
      style: "hsl(304,100%,78%)",
      cor: "rosa"
    }
  ]


  constructor(private serviceProduto: PerfilProdutoService, private serviceArquivo: ArquivosService,  private route: ActivatedRoute){}
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.serviceProduto.getProdutoById(this.productId).subscribe((res: ProdutoRest) => {
      res.imagens_do_produto.forEach((x:ProdutoImgs) => {
        this.serviceArquivo.downlodImagem(x.id).subscribe((res: any) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.listImagensProduto.push(reader.result as string);
            this.mainImg = this.listImagensProduto[0];
          }
          reader.readAsDataURL(res)

        })
      });

    })


  }

  detalhesSelecionados = {
    tamanho: this.tamanhoBlusas[0],
    cor: this.cores[0],
  }

  tradeImg(index: number) {

    this.mainImg = this.listImagensProduto[index]
  }



  aumentarQuantidade() {
    if (this.quantidade < 1) {
      this.quantidade = 1;
    } else {
      this.quantidade++;
    }
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }



  clickOnSize(index: number){
    this.activeTamanho = index
    this.detalhesSelecionados.tamanho = this.tamanhoBlusas[index]
  }

  clickOnColor(index: number) {
    this.activeCor = index
    this.detalhesSelecionados.cor = this.cores[index]
  }


  adicionarAoCarrinho() {
    const detalhes_produto = {
      quantidade: this.quantidade,
      produto_id: this.productId,
      tamanho: this.detalhesSelecionados.tamanho.tamanho,
      cor: this.detalhesSelecionados.cor.cor
    }
    console.log(detalhes_produto);

  }


}
