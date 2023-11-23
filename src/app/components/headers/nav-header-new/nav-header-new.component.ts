import { Component, Input, OnInit } from '@angular/core';
import { Carrinho_DTO } from 'src/app/models/dto/carrinho_DTO';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';
import { ArquivosService } from 'src/app/service/arquivos.service';

@Component({
  selector: 'app-nav-header-new',
  templateUrl: './nav-header-new.component.html',
  styleUrls: ['./nav-header-new.component.scss']
})
export class NavHeaderNewComponent implements OnInit {

  constructor(private service: ArquivosService) {}

  ngOnInit(): void {
    this.service.getItensCarrinho().subscribe((x: any) => {
      console.log(x);

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
        this.cartList.push({
          imagens: imagem,
          produto: y.produto,
          quantidade: y.quantidade,
          carrinho_id: x.id,
          carrinho_produto_id: 0
        })
      })

    })
    console.log(this.cartList);
  }



  quantidade: number = 1;
  mobileButton: boolean = false;
  showMenu: boolean = false;
  cartList:Produto_ArquivoDTO[] = [];
  @Input() testando:any[] = []
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
        {
          title: "Disc",
          routerLink: "/home"
        }
      ]
    },
    {
      rotas: [
        {
          title: "Specials",
          routerLink: "/home"
        },

        {
          title: "Sale",
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
      console.log(x);
      this.cartList[index].quantidade += 1;
      console.log(this.cartList[index].quantidade);
    })



  }

  diminuirQuantidade(data:any, index: number) {

    const dados:Carrinho_DTO = {
      produto_id: data.produto.id,
      quantidade: 1,
      user_id: 1,
      carrinho_de_compras_id: data.carrinho_id,
      carrinho_produto: 2
    }

    this.service.decrementarProdutoCart(dados).subscribe(x => {
      this.cartList[index].quantidade -= 1;
      console.log(this.cartList[index].quantidade);
    })
  }

}
