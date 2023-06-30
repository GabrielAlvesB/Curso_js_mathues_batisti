class Conta{
    constructor (saldo){
        this.saldo = saldo
    }

    deposito(valor){
        this.saldo += valor
    }
    saque(valor){
        this.saldo-= valor
    }
}

let conta = new Conta(1000)

conta.deposito(2)

console.log(conta.saldo)

conta.saque(2)
console.log(conta.saldo)

