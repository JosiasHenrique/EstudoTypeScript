function descreverPersonagem(personagem) {
    var _a;
    var descricaoEquipamento = personagem.equipamento
        .map(function (item) { return "".concat(item.nome, " (Durabilidade: ").concat(item.durabilidade, ")"); })
        .join(", ");
    return "\n        Nome: ".concat(personagem.nome, "\n        Classe: ").concat(personagem.classe, "\n        N\u00EDvel: ").concat(personagem.nivel, "\n        Vida: ").concat((_a = personagem.vidaAtual) !== null && _a !== void 0 ? _a : personagem.vidaMaxima, " / ").concat(personagem.vidaMaxima, "\n        Habilidades: ").concat(personagem.habilidades.join(", "), "\n        Equipamento: ").concat(descricaoEquipamento, "\n    ");
}
var personagemExemplo = {
    nome: "Elena",
    classe: "Maga",
    nivel: 20,
    habilidades: ["Cura", "Teleporte", "Bola de Fogo"],
    vidaMaxima: 100,
    equipamento: [
        { nome: "Cajado Arcano", durabilidade: 80 },
        { nome: "Anel de Proteção", durabilidade: 50 },
    ],
};
console.log(descreverPersonagem(personagemExemplo));
