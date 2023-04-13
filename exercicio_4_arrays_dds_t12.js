// Faça um programa que conta quantas letras "a" existem numa determinada palavra. Imprima o resultado na tela

const palavra = "Konohagakure"; // 2 letras a

let quantidade = 0;

for (let letrasA of palavra) {
    if (letrasA === "a") {
        quantidade++;
    }
}
console.log(quantidade);
