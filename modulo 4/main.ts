
class Personagem {
    private nome: string;
    private nivel: number;
    private vida:number;

    constructor(nome: string, nivel: number, vida: number) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
    }

    descrever(): string {
        return `${this.nome} está no nível ${this.nivel}.`;
    }

    mostrarVida(): number {
        return this.vida;
    }

    get Vida(): number {
        return this.vida;
    }

    set Vida(valor: number) {
        if(valor < 0) {
            console.log("Vida não pode ser negativa!")
        } else {
            this.vida = valor;
        }
    }

}

const personagem = new Personagem("Aragorn",10, 100);
console.log(personagem.descrever());
console.log(personagem.mostrarVida());