//Praticando operadores de comparação
let numero = "1"
console.log(numero == 1)
console.log(numero === 1)
console.log(numero !== 1)

// = é atribuição
// == é comparação do valor
// === é comparação estrita do valor e do tipo de conteúdo.
// !== é diferente estrito do valor e do tipo de conteúdo.

//Guardando o resultado de uma comparação em uma variável
let marca = "Apple"
let resultadoDaComparacao = marca === "Apple"
console.log("A marca do meu telefone é Apple? " + resultadoDaComparacao)

//Outro exemplo de comparação. Em um contexto de uma festa por exemplo.
let CPFPermitido = "111.111.111-11"
let CPFDoUsuario = "111.111.111-12"
let acessoBloqueado = CPFDoUsuario !== CPFPermitido
console.log("O acesso do usuário está bloqueado? " + acessoBloqueado)
//Aqui podemos ver que, como o CPF do usuário é diferente do permitido, o seu acesso foi bloqueado.

//Praticando operadores de maior e menor que.
let idadeMinima = 18
let idadeUsuario = 17
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log("O usuário possui idade permitida? " + idadePermitidaValida)

let idadeSegundoUsuario = 18
let idadePermitidaValida2 = idadeSegundoUsuario >= idadeMinima
console.log("O segundo usuário possui idade permitida? " + idadePermitidaValida2)

let idadeTerceiroUsuario = 20
let idadePermitidaValida3 = idadeTerceiroUsuario >= idadeMinima
console.log("O terceiro usuário possui idade permitida? " + idadePermitidaValida3)

//Em um contexto de prática de esportes radicais, maiores de 65 anos não podem participar.
let idadeMaxima = 65
let idadeQuartoUsuario = 70
let idadeDentroDoLimite = idadeQuartoUsuario <= idadeMaxima
console.log("O quarto usuário está dentro do limite de idade para participar? " + idadeDentroDoLimite)

let idadeQuintoUsuario = 60
let idadeDentroDoLimite2 = idadeQuintoUsuario <= idadeMaxima
console.log("O quinto usuário está dentro do limite de idade para participar? " + idadeDentroDoLimite2)