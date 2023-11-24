import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoImgs } from '../models/entity/ProdutoImgs';

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'http://localhost:8080';


  downlodImagem(id: number){
    return this.http.get(`${this.apiUrl}/arquivos/download?id=${id}`, { responseType: 'blob'})
  }

  getItensCarrinho() {
    return this.http.get(`${this.apiUrl}/v1/carts/4`)
  }

  addProdutoCart(data: any) {
    return this.http.post(`${this.apiUrl}/v1/carsProducts/addProducts`,data)
  }

  decrementarProdutoCart(data: any) {
    return this.http.post(`${this.apiUrl}/v1/carsProducts/decrementar`, data)
  }

  deletarProdutoLista(data: any) {
    return this.http.post(`${this.apiUrl}/v1/carsProducts/deletar`, data)
  }

}
