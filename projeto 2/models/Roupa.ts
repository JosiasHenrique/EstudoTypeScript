import { ProdutoBase } from "./ProdutoBase";

export class Roupa extends ProdutoBase {
    tamanho: string;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number, tamanho: string) {
        super(0, nome, preco, quantidadeEmEstoque);
        this.tamanho = tamanho;
    }

    exibirDetalhes(): void {
        `Roupa: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Estoque: ${this.quantidadeEmEstoque},
        Tamanho: ${this.tamanho}`
    }
}