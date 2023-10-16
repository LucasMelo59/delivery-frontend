import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';

@Injectable({
  providedIn: 'root'
})
export class PerfilProdutoService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'http://localhost:8080'

  getProdutoById(id: number): Observable<ProdutoRest> {
    return this.http.get<ProdutoRest>(`${this.apiUrl}/v1/products/${id}`);
  }

  getAllProdutos():  Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/v1/products/all`);
  }

  getProdutosWithFilter(model: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/v1/products/filters`, model)
  }

}
