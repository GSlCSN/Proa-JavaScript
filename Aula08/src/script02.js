// Funções

// Função de multiplicação
function multiplicacao(a, b) {
    return a * b
}

console.log(multiplicacao(10, 5));

console.log(multiplicacao(2, 20));

console.log(multiplicacao(10, 10));

console.log(multiplicacao(7, 7));

console.log("")

// Função de soma
function soma(a, b) {
    return a + b
}

console.log(soma(10, 5));

console.log(soma(2, 20));

console.log(soma(10, 10));

console.log(soma(7, 7));

console.log("")

// Função de subtração
function subtracao(a, b) {
    return a + b
}

console.log(subtracao(10, 5));

console.log(subtracao(2, 20));

console.log(subtracao(10, 10));

console.log(subtracao(7, 7));

console.log("")

// Função de divisão
function divisao(a, b) {
    return a / b
}

console.log(divisao(10, 5));

console.log(divisao(2, 20));

console.log(divisao(10, 10));

console.log(divisao(7, 7));

console.log("")

//Calculadora

do {
    let num1 = parseInt(prompt("Digite o primeiro número: "))
    let operador = prompt("Digite o operador + - * / :")
    let num2 = parseInt(prompt("Digite o segundo número: "))
    let resultado = null;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            alert(`Resultado: ${num1} + ${num2} = ${resultado}`);
            break;
        case "-":
            resultado = num1 - num2;
            alert(`Resultado: ${num1} - ${num2} = ${resultado}`);
            break;
        case "*":
            resultado = num1 * num2;
            alert(`Resultado: ${num1} * ${num2} = ${resultado}`);
            break;
        case "/":
            resultado = num1 / num2;
            alert(`Resultado: ${num1} / ${num2} = ${resultado}`);
            break;
    }

    continuar = prompt("Quer fazer essa conta ou outra? s/n")
} while (continuar == "s");