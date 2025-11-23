//Criando um array/vetores com nomes de pokémons.
let pokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]
console.log(pokemon[0]) //Acessando o primeiro elemento da array
console.log(pokemon[1]) //Acessando o segundo elemento da array
console.log(pokemon[2]) //Acessando o terceiro elemento da array
console.log(pokemon[3]) //Acessando o quarto elemento da array

//Aplicando algumas funções em arrays/vetores.
console.log("Quantidade de pokémons: " + pokemon.length) //Verificando a quantidade de elementos na array

pokemon.pop() //Removendo o último elemento da array.
console.log(pokemon)

pokemon.shift() //Removendo o primeiro elemento da array.
console.log(pokemon)

//Criando um vetor bidimensional (matriz) com atributos de pokémons.
let atributosPokemons = [
    ["Nome", "Sexo", "Nível", "Pontos de Vida", "Selecionável"],
    ["Pikachu", "Masculino", 20, 45, true],
    ["Charmander", "Feminino", 18, 39, true],
    ["Bulbasaur", "Masculino", 15, 44, false],
    ["Squirtle", "Feminino", 17, 43, true]
]

console.log(atributosPokemons[1]) //Acessando os dados do Pikachu.
console.log("O Squirtle é do sexo: " + atributosPokemons[4][1]) //Acessando o sexo do Squirtle.
console.log("O nível do Charmander é: " + atributosPokemons[2][2]) //Acessando o nível do Charmander.