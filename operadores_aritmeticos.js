//Exibindo a minha idade na tela
let idade = 21
console.log("A minha idade é: " + idade)

//Exibindo o meu ano de nascimento na tela - Operador de subtração (-)
let anoAtual = 2025
let anoDeNascimento = anoAtual - idade
console.log("O meu ano de nascimento é: " + anoDeNascimento)

//Exibindo a minha idade na tela daqui a 12 anos - Operador de adição (+)
let idadeEm12Anos = idade + 12
console.log("A minha idade em 12 anos será: " + idadeEm12Anos)

//Cálculo de valor do imposto de consumo na compra de um iPhone 17 no estado do Texas - Operador de multiplicação (*)
let valorIphone17 = 799.00
let taxaImpostoDoTexas = 0.0825
console.log("O valor do imposto na comtrpa de um iPhone 17 no Texas é de: $" +
    (valorIphone17 * taxaImpostoDoTexas)
)

//Cálculo do valor do litro de uma Coca-Cola por garrafa de 2,5 litros - Operador de divisão (/)
let valorGarrafaCoca = 11.50
let volumeGarrafaCoca = 2.5
console.log("O valor do litro da Coca-Cola em uma garrafa de 2,5 litros é de: R$" +
    (valorGarrafaCoca / volumeGarrafaCoca)
)

//Cálculo da alíquota de imposto de renda - Operador de divisão (/)
let  salarioMensal = 3000.00
let impostoPagoNaFonte = 500.00
console.log("A alíquota do imposto de renda pago na fonte é de: " + 
    ((impostoPagoNaFonte / salarioMensal) * 100) + "%"
)

//Cálculo valor do resto de uma divisão - Operador de módulo (%)
let totalDeLaranjas = 25
let totalDePessoas = 4
console.log("O total de laranjas que sobraram após a divisão entre as pessoas é de: " +
    (totalDeLaranjas % totalDePessoas)
)

//Exibindo a minha idade após meu aniversário - Operador de incremento (++)
idadeAposAniversário = idade++
console.log("A minha idade após o meu aniversário será: " + idadeAposAniversário)

//Exibindo a minha idade antes do meu último aniversário - Operador de decremento (--)
idadeAntesDoMeuUltimoAniversario = idade --
console.log("A minha idade antes do meu último aniversário era: " + idadeAntesDoMeuUltimoAniversario)

//Calculando o número de maças após a minha última ida ao mercado - Usando operadores de atribuição (+=)
let totalDeMacas = 10
totalDeMacas += 7
console.log("O total de maçãs que eu tenho agora é: " + totalDeMacas)

//Calculando o valor do chocolate após a promoção da semana - Usando operadores de atribuição (-=)
let valorChocolate = 7.00
valorChocolate -= 2.00
console.log("O valor do chocolate após a promoção é de: R$" + valorChocolate) 
