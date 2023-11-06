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
    slidesPerView: 1,
    navigation:true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(!swiperEl, swiperParams);

  // and now initialize it
  swiperEl!.initialize();
  }





}
