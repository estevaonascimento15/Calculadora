const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botoesNumeros = document.querySelectorAll('.numero');
const botoesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botoesNumeros.forEach(botao => {
    botao.addEventListener('click', () => display.agregarNumero(botao.innerHTML));
});

botoesOperadores.forEach(botao => {
    botao.addEventListener('click', () => display.computar(botao.value))
});