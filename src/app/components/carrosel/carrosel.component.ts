import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss']
})
export class CarroselComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  swiperConfig = {
    slidesPerView: 3, // Número de slides visíveis ao mesmo tempo
    spaceBetween: 30, // Espaço entre os slides
    navigation: true, // Setas de navegação
  };



}
