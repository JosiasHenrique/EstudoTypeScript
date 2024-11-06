
let nome: string = "Maria";
let idade: number = 25;
let ativo: boolean = true;

let listaDeNumeros: number[] = [1,2,3,4,5];
let listaDePalavras: string[] = ["TypeScript", "JavaScript"];

let pessoa: [string, number] = ["João", 30];

enum Status {
    Ativo,
    Inativo,
    Pendente
}

let statusAtual: Status = Status.Ativo;

function somar(a: number, b: number): number {
    return a+b;
}

function exibirMensagem(mensagem: string): void {
    console.log(mensagem);
}