import { Component, Input, SimpleChanges } from '@angular/core';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {
@Input() modeloDeColecao:string = ""
@Input() listaProdutos: Array<Produto>  = []

ngOnChanges(changes: SimpleChanges): void {

}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.listaProdutos);

}
}
