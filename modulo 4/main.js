var Personagem = /** @class */ (function () {
    function Personagem(nome, nivel, vida) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
    }
    Personagem.prototype.descrever = function () {
        return "".concat(this.nome, " est\u00E1 no n\u00EDvel ").concat(this.nivel, ".");
    };
    Personagem.prototype.mostrarVida = function () {
        return this.vida;
    };
    Object.defineProperty(Personagem.prototype, "Vida", {
        get: function () {
            return this.vida;
        },
        set: function (valor) {
            if (valor < 0) {
                console.log("Vida não pode ser negativa!");
            }
            else {
                this.vida = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Personagem;
}());
var personagem = new Personagem("Aragorn", 10, 100);
console.log(personagem.descrever());
console.log(personagem.mostrarVida());
