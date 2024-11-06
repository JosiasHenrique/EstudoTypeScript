enum Classe {
    Guerreiro,
    Mago,
    Arqueiro
}

let atributos = {
    forca: 10,
    agilidade: 8,
    inteligencia: 6
}

let nome: string = "Aragorn";
let idade: number = 35;
let classe: Classe = Classe.Guerreiro;

let inventario: string[] = ["Espada", "Escudo", "Poção de Vida"];

function descricaoPersonagem(): string {
    return `
    Nome: ${nome}
    Idade: ${idade}
    Classe: ${Classe[classe]}
    Atributos:
        - Força: ${atributos.forca}
        - Agilidade: ${atributos.agilidade}
        - Inteligência: ${atributos.inteligencia}
    Inventário: ${inventario.join(",")}
    `
}

console.log(descricaoPersonagem());