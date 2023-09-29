import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {

  @Input() componentBanner: any =
    {
      titulo: "",
      subtitulo: "",
      descricao: "",
      textoBotao: "",
      imgB64: "",
      rotaBotao: ""

    }

}
