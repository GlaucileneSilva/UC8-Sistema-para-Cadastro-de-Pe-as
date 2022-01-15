var ListaPeca = ["Filtro de Ar","Motor","Amortecedor"]

if (ListaPeca.length < 10){
    //É possível Cadastrar
console.log("É possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")
}


let peso = 50;
if(peso <100){
console.log("A peça deve pesar no mínimo 100g")
}else {
    console.log("Apeça possuí peso adequado")
}


let nomePeca ="Disco de Freio"
if (nomePeca.length>3){
    console.log("Nome de peças está adequado para o cadastro!")
}else if(nomePeca.legth ==0) {
    console.log("o nome da peça não pode ser vazio")
}else{
    console.log("O nome deve ter mais de 3 catacteres, digite um nome adequado")
}

  // = -> atribuição de valor -> Recebe
 // == -> verificação de os valores são iguais -> É igual?
// === -> verificação se o valor e o tipo de valor são iguais

// let idade = "23"
// if (idade === "23")


switch(nomePeca.length){
    Case 0:
    console.log("o nome de peça não pode ser vazio")
    break;

    Case 1:
    Case 2:
    Case 3:
    console.log("onome deve ter mais de 3 cracteres, dgitq um nome adequado")

    default:
        console.log("O nome da peça está adequado")
        break;
}



