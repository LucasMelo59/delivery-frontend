import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss']
})



export class CarroselComponent implements OnInit  {
  ngOnInit(): void {
    const swiperEl = document.querySelector('swiper-container');

  // swiper parameters
  const swiperParams = {
    breakpoints:{
      481:{
        slidesPerView: 2,
        slidesPerGroup: 1,
        centeredSlides: false
      },
      640:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        centeredSlides: false
      },
        992:{
          slidesPerView: 4,
          slidesPerGroup: 1,
          centeredSlides: false
        }
    }
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(!swiperEl, swiperParams);

  // and now initialize it
  swiperEl?.initialize();
  }





}
