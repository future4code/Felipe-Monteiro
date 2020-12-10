/* interpretação de codigo
1. a function conversorDeMoeda recebe um valor como parâmetro e pergunta ao usuario qual o valor da cotação depois guarda em uma variavel a multiplicação desses dois e mostra o resultado.

2. a function investeDinheiro recebe dois parametros, caso seja poupança, renda fixa, cdb ou ações dependendo do tipo de investimento vai ser multiplicado por um juros diferente, e se não  for nenhum dos itens ele retorna uma mensagem de erro, no final mostra 165 e TIPO DE INVESTIMENTO INFORMADO INCORRETO

3. ele declara 3 arrays e logo em seguida faz um contador se o numero for par vai guardar no array1 se não guarda no array2. depois ele mostra a "quantidade total de numeros" 13
6
7

4.recebe um array de números, logo depois cria um contador para percorrer esse array 
*/
const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1, 1.1, -10, 25, 1590];

let numero1 = Infinity
let numero2 = 0

for(let numero of numeros){
    if(numero < numero1){
        numero1 = numero;
    }
    if(numero > numero2){
        numero2 = numero
    }
}
console.log(numero1)
console.log(numero2)