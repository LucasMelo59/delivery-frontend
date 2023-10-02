import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {

  listFeatures = [
    {
      title: 'free shipping',
      routerLink: '/home',
      img: '/assets/features/f1.png'
    },
    {
      title: 'teste',
      routerLink: '/teste',
      img: '/assets/features/f1.png'
    },
    {
      title: 'compras',
      routerLink: '/compras',
      img: '/assets/features/f1.png'
    }

  ];

}
