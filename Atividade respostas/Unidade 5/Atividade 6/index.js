let idade = 18
let cnh = true

if(idade >= 18 && cnh === true){
    console.log(`OK, Senhor pode seguir em frente na blitiz`)
}
else if(idade >= 18 && cnh === false){
    console.log(`Senhor dessa do carro, tem que chamar alguem para retirar seu veiculo`)
}
else {
    console.log(`Deça do veiculo e chame um responsavel para retirar ele no patil`)
    cnh = false
    console.log(`CNH ${cnh}`)
}