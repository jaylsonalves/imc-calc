function start(){
    //seleciona a id e atribui a variável
    var butaocalcular = document.querySelector('#button-calculo');
    
    //a variável é monitorada pelo click
    butaocalcular.addEventListener('click', handleButtonClick);
    
    //seleciona o id e atribui a variável
    var inputP = document.querySelector('#input-peso');
    var inputA = document.querySelector('#input-altura');
}

function calcularimc(weight, height){
    //retorna o calculo
    return weight / (height * height);
}

function handleButtonClick(){
    //ação ao clicar o botão
    var inputP = document.querySelector('#input-peso');
    var inputA = document.querySelector('#input-altura');
    var resultadoImc = document.querySelector('#imc-resultado');
    
    //strings em números
    var p = Number(inputP.value);
    var a = Number(inputA.value);
    
    //atribuindo uma variável a função "calcularimc" 
    //colocando os valores recebido em parâmetros
    var imc = calcularimc(p, a);

    //formatando o resultado imc em dois valores e trocando o "." por ","
    var formatadoImc = imc.toFixed(2);
    
    //renomeando o texto e atribuindo a variável formatado do imc
    resultadoImc.textContent = formatadoImc;
}

//executando a função
start();