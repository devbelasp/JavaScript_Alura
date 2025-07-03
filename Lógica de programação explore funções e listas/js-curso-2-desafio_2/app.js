//1.Criar uma função que exibe "Olá, mundo!" no console.
function exibirMensagemNoConsole () {
    console.log('Olá, mundo!');
}

exibirMensagemNoConsole();

//2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('Isabela');

//3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}

let resultado = calcularDobro(7);
console.log(resultado);

//4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(n1,n2,n3) {
    return (n1 + n2 + n3) / 3;
}

let resultadoMedia = calcularMedia(8,9,10);
console.log(`A média dos 3 valores é ${resultadoMedia}`);

//5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function verificarMaiorNumero(numero1,numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

let maiorNumero = verificarMaiorNumero(2,8);
console.log(maiorNumero);

//6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(num) {
    return num * num;
}

let resultadoQuadrado = quadrado(5);
console.log(resultadoQuadrado);