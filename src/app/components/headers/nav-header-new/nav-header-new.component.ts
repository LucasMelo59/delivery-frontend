import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Carrinho_DTO } from 'src/app/models/dto/carrinho_DTO';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';
import { ArquivosService } from 'src/app/service/arquivos.service';

@Component({
  selector: 'app-nav-header-new',
  templateUrl: './nav-header-new.component.html',
  styleUrls: ['./nav-header-new.component.scss']
})
export class NavHeaderNewComponent implements OnInit, OnChanges {

  @Input() quantidade: number = 0;
  mobileButton: boolean = false;
  showMenu: boolean = false;
  @Input() cartList:Produto_ArquivoDTO[] = [];
  @Input() testando:any[] = []

  @Output() atualizarLista = new EventEmitter()


  emitirEvento() {
    this.atualizarLista.emit()
  }

  route = [
    {
      rotas: [
        {
          title: "Home",
          routerLink: "/home"
        },

        {
          title: "Products",
          routerLink: "/shop"
        },
      ]
    },
    {
      rotas: [
        {
          title: "About",
          routerLink: "/shop"
        },
      ]
    }
  ]

  @Input() routerBreadCrumb  = [
    {
      title: "Home",
      routerLink: "/home"
    },
  ]


  routeMobile = [
    {
      title: "Home",
      routerLink: "/home"
    },

    {
      title: "Products",
      routerLink: "/shop"
    },
    {
      title: "Disc",
      routerLink: "/home"
    },
    {
      title: "Products",
      routerLink: "/shop"
    },
    {
      title: "Disc",
      routerLink: "/home"
    }
  ]

  constructor(private service: ArquivosService) {}
  ngOnChanges(changes: SimpleChanges): void {
      this.buscarProdutosNoCarrinhos()
  }

  ngOnInit(): void {
    this.service.getItensCarrinho().subscribe((x: any) => {
      this.quantidade = x.qtdProdutos
    })
  }




  buscarProdutosNoCarrinhos() {


    this.service.getItensCarrinho().subscribe((x: any) => {
      let cartsList: Produto_ArquivoDTO[] = []
      this.quantidade = 0
      x.carrinho_produto.forEach((y: any) => {
        let imagem: any[] = []
        y.produto.produto_imgs.forEach((xy: any) => {
          if(xy) {
            this.service.downlodImagem(xy.id).subscribe(imagens => {
              const reader = new FileReader();
              reader.onload = () => {
                imagem.push(reader.result as string)
              }
              reader.readAsDataURL(imagens)
            })
          }
        })

        cartsList.push({
          imagens: imagem,
          produto: y.produto,
          quantidade: y.quantidade,
          carrinho_id: x.id,
          carrinho_produto_id: 0,
          carrinho_total: x.carTotal
        })

        this.quantidade += y.quantidade
        this.cartList = cartsList
      })

    })
  }




  toggleMenuMobile() {
    this.mobileButton = !this.mobileButton;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }


  aumentarQuantidade(data: any ,index: any) {
    const dados:Carrinho_DTO = {
      produto_id: data.produto.id,
      quantidade: 1,
      user_id: 1,
      carrinho_de_compras_id: data.carrinho_id,
      carrinho_produto: 2
    }

    this.service.addProdutoCart(dados).subscribe(x => {
      this.cartList[index].quantidade += 1;
      this.quantidade += 1
      console.log(this.cartList[index].quantidade);
    })



  }

  diminuirQuantidade(data:any, index: number) {

    if(this.cartList[index].quantidade > 1) {
      const dados:Carrinho_DTO = {
        produto_id: data.produto.id,
        quantidade: 1,
        user_id: 1,
        carrinho_de_compras_id: data.carrinho_id,
        carrinho_produto: 2
      }

      this.service.decrementarProdutoCart(dados).subscribe(x => {
        this.cartList[index].quantidade -= 1;
      })
    }
  }

  deletarProduto(data: any, index: number) {

    const dados:Carrinho_DTO = {
      produto_id: data.produto.id,
      quantidade: 1,
      user_id: 1,
      carrinho_de_compras_id: data.carrinho_id,
      carrinho_produto: 2
    }

    if(data) {
      this.service.deletarProdutoLista(dados).subscribe(y => {
        this.cartList.splice(index, 1)
      })
    }
  }



}
