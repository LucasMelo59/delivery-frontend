import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-header-new',
  templateUrl: './nav-header-new.component.html',
  styleUrls: ['./nav-header-new.component.scss']
})
export class NavHeaderNewComponent {
  mobileButton: boolean = false;
  showMenu: boolean = false;
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

  toggleMenuMobile() {
    this.mobileButton = !this.mobileButton;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }


}
