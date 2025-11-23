//Praticando operadores lógicos em um contexto de uma viagem aos Estados Unidos com um amigo.
let idadeViajante = 20
let possuiVisto = false
let podeViajar = idadeViajante >= 18 && possuiVisto == true
console.log("Pode viajar? " + podeViajar)

//Adicionando mais informações ao cenário.
//Vamos considerar que o amigo é cidadão europeu e, portanto, não preckisa de visto para entrar nos EUA.
let cidadaniaEuropeia = true
podeViajar = idadeViajante >= 18 && (possuiVisto == true || cidadaniaEuropeia == true)
console.log("Pode viajar? " + podeViajar)

//Vamos adicionar mais um informação de que o viajante possui uma obrigação militar no Brasil e não pdoe sair do país no momento.
let temObrigacaoMilitar = true
podeViajar = idadeViajante >= 18 && (possuiVisto == true || cidadaniaEuropeia == true) && !temObrigacaoMilitar == false
console.log("Pode viajar? " + podeViajar)