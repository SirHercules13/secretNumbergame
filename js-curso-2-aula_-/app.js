let listaNumSorteados = [];
let maxNum = 10;
let secretNumber = generateSecretNumber();
let trys = 1;

//Função para escrever textos no HTML
function showScreenText(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;

}
//função para escrever o texto na tela inicial
function startScreen(){
    showScreenText('h1', 'Jogo do número secreto!');
    showScreenText('p', `Escolha um número entre 1 e ${maxNum}`);
 }
 startScreen();


//função para gerar um número pseudo-aleatório secreto
function generateSecretNumber(){
    let choosenNum =  parseInt(Math.random() * maxNum + 1);
    let quantityOfElementsInList = listaNumSorteados.length;

    //limpa a lista ao ocupar todos os elementos nela
    if(quantityOfElementsInList == maxNum){
        listaNumSorteados = [];
    }

    //verifica se o número sorteado está na lista e se tiver gerará outro
    if(listaNumSorteados.includes(choosenNum)){
        return generateSecretNumber()

    }else{
        listaNumSorteados.push(choosenNum);
        console.log(listaNumSorteados);
        return choosenNum;

    }
}

//função para verificar se o botao "chutar" foi apertado
function shotVerify(){
    let shot = document.querySelector('input').value;
    console.log(shot == secretNumber);

    if(shot == secretNumber){
        showScreenText('h1', 'Parabéns');
        let wordTrys = trys > 1 ? 'tentativas' : 'tentativa';
        let msgTry = `Você descobriu o número secreto com ${trys} ${wordTrys}`;
        showScreenText('p', msgTry);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(shot > secretNumber){
        showScreenText('p', 'O número secreto é menor');

    }else{
        showScreenText('p', 'O número secreto é maior');
    }
    trys++;
    clearText();

}

//função para limpar o texto após a tentativa
function clearText(){
    shot = document.querySelector('input');
    shot.value = '';
 
}

//função para restartar o game
function restartGame(){
    secretNumber = generateSecretNumber();
    clearText();
    trys = 1;
    startScreen();
    document.getElementById('restart').setAttribute('disabled', true);

}


