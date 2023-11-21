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
    return this.http.get(`${this.apiUrl}/v1/carts/1`)
  }


}
