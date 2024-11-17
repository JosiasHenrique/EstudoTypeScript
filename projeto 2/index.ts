import { Inventario } from "./services/Inventario";
import { Eletronico } from "./models/Eletronico";
import { Roupa } from "./models/Roupa";
import { Alimento } from "./models/Alimento";

const inventario = new Inventario();

try {
    const celular = new Eletronico("Celular", 1500, 10, "110v")
    const camiseta = new Roupa("Camiseta", 50, 20, "G")
    const biscoito = new Alimento("Biscoito", 5, 100, "25/12/2024")

    inventario.adicionarProduto(celular)
    inventario.adicionarProduto(camiseta)
    inventario.adicionarProduto(biscoito)

    console.log("\nListando todos os produtos:");
    inventario.listarProdutos();

    console.log("\nFiltrando eletrônicos:");
    const eletronicos = inventario.filtrarPorCategoria(Eletronico);
    eletronicos.forEach(produto => produto.exibirDetalhes());

    inventario.removeProduto(celular.getId());

    console.log("\nListando todos os produtos após remoção:");
    inventario.listarProdutos();

} catch (error) {
    console.error("Erro:", error);
}