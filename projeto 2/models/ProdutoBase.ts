export abstract class ProdutoBase {
    protected id: number;
    nome: string;
    preco: number;
    quantidadeEmEstoque: number;

    constructor(id: number, nome: string, preco: number, quantidadeEmEstoque: number) {
        if(preco <= 0) throw new Error("O preço deve ser maior que zero.");
        if(quantidadeEmEstoque < 0) throw new Error("Quantidade em estoque não pode ser menor que 0.");

        this.id = 0;
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    getId(): number {
        return this.id;
    }

    abstract exibirDetalhes(): void;
}