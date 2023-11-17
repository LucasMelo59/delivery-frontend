import { Component, Input, OnInit } from '@angular/core';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';

@Component({
  selector: 'app-nav-header-new',
  templateUrl: './nav-header-new.component.html',
  styleUrls: ['./nav-header-new.component.scss']
})
export class NavHeaderNewComponent implements OnInit {


  ngOnInit(): void {
    console.log(this.testando);
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

}
