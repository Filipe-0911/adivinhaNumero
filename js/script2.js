const numero = Math.floor(Math.random() * (9 - 0 + 1) + 0);
console.log(numero);

//verificaAcerto();

function verificaAcerto() {

    let chute = prompt('Digite um número.');

    for (i = 0; i < 2; i++) {
        if (chute != numero) {
            chute = prompt('Errou. Tente novamente.')
        } else {
            alert('Parabéns, você acertou.');
            break;
        }
    }
    if (chute == numero) {
        alert(`Parabéns, você acertou! O número correto era ${numero}.`)
    } else {
        alert(`Fim de jogo, o número correto era ${numero}.`)
    }
}


    document.querySelector('.botao').addEventListener('click', () => {
        var numeroInserido = document.querySelector('#numero');
        var texto = numeroInserido.value;
        console.log(texto)

        for (i = 0; i < 2; i++) {
            if (texto != numero) {
                document.querySelector('.resposta'). innerHTML = 'Você errou!';
                alert('Tente novamente.');
            } else {
                document.querySelector('.resposta'). innerHTML = 'Você acertou!'
                break;
            }
        }

    })

