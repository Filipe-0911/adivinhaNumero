const numero = Math.floor(Math.random() * (9 - 0 + 1) + 0);
console.log(numero);

verificaAcerto ();

function verificaAcerto() {

    let chute = prompt('Digite um número.');

    for (i = 0; i < 3; i++) {
        if (chute != numero) {
            alert('errou');
            chute = prompt('tente novamente.')
        } else {
            alert('Parabéns, você acertou.');
            break;
        }
    }
    if (chute == numero){
        alert(`Parabéns, você acertou! O número correto era ${numero}.`)
    } else {
        alert(`Fim de jogo, o número correto era ${numero}.`)
    }
}