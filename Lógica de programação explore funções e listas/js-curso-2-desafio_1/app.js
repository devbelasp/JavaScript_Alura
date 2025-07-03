/* 1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.*/
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'

/* 2. Crie uma função que exiba no console a mensagem "O botão foi clicado" sempre que o botão Console for pressionado.*/
function verificarClique() {
    console.log('O botão foi clicado!');
}

/* 3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.*/
function exibirAlerta() {
    alert('Eu amo JS 💖');
}

/*4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.*/
function responderPrompt() {
    let cidade = prompt('Digite uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

/*5. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.*/
function somar() {
    let n1 = parseInt(prompt('Digite um número'));
    let n2 = parseInt(prompt('Agora outro número'));
    resultado = n1 + n2;
    alert(`O resultado da soma de ${n1} e ${n2} é ${resultado}`);
}