function soma(a,b) { 
    return a + b 
}
console.log(soma(10, 20))

function divisao(a,b) {
    return a / b
}
console.log(divisao(20, 2))

function multiplicacao(a,b) {
    return a * b
}
console.log(multiplicacao(30,2))

function subtracao(a,b) {
    return a - b
}
console.log(subtracao(50,10))


function multiTarefas(num1,num2) {
    if(num1 > 0 && num2 > 0){
        return num1 + num2 
    }else if(num1 < 0 && num2 < 0){
        return num1 - num2
    }else if(num1 === 0 && num2 ===0){
        return num1 * num2
    }else {
        return num1 / num2
    }
}
console.log(multiTarefas(3,1))

let pessoas = ['ana','julia','joao','carlos','lara','bia']
console.log(pessoas[0])

/*selecionando a ana*/

for (let i = 0; i<pessoas.length; i++){
    if(pessoas.length < 6){
        pessoas.push('insira mais nomes')
    }
console.log(pessoas)
}

let listaInformacoes = [
    {
        nome: 'ana',
        idade: 23,
        pais: 'Brasil'
    },
    {
        nome: 'carlos',
        idadae: 25,
        pais: 'franca'
    },
    {
        nome: 'Bia',
        idadae: 30,
        pais: 'italia'
    },
    {
        nome: 'ana',
        idade: 22,
        pais: 'Brasil'
    }
]
for(let i = 0; i <listaInformacoes.length; i++){
    if(listaInformacoes[i].pais === 'Brasil'){
        console.log('pessoa do seu pais encontrada')
        if(listaInformacoes[i].idade === 22){
            console.log('estamos mais proximo de encontrar ana !! ' + divisao (100,5) + ' pontos acumulados')
            if(listaInformacoes[i].nome === 'ana'){
                console.log('a ana foi encontrada !!!!!! ' + soma(50,50) + ' pontos bonus')  
            }break;
        }else{
            console.log('continuamos tentando encontrar ana !! ' + subtracao(30,20) + ' pontos adicionados')
        }
    }else{
        console.log('essa pessoa nao e do brasil')  
    }
}
/*console.log(listaInformacoes[0].pais)*/
