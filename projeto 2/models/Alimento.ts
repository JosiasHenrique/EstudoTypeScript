import { ProdutoBase } from "./ProdutoBase";

export class Alimento extends ProdutoBase {
    validade: string;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number, validade: string) {
        super(0, nome, preco, quantidadeEmEstoque)
        this.validade = validade;
    }

    exibirDetalhes(): void {
        `Alimento: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Estoque: ${this.quantidadeEmEstoque},
        Validade: ${this.validade}`
    }
}