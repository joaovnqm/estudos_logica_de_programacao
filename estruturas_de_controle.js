//Aprendendo sobre estrutruras de controle em um contexto de uma lâmpada acompanhada de um interruptor.
let lampadaAcesa = false
let interruptorPressionado = true
if (interruptorPressionado == true) {
    lampadaAcesa = true
    console.log("A lâmpada está acesa")
} else {
    lampadaAcesa = false
    console.log("A lâmpada está apagada")
}

//Em um contexto de que você deseja fazer um bolo, eu vou ao mercado comprar os ingredientes necessários. Mas, só vou comprar farinha e leite se tiver ovos disponíveis.
let ovosDisponiveis = true
if (ovosDisponiveis == true) {
    console.log("Comprando ovos, farinha e leite")
} else {
    console.log("Não é possível fazer o bolo sem ovos")
}

//Agora, vamos considerar que se não tiver os ovos, eu vou comprar leite e leite condensado para fazer um pudim. Mas caso não tenha leite condensado, vou comprar apenas o leite.
ovosDisponiveis = false
let leiteCondensadoDisponivel = false
if (ovosDisponiveis == true) {
    console.log("Comprando ovos, farinha e leite para fazer o bolo")
} else if (leiteCondensadoDisponivel == true) {
    console.log("Não tem ovos disponíveis, mas vou comprar leite e leite condensado para fazer um pudim")
} else {
    console.log("Não tem ovos nem leite condensado disponíveis, vou comprar apenas leite")
}