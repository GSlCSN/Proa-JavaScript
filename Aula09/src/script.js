// Funções

function exibirCarro() {
    let novoCarro = "Porsche"
    console.log(novoCarro)
}

exibirCarro()

console.log("")

// Função com 4 Parametros

function saudacao(nome, sobrenome, idade, altura) {
    let mensagem = `Ola ${nome} ${sobrenome} você tem ${idade} anos de idade e ${altura} de altura`;
    return mensagem;
}

console.log(saudacao("Claudio", "Silva", 19, 1.83))


console.log("")

// Função com 1 parametro

function paraCelsius(grausFahrenheint) {
    let grausCelcius = (5 / 9) * (grausFahrenheint - 32);
    
    let mensagemRetorno = `${grausFahrenheint}° fahrenheint e a mesma coisa que celcius ${grausCelcius}°C `
    
    return mensagemRetorno;
}

let grausFahrenheint = 212;

//let grausFahrenheint = parseFloat(prompt("Informe um valor de temperatura em Fahrenheint para converter em Celcius: "))

const elementoh3 = document.querySelector(".ex1");

elementoh3.innerHTML = paraCelsius(grausFahrenheint)

console.log("");

// Valor padrao para function
function soma(a = 1,b = 2) {
    return a + b
}

console.log(soma(10, 4));
console.log(soma(4));
console.log(soma());

console.log("");

// Utilizando valor retornando as Funções em uma expressão matematica

function multiplicar(a, b) {
    return a* b
}

let resultadoExpressao = multiplicar(5,10) / 2;

console.log(resultadoExpressao);

console.log("");

// Utilizando dois retornos em uma função

function subtracao(a, b) {

    return "Somente a dor coletiva gera união."

    return a - b
}

let resultado = subtracao(10,5);
console.log(resultado);

console.log("");

// 

function verificarIdade(idade) {
    if (idade < 18) {
        return "Você é menor de idade"
    } else {
        return "Você é maior de idade"
    }
}

let resultado2 = verificarIdade(19);

console.log(resultado2)
