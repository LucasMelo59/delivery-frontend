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
      routerLink: "/home",
    },
    {
      title: "Shop",
      routerLink: "/produtos/2",
    },
    {
      title: "Login",
      routerLink: "/login",
    }
  ]


  // title: 'INÍCIO',
  //     routerLink: '/dashboard',
  //     children: [
  //       {
  //         title: 'Usuários', routerLink: '/dashboard/usuarios',
  //         actionLink: false
  //       },
  //       {
  //         title: 'Contratos Pendentes', routerLink: '/dashboard/contratos-pendentes',
  //         actionLink: false
  //       },


}
