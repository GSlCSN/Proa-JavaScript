// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.


let anos = Number(prompt("Quantos anos?"));
let meses = Number(prompt("Quantos meses?"));
let dias = Number(prompt("Quantos dias?"));

let totalDias = anos * 365 + meses * 30 + dias;

alert("Sua idade em dias é: " + totalDias);