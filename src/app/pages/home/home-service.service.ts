import { CarrinhoDeCompras } from './../../models/entity/CarrinhoDeCompras';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho_ProdutoDto } from 'src/app/models/dto/carrinho_produtoDTO';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

constructor(private http: HttpClient) { }
apiUrl: string = 'http://localhost:8080'


getCarrinhoComProdutos(dataId: number): Observable<CarrinhoDeCompras> {
  return this.http.get<CarrinhoDeCompras>(`${this.apiUrl}/v1/carts/${dataId}`)
}



addProdutosCarrinhoDeProdutos(model: Carrinho_ProdutoDto) {
  return this.http.post(`${this.apiUrl}/v1/carsProducts/addProducts`, model)
}

}
