import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  URL_Produtos = 'http://localhost:3000/produtos';

  constructor(private clienteHttp: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.clienteHttp.get<Produto[]>(this.URL_Produtos);
  }

  inserir(novoProduto: Produto): Observable<Produto> {
    return this.clienteHttp.post<Produto>(this.URL_Produtos, novoProduto);
  }

  apagar(id: number): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_Produtos}/${id}`);
  }
}
