var Classe;
(function (Classe) {
    Classe[Classe["Guerreiro"] = 0] = "Guerreiro";
    Classe[Classe["Mago"] = 1] = "Mago";
    Classe[Classe["Arqueiro"] = 2] = "Arqueiro";
})(Classe || (Classe = {}));
var atributos = {
    forca: 10,
    agilidade: 8,
    inteligencia: 6
};
var nome = "Aragorn";
var idade = 35;
var classe = Classe.Guerreiro;
var inventario = ["Espada", "Escudo", "Poção de Vida"];
function descricaoPersonagem() {
    return "\n    Nome: ".concat(nome, "\n    Idade: ").concat(idade, "\n    Classe: ").concat(Classe[classe], "\n    Atributos:\n        - For\u00E7a: ").concat(atributos.forca, "\n        - Agilidade: ").concat(atributos.agilidade, "\n        - Intelig\u00EAncia: ").concat(atributos.inteligencia, "\n    Invent\u00E1rio: ").concat(inventario.join(","), "\n    ");
}
console.log(descricaoPersonagem());
