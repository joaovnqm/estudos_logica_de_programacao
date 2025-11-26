//Estudando introdução a objetos.
//Criando uma classe para armazenar as informações de um carro e com um método para descrever o carro.
class carro{
    constructor(marca, modelo, ano, cor) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }

    descreverCarro() {
        console.log(`Carro: ${this.marca} ${this.modelo} - Ano: ${this.ano} - Cor: ${this.cor}`)
    }
}

//Criando um objeto carro a partir da classe carro.
let meuCarro = new carro("Toyota", "SW4", 2024, "Prata")
//Exibindo a descrição do carro criado.
meuCarro.descreverCarro()