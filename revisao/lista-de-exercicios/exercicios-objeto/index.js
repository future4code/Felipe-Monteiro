/* 
1. os Arrays são utilizados quando o desenvolvedor tem a necessidade de armazenar mais de 1 valor em uma variavel, os objetos devemos utilizar quando queremos guardar vários dados de 
de forma repetitiva e organizada

2.
function criaRetangulo(lado1, lado2){
    let peri = 2 * (lado1 + lado2)
    let ar = lado1 * lado2
    var res = {
        largura: lado1,
        altura: lado2,
        perimetro: peri,
        area: ar,
    }
    console.log(res)
}
console.log(criaRetangulo(20, 30))

3.
var filme = {
    titulo: "Vingadores", 
    ano: 2019,
    diretor: "John Fulano",
    atoreseAtrizes: ["Tom Veigar ", "Gorete ", "Charles Drumond ", " e o Guina. "]
}
console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor}, e estrelado por ${filme.atoreseAtrizes}`)
*/
var pessoa = {
    nome: "Gabriel",
    idade: "22",
    email: "gabriel@hotmail.com",
    endereço: "rua do outro lado do rio 2222"
}
var novapessoa = pessoa
var anonimizarPessoa;
anonimizarPessoa = function(){
    novapessoa.nome = "ANONIMO"
    console.log(novapessoa)
}
console.log(pessoa)
console.log(anonimizarPessoa())