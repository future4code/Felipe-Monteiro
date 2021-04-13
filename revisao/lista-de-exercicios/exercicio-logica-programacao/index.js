/* 
1 pode se percorrer uma lista atraves de repetições, podemos percorrer uma lista tanto com o FOR como com o while ou do while, logo abaixo um exemplo:
    var array = "55, 15, 16, 17, 20, 30"
	var i = 0
    for(let i in array){
        console.log(array[i])
    }
    while(i <= array.length){
		console.log(array[i])
		i++
    }
    var num = 0
	var i = 10;
	do {
	  num <= i 
	}
	while (num++);


2. A.False B.False C.True D.True E.True

3.
let numero = 2
const quantidadeDeNNumerosPares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
const resultado = [];
let i = 0 
while(i <= quantidadeDeNNumerosPares[i]){
    if(quantidadeDeNNumerosPares[i] % 2 === 0){
        resultado.push(quantidadeDeNNumerosPares[i])
    }
    i++;
}
const res = []
while(numero >= 0){
    res.push(resultado[numero])
    numero-- 
}
console.log(res)

4.
function trinagulo(A, B, C) {
    if (C > A + B || A > B + C || B > A + C ){
        console.log("NAO FORMAM UM TRIANGULO")
    }
    else if ( A != B && A != C && B != C ){
        console.log("TRIANGULO ESCALENO")
    }
    else if ( A == B && A == C){
        console.log("TRIANGULO EQUILATERO")
    }
    else if (A == B || A == C || B == C){
        console.log("TRIANGULO ISOSCELES")
    }
}


5. 
function numeros(a, b){
	let c,d,e, f = 0
	if (a > b){
	c = a
	}else if (b > a){
	c = b
	}else{
	c = " os numeros são iguais"
	}
	console.log(`o maior é : ${c}`)
	if(a % b == 0){
	d = `${a} é divisivel por ${b}`
	f = a - b 
	}else if (a % b !==0){
	d = `${a} não é divisivel por ${b}`
	}
	
	 if (b % a === 2 || b % a == 0){ Para saber se um número é ou não divisivel pelo o outro.
	e = `${b} é divisivel por ${a}`
	f = b - a 
	}else if (b % a !== 0){
	e = `${b} não é divisivel por ${a}`
	}
	console.log(d)
	console.log(e)
	console.log(`a diferença entre eles é ${f}`)
}
console.log(numeros(15, 30))

*/
