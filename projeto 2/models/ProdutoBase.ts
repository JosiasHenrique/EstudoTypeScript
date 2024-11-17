export abstract class ProdutoBase {
    readonly id: number;
    nome: string;
    preco: number;
    quantidadeEmEstoque: number;

    constructor(id: number, nome: string, preco: number, quantidadeEmEstoque: number) {
        if(preco <= 0) throw new Error("O preço deve ser maior que zero.");
        if(quantidadeEmEstoque < 0) throw new Error("Quantidade em estoque não pode ser menor que 0.");

        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    abstract exibirDetalhes(): void;
}