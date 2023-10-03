import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit{

  isMobile: boolean = false;
  showMenu: boolean = false;
  route = [
    {
      title: "Home",
      routerLink: "/home"
    },

    {
      title: "Shop",
      routerLink: "/home"
    },

    {
      title: "Blog",
      routerLink: "/home"
    },
    {
      title: "About",
      routerLink: "/home"
    }

  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkIsMobile();
  }


  ngOnInit(): void {
    this.checkIsMobile();
  }

  checkIsMobile(): void {
    this.isMobile = window.innerWidth <= 768; // Defina o tamanho da tela conforme necessário
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
