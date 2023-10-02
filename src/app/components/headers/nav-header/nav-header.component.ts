import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {

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

  ]


}
