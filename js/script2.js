const numero = Math.floor(Math.random() * (9 - 0 + 1) + 0);
console.log(numero);

verificaAcerto ();

function verificaAcerto() {

    let chute = prompt('Digite um número.');

    for (i = 0; i < 2; i++) {
        if (chute != numero) {
            alert('errou');
            verificaAcerto ();
            break;
        } else {
            alert('Parabéns, você acertou.');
            break;
        }
    }
}