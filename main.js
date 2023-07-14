const form = document.getElementById('formulario');


form.addEventListener('submit', function (e) { 
    e.preventDefault();

    const primeironumero = document.getElementById('numero_1').value;
    const segundonumero = document.getElementById('numero_2').value;
    const mensagemSegundoMaior = `O numero <b>${primeironumero}</b> é menor que o numero <b>${segundonumero}</b> !!`;
    const mensagemPrimeiroMaior = `O numero <b>${primeironumero}</b> é maior que o numero <b>${segundonumero}</b> !!`;
    const mensagemIgual = `O dois numeros são iguais, <b>${primeironumero}</b> é igual a <b>${segundonumero}</b> !!`;
    
    if (primeironumero == segundonumero) {
        const containerMensagemIgual = document.querySelector('.igual');
        containerMensagemIgual.innerHTML = mensagemIgual;
        containerMensagemIgual.style.display = 'block';
        document.querySelector('.menorque').style.display = 'none';
        document.querySelector('.maiorque').style.display = 'none';
    } else {

    function calculo (valorUm, valorDois) {
        return valorUm > valorDois;
    }

    if (calculo (primeironumero, segundonumero) == false) {
        const containerMensagemFalso = document.querySelector('.menorque');
        containerMensagemFalso.innerHTML = mensagemSegundoMaior;
        containerMensagemFalso.style.display = 'block';
        document.querySelector('.maiorque').style.display = 'none';
        document.querySelector('.igual').style.display = 'none';
    } else {
        const containerMensagemTrue = document.querySelector('.maiorque');
        containerMensagemTrue.innerHTML = mensagemPrimeiroMaior;
        containerMensagemTrue.style.display = 'block';
        document.querySelector('.menorque').style.display = 'none';
        document.querySelector('.igual').style.display = 'none';
    }
    
    }
})

form.addEventListener('reset', function (e) {
    document.querySelector('.menorque').style.display = 'none';
    document.querySelector('.maiorque').style.display = 'none';
    document.querySelector('.igual').style.display = 'none';
})