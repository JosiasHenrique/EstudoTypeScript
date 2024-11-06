interface Personagem {
    nome: string,
    idade?: number, //idade é opcional
    classe: string
}

interface PersonagemSecundario {
    readonly id: number; //impede que seu valor seja alterado.
    nome: string;
}

const personagem1: Personagem = {
    nome: "Lara",
    classe: "Arqueira"
}


//Union type permite que uma variavel assuma mais de um tipo
let identificador: number | string;
identificador = 123; //ok
identificador = "ABC" //tbm ok


interface Localizacao {
    x: number,
    y: number
}

interface OutroPersonagem {
    nome: string,
    classe: string
}

//intersection type combina várias interfaces ou tipo em um só
type PersonagemComLocalizacao = OutroPersonagem & Localizacao;

const meuPersonagem: PersonagemComLocalizacao = {
    nome: "Arya",
    classe: "Guerreira",
    x:10,
    y:20
}
