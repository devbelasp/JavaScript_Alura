// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura,peso) {
    return peso / (altura * altura);
}

let resultadoIMC = calcularIMC(1.55,53);
console.log(`Valor IMC: ${resultadoIMC.toFixed(2)}`);

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial (numero) {
    if (numero === 0 || numero === 1) {
    return 1;
  }
    let resultadoFatorial = 1;
    while (numero > 1) {
        resultadoFatorial *= numero;
        numero --;
    }
    return resultadoFatorial
}

console.log(`Valor fatorial: ${calcularFatorial(5)}`);

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$ 5,42.

function converterDolarParaReais(dolar) {
    let reais = dolar * 5.42
    console.log(`O valor de $${dolar} dólares equivale à R$${reais} reais.`)
}

converterDolarParaReais(1200);


//4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que 
// serão dadas como parâmetro.

function calcularAreaPerimeroSalaRetangular(altura,largura) {
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

calcularAreaPerimeroSalaRetangular(5,10);

//5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro.
//  Considere Pi = 3,14.

function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * (raio*raio);
    let perimetro = 2 * Math.PI * raio;
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

calcularAreaPerimetroSalaCircular(4);

//6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function exibirTabuada(numero) {
    console.log(`TABUADA DO NÚMERO ${numero}:`)
    let fator = 1;
    while (fator <= 10) {
        let resultado =  numero * fator;
        console.log(`${numero} x ${fator} = ${resultado}`);
        fator ++;
    }
}

exibirTabuada(9);