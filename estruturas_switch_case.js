//Aprendendo e aplicando a estrutura switch case em um contexto de escolha de refeições em um restaurante.
let refeição = "Arroz Chinês"
switch (refeição) {
    case "Pizza":
        console.log("Você escolheu Pizza.")
        break
    case "Hambúrguer":
        console.log("Você escolheu Hambúrguer.")
        break
    case "Sushi":
        console.log("Você escolheu Sushi.")
        break
    case "Salada":
        console.log("Você é bem fitness e escolheu Salada. Parabéns!")
        break
    case "Bacalhau":
    case "Prato do Dia":
        console.log("Você escolheu Bacalhau")
        break
    default:
        console.log("Você escolheu Frango Assado")
        break
}