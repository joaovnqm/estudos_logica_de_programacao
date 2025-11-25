//Aprendendo e praticando funções com parâmetros.
function fazer_sorvete(sabor) {
    console.log("Fazendo sorvete de " + sabor)
}

fazer_sorvete("chocolate")
fazer_sorvete("baunilha")
fazer_sorvete("morango")

//Complexificando uma função.
function pedido_restaurante(refeiçao, cliente = "Cliente", valor) {
    console.log("O cliente: " + cliente + " pediu um(a) " + refeiçao + " de valor: R$" + valor)
}

pedido_restaurante("Sushi", "João", 45.00)