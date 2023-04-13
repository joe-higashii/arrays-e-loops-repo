// Faça um programa que verifica se um determinado texto contém a letra H. Imprima o resultado

const palavra = "Alemanha";

let encontrado = false;

for (let letra of palavra) {
    if (letra === "h") {
        console.log("Tem a letra h");
        encontrado = true;
        break;
    }

}
// !encontrado, or
if (encontrado === false) {
    console.log("Não tem a letra h");
}
