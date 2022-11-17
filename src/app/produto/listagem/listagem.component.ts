import {Component, OnInit} from '@angular/core';
import {Produto} from '../../../shared/model/produto';
import {ProdutoService} from '../../../shared/servico/produto.service';
import {ProdutoFirebaseService} from "../../../shared/servico/produto-firebase.service";

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
    produtos: Produto[];

    constructor(private produtoService: ProdutoService, private produtoFireBaseService: ProdutoFirebaseService) {
        this.produtos = new Array<Produto>();
    }

    ngOnInit(): void {
        this.produtoFireBaseService.listar().subscribe(
            (produtoRetornados) => (this.produtos = produtoRetornados)
        );
    }

    removerProduto(produtoRemover: Produto): void {
        this.produtoService.apagar(produtoRemover.id || 0).subscribe(
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