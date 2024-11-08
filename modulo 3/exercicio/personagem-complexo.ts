
interface Item {
    nome: string,
    durabilidade: number
}

interface PersonagemComplexo {
    nome: string,
    classe: string,
    nivel: number,
    habilidades: string[],
    vidaAtual?: number,
    vidaMaxima: number,
    equipamento: Item[]
}

function descreverPersonagem(personagem: PersonagemComplexo): string {
    const descricaoEquipamento = personagem.equipamento
    .map(item => `${item.nome} (Durabilidade: ${item.durabilidade})`)
    .join(", ")

    return `
        Nome: ${personagem.nome}
        Classe: ${personagem.classe}
        Nível: ${personagem.nivel}
        Vida: ${personagem.vidaAtual ?? personagem.vidaMaxima} / ${personagem.vidaMaxima}
        Habilidades: ${personagem.habilidades.join(", ")}
        Equipamento: ${descricaoEquipamento}
    `
}

const personagemExemplo: PersonagemComplexo = {
    nome: "Elena",
    classe: "Maga",
    nivel: 20,
    habilidades: ["Cura", "Teleporte", "Bola de Fogo"],
    vidaMaxima: 100,
    equipamento: [
        {nome: "Cajado Arcano", durabilidade: 80},
        {nome: "Anel de Proteção", durabilidade: 50},
    ],
}

console.log(descreverPersonagem(personagemExemplo))