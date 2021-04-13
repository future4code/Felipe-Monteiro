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
array.map(verificaImparePar)
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
pessoas.filter(permissao) 

		////////////// EXERCICIO 4 //////////////

	const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
	]

	const consultasCanceladas = consultas.map((pessoas) =>{
	if(pessoas.cancelada == true){
		console.log(Olá, ${pessoas.nome}. Estamos enviando esta mensagem para
		${ lembrá-lo / lembrá-la } da sua consulta no dia ${pessoas.dataDaConsulta}. Por favor, acuse
		o recebimento deste e-mail.)
	}else{
		Olá, ${ Sr./Sra. } {pessoas.nome}. Infelizmente, sua consulta marcada
		para o dia ${pessoas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
		contato conosco para remarcá-la 
	}
	})

*/


const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

const atualizandoSaldoTotal = contas.map((clientes) =>{
	const comprasClientes = clientes.compras
	const total = comprasClientes.reduce((total, currentElement) => total + currentElement)
	clientes.saldoTotal -= total.
})

console.log(atualizandoSaldoTotal)