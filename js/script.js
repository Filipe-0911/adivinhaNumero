const numero = Math.floor(Math.random() * (9 - 0 + 1) + 0)
console.log(numero);

const chute = prompt('Digite um número');

const errouMsg = () => {
    alert('errrrrrrooouuu');
    prompt('tente novamente');
    
}

const acertouMsg = () => {
    alert('acertou mizeravi');
    // return;
}

for (let i = 2; i > 0; i--) {
    chute != numero ? errouMsg() : acertouMsg(); break;
    
}