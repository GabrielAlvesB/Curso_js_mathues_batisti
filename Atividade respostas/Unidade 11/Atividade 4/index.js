class Carro{
    constructor(marca, cor, gasolina){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }

    set adicionarGasolina(gasolina){
        this.gasolina += gasolina
    }

    set removerGasolina(gasolina){
        this.gasolina -= gasolina
    }
}

let carro = new Carro ("BMW", "Vermelha", 10)

console.log(carro.marca)
console.log(carro.cor)
console.log(carro.gasolina)

carro.adicionarGasolina = 90
console.log("Segundo Texto")
console.log(carro.marca)
console.log(carro.cor)
console.log(carro.gasolina)

carro.removerGasolina = 10
console.log("Terceiro Texto")
console.log(carro.marca)
console.log(carro.cor)
console.log(carro.gasolina)