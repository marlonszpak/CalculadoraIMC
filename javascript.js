function CalcularIMC (){
let nome = document.getElementById('nome').value
let altura = document.getElementById('altura').value
let peso = document.getElementById('peso').value
let resultado = document.getElementById('resultado')

if(nome === '' || altura === '' || peso === ''){
    resultado.textContent = "Preecha todos os campos!"
}
else {
    let valorimc = peso / (altura * altura)
    let classificaçao = ''
    if(valorimc < 18.5){
        classificaçao = 'Baixo peso'
    }
    else if(valorimc < 24.99){
        classificaçao = 'Normal'
    }else if(valorimc < 29.99){
        classificaçao = 'Sobrepeso'
    }else{
        classificaçao = 'Obesidade'
    }
    resultado.textContent = `${nome} seu IMC é ${valorimc.toFixed(2)} você está ${classificaçao}!`
}
}


