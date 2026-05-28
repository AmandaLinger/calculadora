let visor = document.querySelector('.visor');
let expressao = '';
let arrayNumeros = []
let arrayOperadores = []



function fazCalculo(){
    separaArrays(expressao);

    for( let i = 0; i < expressao; i++){
        if(arrayOperadores[i] === '%' || arrayOperadores[i] === '*' || arrayOperadores[i] === '/'){ // Resolvendo multiplicação,divisão e porcentagem
            let parcial;

            if(arrayOperadores[i] === '%'){
                parcial = arrayNumeros[i] * 10 /100
                console.log(parcial)
            }

            if(arrayOperadores[i] === '*'){
                parcial = arrayNumeros[i] * arrayNumeros[i + 1]
                console.log(parcial)
            }

            if(arrayOperadores === '/'){
                parcial = arrayNumeros[i] / arrayNumeros[i + 1 ]
                console.log(parcial)
            }

            arrayNumeros.splice(i, 2, parcial); //o splice é usado para alterar o array numeros. array.splice(início, quantidade_de_itens, item1, item2, ...)
            arrayOperadores.splice(i, 1);

            i--;
        }
    }

    // Resolve soma e subtração
    let resultadoFinal = arrayNumeros[0];

    for (let i = 0; i < arrayOperadores.length; i++) {

        if (arrayOperadores[i] === '+') {
            resultadoFinal += arrayNumeros[i + 1];
        } else {
            resultadoFinal -= arrayNumeros[i + 1];
        }
    }

    return resultadoFinal;
}


function separaArrays(expressao){
    arrayNumeros = expressao.split(/[\+\-\*\/]/).map(Number); //tirando todos os operadores
    arrayOperadores = expressao.match(/[\+\-\*\/]/g); //retorna apenas os operadores em um array (g= global// pega todos os elementos, não apenas 1)

    console.log(arrayNumeros)
    console.log(arrayOperadores)
}

function limpaUltimoElemento(){
    if(visor.innerText === ''){
        visor.innerText = '0' //não deixa o visor vazio
        return
    }

    if (visor.innerText === '0') {
        alert('Digite um número válido para poder apagar')
        return
    } 

    let novoNumero = visor.innerText.slice(0, -1)
    console.log(expressao);

    visor.innerText = novoNumero
    expressao = visor.innerText
}


function escreveNoVisor(valor){
    if(visor.innerText == '0'){ // o innerText pega apenas  oconteúdo do visor
        visor.innerText = ''
    }
    visor.innerText += valor
    expressao = visor.innerText
    console.log(expressao)
}

function multiplicaMenosUm(){
    if(visor.innerText === '' || visor.innerText === '0'){
        alert('Digite um número válido')
        return  //finaliza a execução da função
    }
    let numeroVezesUmNeg = parseFloat(visor.innerText) * -1;
    visor.innerText = numeroVezesUmNeg;
}

function limpaVisor(){
    visor.innerHTML = '0';
}


//adicionando numeros pelo teclado 
document.addEventListener('keydown', (e)=>{
    let key = e.key;

    if (/^[0-9]+$/.test(key)){
        escreveNoVisor(key)
        return
    }

    if (key =='+' || key == '-' || key =='*' || key =='/' || key == '%'){
        escreveNoVisor(key)
        return
    }
    if(key == 'Enter'){
        fazCalculo();
        return
    }
    if(key == 'Delete'){
        limpaVisor();
        return
    }
    if(key == 'Backspace'){
        limpaUltimoElemento()
        return
    }
})