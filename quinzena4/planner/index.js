function criartarefa(){
    var campo = document.getElementById('tarefa');
    var dia = document.getElementById('dias-semana');
    var domingo = document.querySelector('div#domingo')
    var segunda = document.querySelector('div#segunda')
    var terca = document.querySelector('div#terca')
    var quarta = document.querySelector('div#quarta')
    var quinta = document.querySelector('div#quinta')
    var sexta = document.querySelector('div#sexta')
    var sabado = document.querySelector('div#sabado')
    switch (dia.value) {
        case 'domingo':
            domingo.innerHTML += `<p> ${campo.value} </p>`;
            break;
        case 'segunda':
            segunda.innerHTML += `<p> ${campo.value} </p>`;
            break;
        case 'terca':
            terca.innerHTML += `<p> ${campo.value} </p>`;
            break;
        case 'quarta':
            quarta.innerHTML += `<p> ${campo.value} </p>`;
            break;
        case 'quinta':
            quinta.innerHTML += `<p> ${campo.value} </p>`;
            break;
        case 'sexta':
            sexta.innerHTML += `<p> ${campo.value} </p>`;
            break;
        case 'sabado':
            sabado.innerHTML += `<p> ${campo.value} </p>`;
            break;
    }
    campo.value = "";
}