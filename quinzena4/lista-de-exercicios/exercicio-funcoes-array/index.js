/*
var pessoas  = [
	{ nome: "Pedro", idade: 20} ,
	{ nome: "João", idade: 10} ,
	{ nome: "Paula", idade: 12} ,
	{nome: "Artur", idade: 89 } 
]
        ////EXERCICIO1 ITEM A//////

const callback = (humano, index, array) => {
    if(humano.idade >= 20 ){
        return true
    }
    return false
}
const soSelecionados = pessoas.filter(callback)
console.log(soSelecionados) 
            ////// ITEM B//////
const soMenoresVinte = pessoas.filter((humano, index, array) =>{
    if(humano.idade < 20){
        return true
    }
    return false
})
console.log(soMenoresVinte)
*/

/*      ////EXERCICIO2 ITEM A//////
 const array = [1, 2, 3, 4, 5, 6]
function dobro(item, index, arr){
    arr[index] = item * 2 
}
array.forEach(dobro)
console.log(array) */

/*      ///// item b///////
const array = [1, 2, 3, 4, 5, 6]
const stringsDosNumeros = array.map((num, index) =>{
    return `${index}`
})
console.log(stringsDosNumeros) */

/*    //////////item C//////////////
const array = [1, 2, 3, 4, 5, 6]
const verificaImparePar = (num, index, array) => {
    if(num % 2 === 0){
        console.log(`${num} é par`)
    }else{
        console.log(`${num} é impar`)
    }
}
array.filter(verificaImparePar)
 */

/*      //////////// EXERCICIO 3 ///////////////
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const permissao = (num, index, array) =>{
    if(num.altura >= 1.5 && num.idade > 14 && num.idade < 60){
        console.log(`a/o ${num.nome} tem permissão, Boa diversão!`)
    }else{
        console.log(`a/o ${num.nome} não tem permissão, Não atendeu aos requisitos`)
    }
}
pessoas.filter(permissao) */

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

const alterandoSaldo = (num, index, array) => {
    var x
    for (x in num){
        num.saldoTotal = Math.floor(Math.random() * 10000)
    }
    console.log(num)
}
console.log(contas)
console.log("///////////////////////////////////////////")
contas.filter(alterandoSaldo)

