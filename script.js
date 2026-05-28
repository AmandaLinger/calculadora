let visor = document.querySelector('.visor');

function escreveNoVisor(valor){
    if(visor.innerText == '0'){
        visor.innerText = ''
    }
    let expressao = espressao + valor;

}

function multiplicaMenosUm(){
    if(visor.innerText === '' || visor.innerText === '0'){
        alert('Digite um número válido')
        return  //finaliza a execução da função
    }

    visor = visor * -1;
}

function limpaVisor(){
    visor.innerHTML = '0';
}