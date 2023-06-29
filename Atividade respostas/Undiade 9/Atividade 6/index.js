const nomes = ["Gabriel", "Kaisa", "Marlon", "Agata", "Roberta", "Nicolina", "Karina", "Arthur"]
const nom = ["Gabriel", "Kaisa", "Marlon", "Agata", "Roberta", "Nicolina", "Karina", "Arthur", "Clarrice", "Mathues"]
const idadae = [22, 32, 19, 8]

function verificadorDeQuantidade(quantidade){
    if(quantidade.length == 8){
        console.log(`Quantidade perfeita`)
    }
    else if(quantidade.length < 5){
        console.log(`Muito pouco`)
    }
    else{
        console.log(`Ta muito grande esse array`)
    }
}
verificadorDeQuantidade(nomes)
verificadorDeQuantidade(idadae)
verificadorDeQuantidade(nomes)
verificadorDeQuantidade(nom)
verificadorDeQuantidade(idadae)

