import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PerfilProdutoService } from './perfil-produto.service';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { ArquivosService } from 'src/app/service/arquivos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swiper from 'swiper';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';
import { catchError, pipe } from 'rxjs';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.scss']
})
export class PerfilProdutoComponent implements OnInit {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  listImagensProduto : any[] = []
  data_produto_dto_carousel: Produto_ArquivoDTO[] = []
  data_produto_dto: Produto_ArquivoDTO[] = []
  cartsList: Produto_ArquivoDTO[] = []
  quantidadeCart: number = 0;
  mainImg: any;
  activeTamanho: number = 0;
  activeCor: number = 0
  quantidade: number = 1; // Valor inicial da quantidade
  abaSelcionada: string = "Product details"
  itemFloating: number = 3;
  produto!: ProdutoRest;
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






  constructor(private serviceProduto: PerfilProdutoService, private serviceArquivo: ArquivosService,  private route: ActivatedRoute, private router: Router){}





  ngOnInit(): void {

    const nomeProduto = this.route.snapshot.paramMap.get('nome')
    this.buscarProdutoPorNome(nomeProduto)

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

    this.buscarProdutosNoCarrinhos();
    this.buscarDadosCarrosel()
  }

  detalhesSelecionados = {
    tamanho: this.tamanhoBlusas[0],
    cor: this.cores[0],
  }

  buscarProdutoPorNome(data: any) {
    const model = {
      nome: data
    }

    this.serviceProduto.getProdutosWithFilter(model)
    .pipe(
      catchError(error => {
        if(error) {
        this.router.navigate(['/home'])
        }
        throw error
      })
    )
    .subscribe((produtos: ProdutoRest[]) => {

      if(produtos.length > 0 ) {
        produtos.forEach((produto:ProdutoRest) => {
          this.mainImg = []
          this.listImagensProduto = []
          this.produto = produto

          produto.produto_imgs_id.forEach((imagens_id: any) => {
            this.serviceArquivo.downlodImagem(imagens_id).subscribe((res: any) => {

                const reader = new FileReader();
                reader.onload = () => {
                  this.listImagensProduto.push(reader.result as string);
                  this.mainImg = this.listImagensProduto[0];
                }
                reader.readAsDataURL(res)
              })
          })

        });
        this.router.navigate(['/produtos', data])
      } else {
        this.router.navigate(['/home'])
      }


    })
  }


  buscarProdutosNoCarrinhos() {
    this.cartsList = []
    this.serviceArquivo.getItensCarrinho().subscribe((x: any) => {
      console.log(x);

      x.carrinho_produto.forEach((y: any) => {
        console.log(y);

        let imagem: any[] = []
        y.produto.produto_imgs.forEach((xy: any) => {
          if(xy) {
            this.serviceArquivo.downlodImagem(xy.id).subscribe(imagens => {
              const reader = new FileReader();
              reader.onload = () => {
                imagem.push(reader.result as string)
              }
              reader.readAsDataURL(imagens)
            })
          }
        })
        this.cartsList.push({
          imagens: imagem,
          produto: y.produto,
          quantidade: y.quantidade,
          carrinho_id: x.id,
          carrinho_produto_id: 0,
          carrinho_total: x.carTotal,
          tamanho: y.tamanho
        })

        this.quantidadeCart += y.quantidade
        console.log(this.cartsList);
      })

    })
    return this.cartsList
  }


  buscarDadosCarrosel() {
    const model = {
      categoria: 'swiper'
    }
    this.serviceProduto.getProdutosWithFilter(model)
    .pipe(
      // tap(() => {
      //   this.loading = false;
      // })
    )
    .subscribe((produtos: ProdutoRest[]) => {

      produtos.forEach((produto:ProdutoRest) => {
        let imagens: any[] = []
        produto.produto_imgs_id.forEach((imagens_produto:number) => {
          this.serviceArquivo.downlodImagem(imagens_produto).subscribe(bytes => {
            const reader = new FileReader();
            reader.onload = () => {
              imagens.push(reader.result as string)
            }
            reader.readAsDataURL(bytes)
          })
        })
        this.data_produto_dto.push({
          produto: produto,
          imagens: imagens,
          quantidade: 0,
          carrinho_id: 0,
          carrinho_produto_id: 0,
          carrinho_total: 0
        });
      })
      console.log(this.data_produto_dto);

      this.data_produto_dto_carousel = this.data_produto_dto;
    })
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
      carrinho_de_compras_id: 4,
      produto_id: this.produto.id,
      tamanho: this.detalhesSelecionados.tamanho.tamanho
    }

    this.serviceArquivo.addProdutoCart(detalhes_produto).subscribe(x => {
      console.log(x);

      this.quantidadeCart += 1
    })

  }

  compreAgora() {
    const mensagem = "testando comprar byaurora , produto nome: " + this.produto.nome + "produto preco: " + this.produto.preco + "tamanho: " + this.detalhesSelecionados.tamanho.tamanho
    const url = "https://wa.me/5585998567281?text="+mensagem

    window.open(url, '_blank');
  }






}
