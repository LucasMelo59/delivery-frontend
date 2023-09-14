import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {
  @Input() titulo: string = "trade in offer"
  @Input() mensagem: string = "Save more with coupons"
  @Input() texto2: string = "Super Value"
  @Input() texto3: string = "On all"
  @Input() textButton: string = "Shop now"
}
