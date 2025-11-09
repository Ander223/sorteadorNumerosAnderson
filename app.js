let numeroAleatorio;

function sortear(){
    let quantidade = parseInt( document.getElementById('quantidade').value);   // captura os valores do elemento quantidade
    let de = parseInt( document.getElementById('de').value);
    let ate = parseInt( document.getElementById('ate').value);

    let listaNumerosSorteados = [];
   
    for(let i = 1; i <= quantidade; i ++){             // controla a qtd de numeros aletorios que irão ser gerados

          numeroAleatorio = geraNumerosAleatorios(de, ate);  // chama a função e envia 2 numeros por parametro e depois recebe 2 numeros por parametros para serem comparados no if
                                                                
        if(listaNumerosSorteados.includes(numeroAleatorio)){  // verifica se o numeroAleatorio esta no array listaNumerosSorteados
            let  numeroRepetidos = geraNumerosAleatorios(de, ate);                  // caso seja repetido chama a função novamente
                                                                    console.log(`numeros sorteados repetidos ${numeroRepetidos}`);
            i--;  // decrescenta 1 no i para gerar mais um número (novo número)
          
        } else {
                listaNumerosSorteados.push(numeroAleatorio);  // se o numeroAleatorio não estiver na lista insere o mesmo
            } // console.log(`lista de numeros aleatorios ${listaNumerosSorteados}`); 
           
    } 
     document.getElementById('resultado').innerHTML=`<label class="texto__paragrafo">Números sorteados: ${listaNumerosSorteados}</label>`;  
        // exibe os numeros sorteados na tela 
} reiniciar();

   

function geraNumerosAleatorios(min , max){
    
    return numeroAleatorio =  Math.floor(Math.random() * (max - min + 1)) + min;  // gera numerosAleatorios decimais
}  

function limpaCampo(){

    quantidade =  document.getElementById('quantidade').value=''; // inseri campo vazio no value
    de = document.getElementById('de').value='';
    ate = document.getElementById('ate').value='';
    document.getElementById('resultado').innerHTML='<label class="texto__paragrafo">Números sorteados:  Nenhum até agora</label>';
                                                                    // volta p label com a mensagem inicial
}

function reiniciar(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){  // verifica se o botaoReiniciar contem a propriedade container__botao-desabilitado 
        botaoReiniciar.classList.remove('container__botao-desabilitado');  // remove container__botao-desabilitado
        botaoReiniciar.classList.add('container__botao');                // adiciona container__botao
    } else {
        botaoReiniciar.classList.add('container__botao');
        botaoReiniciar.classList.remove('container__botao-desabilitado');
    }
    limpaCampo();
}