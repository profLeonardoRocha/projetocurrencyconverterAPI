document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores de entrada
    const valor         = parseFloat(document.getElementById('amount').value);
    const daMoeda       = document.getElementById('daMoeda').value;
    const paraMoeda     = document.getElementById('paraMoeda').value;

    const exchangeRates = {
        USD: {BRL: 5.73, EUR: 0.92 },
        EUR: {BRL: 6.20, USD: 1.09 },
        BRL: {USD: 0.17, EUR: 0.16 }
    };

    // Conversão simples (USD > BRL, BRL > EUR, etc)
    let valorConvertido;
    if(daMoeda === paraMoeda){
       valorConvertido = valor;
    }
    else {
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
    }

    // Exibir resultado da conversão
    const conversao = document.getElementById('conversao');
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}`;

});