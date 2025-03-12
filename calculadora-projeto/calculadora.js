import moment from "moment";

export const soma = (a, b) => a + b;
export const subtracao = (a, b) => a - b;
export const divisao  = (a, b) => a / b;
export const multiplicacao = (a, b) => a * b;

// Exercicio 2
function calcularIdade(anoNascimento) {
    // implemente a lógica para calcular a idade
    const anoAtual = moment().year()
    return anoAtual - anoNascimento
    }
    const anoNascimento = 1990;
    const idade = calcularIdade(anoNascimento);
    console.log(`Idade: ${idade} anos`);