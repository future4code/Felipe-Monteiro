var array = []
function criarpost(){
    const txtTitulo = document.getElementById('titulo-post')
    const txtAutor = document.getElementById('autor-post')
    const txtConteudo = document.getElementById('conteudo-post')

    const post = {
        titulo: txtTitulo.value,
        autor: txtAutor.value,
        conteudo: txtConteudo.value
    }

    array.push(post)
    txtTitulo.value = ""
    txtAutor.Value = ""
    txtConteudo.value = ""
    console.log(array)
    inserir()
}
function inserir(){
    const container = document.getElementById("container-de-posts")
    container.innerHTML = ""
    for (let item of array) {
        container.innerHTML += criar(item)
    }
}
function criar(item) {
    return "<div class='post-individual'>" +
        "<h3>" + item.titulo + "</h3>" +
        "<p><i>" + item.autor + "</i></p>" + 
        "<p>" + item.conteudo + "</p>"+
        "</div>"
}