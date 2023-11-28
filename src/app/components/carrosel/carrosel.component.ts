import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';



@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss']
})



export class CarroselComponent implements OnInit  {

  @Input() produtosList: Produto_ArquivoDTO[] = [];
  @Input() loading: boolean = false;
  @Output() carregarDadosProduto = new EventEmitter()


  constructor(private router: Router) {}

  ngOnInit(): void {



    const swiper = new Swiper('.carouselbox', {
      spaceBetween: 30,
      slidesPerView: 'auto',
      centeredSlides: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides: false
          }

        },

        });

  }


  carregarDadosProdutos(dado: any) {
    this.carregarDadosProduto.emit(dado)
  }

}



