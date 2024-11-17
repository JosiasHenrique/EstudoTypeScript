import { ProdutoBase } from "./ProdutoBase"

export class Eletronico extends ProdutoBase {
    voltagem: string;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number, voltagem: string) {
        super(0, nome, preco, quantidadeEmEstoque);
        this.voltagem = voltagem;
    }

    exibirDetalhes(): void {
        console.log(`Eletrônico: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, 
        Estoque: ${this.quantidadeEmEstoque}, Voltagem: ${this.voltagem}`)

    }
}