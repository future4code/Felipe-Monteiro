/* exercicio1
A. 10 50
B. 10 50 

exercicio2
A. Darvas Goli pois o contator é ate menor que dois
B. Amanda Caio

exercicio4
function essesoueu(){
    console.log(`Eu sou ${nome}, tenho ${anos} anos, moro em ${cidade} e sou ${profissao}`)
}
function perguntar(){
    var nome = prompt("qual o seu nome?")
    var anos = Number(prompt("qual a sua idade?"))
    var cidade = prompt("onde voce mora?")
    var profissao = prompt("você é estudante? S/N")
    prompt(`Eu sou ${nome}, tenho ${anos} anos, moro em ${cidade} e sou ${profissao}`)
}

exercicio5
A.function somar(x, y){
    var resultado = x + y
    return resultado
}
console.log(somar(2, 3))
B.function boolean(x, y){
    if(x > y){
        var resultado = "S"
    }else{
        var resultado = "N"
    }
    console.log(resultado)
}
C. function mensagemvezes(mensagem){
    for(let i = 0; i <= 5; i++){
        mensagemvezes(mensagem)
    }
}
exercicio6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
A.function quantidade(num){
    console.log9(num) 
}
console.log(array.length)

B.function parouimpar(x){
    if(x % 2 == 0){
        var resultado = "PAR"
    }else{
        var resultado = "IMPAR"
    }
    console.log(resultado)
}
var z = 19
parouimpar(z)
*/
var arrayi = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function pares(array){
    for(let i = 0; i <= 9; i++){
        if(array[i] %2 == 0){
            console.log(array[i])
        }
}
}
console.log(pares(arrayi))