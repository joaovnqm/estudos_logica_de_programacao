//Praticando o uso de JSON dentro de uma aplicação.
//Criando um objeto JSON com informações da compra de um conjunto de produtos em um supermercado.
let compraSupermercado = {
    nameCliente: "João Victor",
    idade: 21,
    formaPagamento: "Cartão de Crédito",
    impostoConsumo: 0.22, //Imposto sobre consumo de 22%.
    produtos: {
        0: ["Arroz", 5.99, 2], //Nome do produto, preço unitário, quantidade.
        1: ["Feijão", 7.49, 1],
        2: ["Macarrão", 4.29, 3],
        3: ["Óleo de Soja", 6.19, 1]
    }
}

//Função para calcular o valor total da compra.
function calcularValorTotal(compra) {
    let total = 0
    for (let i in compra.produtos) {
        total += compra.produtos[i][1] * compra.produtos[i][2]
    }
    return total
}

//Função para emitir a nota fiscal da compra.
function emitirNotaFiscal(compra) {
    console.log("----- NOTA FISCAL -----")
    console.log("Cliente: " + compra.nameCliente + " | Idade: " + compra.idade)
    console.log("Forma de Pagamento: " + compra.formaPagamento)
    console.log("-----------------------")
    for (let i in compra.produtos) {
        let [produto, precoUnitario, quantidade] = compra.produtos[i]
        console.log("* Produto: " + produto + " | Preço Unitário: R$ " + precoUnitario.toFixed(2) + " | Quantidade: " + quantidade + " | Total: R$ " + (precoUnitario * quantidade).toFixed(2))
    }
    console.log("-----------------------")
    console.log("Valor total da compra com impostos: R$ " + ((calcularValorTotal(compra).toFixed(2)) * (1 + compra.impostoConsumo)).toFixed(2))
}

//Emitindo a nota fiscal da compra realizada.
emitirNotaFiscal(compraSupermercado)