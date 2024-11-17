import { ProdutoBase } from "../models/ProdutoBase";

export class Inventario {
    private produtos: ProdutoBase[] = [];
    private proximoId: number = 1;

    adicionarProduto(produto: ProdutoBase): void {
        produto["id"] = this.proximoId++;
        this.produtos.push(produto);
        console.log(`Produto "${produto.nome}" adicionado com sucesso!`)
    }

    listarProdutos(): void {
        if(this.produtos.length === 0) {
            console.log("Nenhum produto no inventário");
            return;
        }
        console.log("Produtos no inventário: ")
        this.produtos.forEach(produto => produto.exibirDetalhes())
    }

    removeProduto(id: number): void {
        const indice = this.produtos.findIndex(produto => produto.getId() === id)
        if (indice === -1) throw new Error("Produto não encontrado;")
            const [removido] = this.produtos.splice(indice, 1);
        console.log(`Produto "${removido.nome}" removido com sucesso!`)
    }

    filtrarPorCategoria<T extends ProdutoBase>(categoria: new (...args: any[]) => T): T[] {
        return this.produtos.filter(produto => produto instanceof categoria) as T[];
    }
}