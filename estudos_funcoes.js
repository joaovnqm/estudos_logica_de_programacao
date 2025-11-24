//Nesse arquivo, vou praticar um pouco de funções em um contexto de uma televisão que está sendo ligada.
main()

function main() {
    //Função geral que chama as outras funções.
    ligarTV()
    ligarSistemaSom()
    ligarWifi()
}

function ligarTV() {
    //Função para ligar a TV.
    console.log("Ligando a TV...")
    console.log("TV ligada!")
}

function ligarSistemaSom() {
    //Função para ligar o sistema de som.
    console.log("Ligando o sistema de som...")
    console.log("Sistema de som ligado!")
}

function ligarWifi() {
    //Função para ligar o Wi-Fi.
    console.log("Ligando o Wi-Fi...")
    console.log("Wi-Fi ligado!")
}

//Chamando função por função.
ligarTV()
ligarSistemaSom()
ligarWifi()