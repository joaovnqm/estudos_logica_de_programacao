//Estudando e aplicando estruturas de repetição. Começando com o "for"em um contexto de um contador.
for (let contador = 0; contador <=10; contador++) {
    console.log("Contador é igual a: " + contador);
}

//Outro exemplo do uso do "for".
for (var pontoDeVida = 1; pontoDeVida <= 59; pontoDeVida += 1) {
    console.log("Pontos de vida atual: " + pontoDeVida);
}
console.log("O personagem está com a vida cheia! Total de pontos de vida: " + pontoDeVida)

//Agora, estudando o "while".
let novoContador = 0;
while (novoContador <= 9) {
    console.log("O valor do contador é igual a: " + novoContador);
    novoContador++;
}

//Estudando o "do while" utilizando o mesmo exemplo do contador.
let contadorDoWhile = 0;
do {
    console.log("O valor do contador do while é igual a: " + contadorDoWhile);
    contadorDoWhile++;
} while (contadorDoWhile <= 10);
//No "Do While", tudo é realizado ao menos uma vez, já que a verificação da condição é feita após a execução do bloco de código.