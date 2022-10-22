import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../shared/model/produto';
import { ProdutoService } from '../../../shared/servico/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  produtos: Produto[];
  constructor(private ProdutoService: ProdutoService) {
    this.produtos = new Array<Produto>();
  }

  ngOnInit(): void {
    this.ProdutoService.listar().subscribe(
      (produtoRetornados) => (this.produtos = produtoRetornados)
    );
  }

  removerProduto(produtoRemover: Produto): void {
    console.log(produtoRemover)
    this.ProdutoService.apagar(produtoRemover.id).subscribe(
      removido => {
        console.log(removido);
        const indxProduto = this.produtos.findIndex(u => u.id === produtoRemover.id);

        if (indxProduto > -1) {
          this.produtos.splice(indxProduto, 1);
        }

      }
    );
  }
}