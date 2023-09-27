import { Component, OnInit } from '@angular/core';
import { PerfilProdutoService } from '../perfil-produto/perfil-produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: PerfilProdutoService){}
  ngOnInit(): void {
    this.service.getAllProdutos().subscribe((res: any) => {
      console.log(res);
    })
  }

  

}
