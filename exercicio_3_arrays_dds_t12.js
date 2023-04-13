// Faça um programa que calcula e imprime na tela a soma dos itens de um array

const numeros = [0, 4, 8, 16, 23, 42]; // tamanho 6

let soma = 0;

for (let indice = 0; indice < numeros.length; indice++) {
    // será executado para indice de 0 até 6 | 7 não será mais executado
    soma = soma + numeros[indice];
    // soma += numeros[indice]

}
console.log(soma);
