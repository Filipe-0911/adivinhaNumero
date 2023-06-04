const numero = parseInt(Math.floor(Math.random() * (9 - 0 + 1) + 0));
console.log(numero);
const resposta = document.querySelector('.resposta');

document.querySelector('.botao').addEventListener('click', () => {

    var numeroInserido = document.querySelector('#numero');
    let texto = parseInt(numeroInserido.value);
    console.log(texto);

        if (texto == numero) {
            resposta.innerHTML = 'Você acertou!';

        } else {
            while (texto != numero) {
            resposta.innerHTML = `Você errou!`;
            document.getElementById('numero').value = "";
            break;
            }
        }
});
