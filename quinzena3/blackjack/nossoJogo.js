function ola (){
   var txt = "Bem vindo ao jogo de Blackjack!";
   alert(txt)
   var r = confirm("Deseja iniciar uma nova rodada?");
   if (r == false) {
      txt = "O jogo acabou";
      alert(txt)
   }
}

function perguntar() {
         /* imprimindo as primeiras duas cartas do usuario e 1 carta da maquina. */
         var cartaU1 = comprarCarta()
         var cartaU2 = comprarCarta()
         var cartaMaquina1 = comprarCarta()
         var cartaMaquina2 = comprarCarta()
         var f = confirm(`Suas cartas são ${cartaU1.texto} ${cartaU2.texto}. A carta revelada do computador é o ${cartaMaquina1.texto} ${cartaMaquina2.texto}. Deseja comprar mais uma carta?`)
         if (f == true){
            /* o usúario comprou mais duas cartas e essa é a nova mão dele. */
            cartaU1 = comprarCarta()
            cartaU2 = comprarCarta()
            cartaMaquina1 = comprarCarta()
            cartaMaquina2 = comprarCarta()
            alert(`Suas cartas são ${cartaU1.texto} ${cartaU2.texto}. A carta revelada do computador é o ${cartaMaquina1.texto} ${cartaMaquina2.texto}. Deseja comprar mais uma carta?`)
            /* GUARDANDO A PONTUAÇÃO */
            var pontuacaousuario = cartaU1.value + cartaU2.value
            var pontuacaomaquina = cartaMaquina1.value + cartaMaquina2.value
            var ganhador
               if(pontuacaomaquina.value > pontuacaousuario.value){
                  ganhador = ' Robo '
               }else{
               ganhador = 'Você ganhou!'
               }
            /* INFORMANDO CARTAS + PONTUAÇÃO */
            alert(`Usuario ${cartaU1.texto} ${cartaU2.texto}. pontuação  ${pontuacaousuario.value}. Maquina ${cartaMaquina1,texto} ${cartaMaquina2,texto}. A pontuação do computador é ${pontuacaomaquina.value}. O ${ganhador}`)
         }else{
         /* GUARDANDO A PONTUAÇÃO */
         var pontuacaousuario = cartaU1.value + cartaU2.value
         var pontuacaomaquina = cartaMaquina1.value + cartaMaquina2.value
         var ganhador
         if(pontuacaomaquina.value > pontuacaousuario.value){
            ganhador = ' Robo '
         }else{
            ganhador = 'Você ganhou!'
         }
         /* INFORMANDO CARTAS + PONTUAÇÃO */
         confirm(`suas cartas são ${cartaU1.texto} ${cartaU2.texto}. sua pontuação é ${pontuacaousuario}. As cartas do computador são ${cartaMaquina.texto}. A pontuação do computador é ${pontuacaomaquina}. O ${ganhador}`)
      }
}
