const numero = parseInt(Math.floor(Math.random() * (9 - 0 + 1) + 0));
console.log(numero);
const resposta = document.querySelector('.resposta');

document.querySelector('.botao').addEventListener('click', () => {

    var numeroInserido = document.querySelector('#numero');
    let texto = parseInt(numeroInserido.value);
    console.log(texto);
    
    
    for (i = 2; i > 0; i--) {

        if (texto == numero) {
            resposta.innerHTML = 'Você acertou!';
            break;

        } else {
            resposta.innerHTML = `Você errou! Você tem mais ${i} tentativas`;
            document.getElementById('numero').value = "";
            break;

        }
    }
});
