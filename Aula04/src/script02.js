//Operadores de Comparação

//Operador Comparador de Igualdade

let a = 5;

let comparadorIgualdade1 = (a == 5);
let comparadorIgualdade2 = (a == 8);
let comparadorIgualdade3 = (a == "5");

console.log(comparadorIgualdade1);
console.log(comparadorIgualdade2);
console.log(comparadorIgualdade3);

console.log("");

//Operador Comparador de Igualdade ao tipo
let comparadorIgualdadetipo1 = (a === 5);
let comparadorIgualdadetipo2 = (a === 8);
let comparadorIgualdadetipo3 = (a === "5");

console.log(comparadorIgualdadetipo1);
console.log(comparadorIgualdadetipo2);
console.log(comparadorIgualdadetipo3);

console.log("");

//Operador Comparador de Igualdade e tipo
let comparadordiferenca1 = (a != 5);
let comparadordiferenca2 = (a != 8);
let comparadordiferenca3 = (a != "5");

console.log(comparadordiferenca1);
console.log(comparadordiferenca2);
console.log(comparadordiferenca3);

console.log("");

//Operador Comparador de Diferença entre tipo e valor

let comparadorDiferencaTipoValor1 = (a !== 5);
let comparadorDiferencaTipoValor2 = (a !== 8);
let comparadorDiferencaTipoValor3 = (a !== "5");

console.log(comparadorDiferencaTipoValor1);
console.log(comparadorDiferencaTipoValor2);
console.log(comparadorDiferencaTipoValor3);

console.log("");

//Operador Comparador maior que

let comparadormaiorque1 = (a > 5);
let comparadormaiorque2 = (a > 8);
let comparadormaiorque3 = (a > 3);

console.log(comparadormaiorque1);
console.log(comparadormaiorque2);
console.log(comparadormaiorque3);

console.log("");

//Operador Comparador menor que

let comparadormenorque1 = (a < 5);
let comparadormenorque2 = (a < 8);
let comparadormenorque3 = (a < 3);

console.log(comparadormenorque1);
console.log(comparadormenorque2);
console.log(comparadormenorque3);

console.log("");

//Operador Comparador maior ou igual que

let comparadormaioriqual1 = (a >= 5);
let comparadormaioriqual2 = (a >= 8);
let comparadormaioriqual3 = (a >= 3);

console.log(comparadormaioriqual1);
console.log(comparadormaioriqual2);
console.log(comparadormaioriqual3);

console.log("");

//Operador Comparador menor ou igual que

let comparadormenoriqual1 = (a <= 5);
let comparadormenoriqual2 = (a <= 8);
let comparadormenoriqual3 = (a <= 3);

console.log(comparadormenoriqual1);
console.log(comparadormenoriqual2);
console.log(comparadormenoriqual3);

console.log("");

//Operador Comparador em Estrutura Condicional

let idade = 13;
let mensagem;

if (idade < 18) {
    mensagem = "Você e menor de idade";
    console.log(mensagem);
} else {
    mensagem = "Você e maior de idade"
    console.log(mensagem);
}