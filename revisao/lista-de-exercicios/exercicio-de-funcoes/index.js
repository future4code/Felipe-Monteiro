/* 
1.
    const arr = [10,20,30,40,50,60,70,80,90,100]
    function segundoMaioreMenor(array){
    var max = Math.max(...array);
    var posicaoArray = array.indexOf(max)
    var removed = array.splice(posicaoArray, 1)
    var maiorNumero = Math.max(...array);
    console.log(`O meu segundo maior número é ${maiorNumero}`)
    var min = Math.min(...array);
    posicaoArray = array.indexOf(min)
    removed = array.splice(posicaoArray, 1)
    var menorNumero = Math.min(...array);
    console.log(`O meu segundo menor número é ${menorNumero}`)
    }
    console.log(segundoMaioreMenor(arr)) 
2.  
*/
var ola;
    ola = () => {
        return "hello Future4!"
    }
document.getElementById("#").innerHTML = ola();
    