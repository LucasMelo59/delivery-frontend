import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PerfilProdutoService } from './perfil-produto.service';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { ArquivosService } from 'src/app/service/arquivos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.scss']
})
export class PerfilProdutoComponent implements OnInit {

  listImgsTeste = ['/assets/imgs/product_01.jpg', '/assets/imgs/product_02.jpg', '/assets/imgs/product_02b.jpg', '/assets/imgs/product_03.jpg']
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  listImagensProduto : any[] = []
  mainImg: any;
  activeTamanho: number = 0;
  activeCor: number = 0
  quantidade: number = 1; // Valor inicial da quantidade
  abaSelcionada: string = "Product details"
  itemFloating: number = 3;
  routerBreadCrumb  = [
    {
      title: "Home",
      routerLink: "/home"
    },
    {
      title: "Produtos",
      routerLink: "/home"
    },
    {
      title: "Nome Produto",
      routerLink: "/."
    },
  ]


  tamanhoBlusas = [
    {
      tamanho: "XL"
    },
    {
      tamanho: "XXL"
    },
    {
      tamanho: "P"
    }
  ]

  cores = [
    {
      cor: "tosca"
    },
    {
      cor: "brown"
    },
    {
      cor: "ocean"
    }
  ]






  constructor(private serviceProduto: PerfilProdutoService, private serviceArquivo: ArquivosService,  private route: ActivatedRoute){}


  ngOnInit(): void {


    const model = {
      nome: this.route.snapshot.paramMap.get('nome')
    }

    this.serviceProduto.getProdutosWithFilter(model).subscribe((Produtos: ProdutoRest[]) => {

      Produtos.forEach((produto:ProdutoRest) => {
        console.log(produto);

        produto.produto_imgs_id.forEach((imagens_id: any) => {
          this.serviceArquivo.downlodImagem(imagens_id).subscribe((res: any) => {
            console.log(res);

              const reader = new FileReader();
              reader.onload = () => {
                this.listImagensProduto.push(reader.result as string);
                this.mainImg = this.listImagensProduto[0];
              }
              reader.readAsDataURL(res)
            })
        })
      });

    })

    console.log(this.listImagensProduto);

    const thumbImage = new Swiper('.thumbnail-image' , {
      direction: 'vertical',
      spaceBetween: 15,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,

    })
     const mainImage = new Swiper('.main-image' , {
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      thumbs: {
        swiper: thumbImage
      }

    })

  }

  detalhesSelecionados = {
    tamanho: this.tamanhoBlusas[0],
    cor: this.cores[0],
  }

  trocarAba(data: string) {
    this.abaSelcionada = data;
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
      tamanho: this.detalhesSelecionados.tamanho.tamanho,
      cor: this.detalhesSelecionados.cor.cor
    }
    console.log(detalhes_produto);

  }


}
