// Metodo array

const frutas = ["Pera", "Melancia", "Melão", "Limão", "Pera"];

// Metodo at()

let frutasAt = frutas.at(2);

console.log(frutasAt);

console.log("");

// Metodo join()

let frutasJoin = frutas.join(" - ");

console.log(frutasJoin);

console.log("");

// Metodo pop()

console.log(frutas);

frutas.pop();

console.log(frutas);

console.log("");

// Metodo push()

console.log(frutas);

frutas.push("Pera");

console.log(frutas);

console.log("");

// Metodo shift()

console.log(frutas);

frutas.shift();

console.log(frutas);

console.log("");

// Metodo unshift()

console.log(frutas);

frutas.unshift("Pera");

console.log(frutas);

console.log("");

// Alterando elemento de array

frutas[0] = "Tangerina";

console.log(frutas);

console.log("");

// Metodo isArray()

let frutasArray = Array.isArray(frutas);

console.log(frutasArray);

console.log("")

// Metodo concat()

const frutas2 = ["Goiaba", "Amora", "Morango"];

const frutasContatenadas = frutas.concat(frutas2);

console.log(frutasContatenadas);

console.log("");

// Metodo copyWithin()

const cores = ["Vermelho", "Amarelo", "Laranja", "Azul"];

console.log(cores);

cores.copyWithin(2, 0);

console.log(cores)

// Matriz no JavaScript

/* const matriz = [[1,2,3], [4,5,6]]; */

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
];

let itemMatriz = matriz[0][1];

console.log(itemMatriz);

console.log("");

// Metodo flat()

const matrizPlana = matriz.flat();

console.log(matriz);
console.log(matrizPlana);

console.log("");

// Metodo flatMap()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosFlatMap = numeros.flatMap( (numeros) => {
    return [numeros, numeros * 10];
});

console.log(numerosFlatMap);

console.log("");

// Metodo splice()

const carros = ["BMW", "Civic", "Lamborghini"];

console.log(carros);

carros.splice(1, 0, "Corsa", "Golf");

console.log(carros);

carros.splice(4, 1);

console.log(carros);

console.log("");

// Metodo toSpliced()

const meses = ["Janeiro", "Fevereiro", "Março", "Abril"];

console.log(meses);

const mesesToSpliced = meses.toSpliced(0, 2);

console.log(mesesToSpliced);

console.log("")

// Metodo slice()

const alunos = ["Laizabrr", "Molina", "Claudia", "Claudio","Emilly"];

console.log(alunos)

const alunosSlice = alunos.slice(2);

console.log(alunosSlice);

const alunosSlice2 = alunos.slice(0, 2);

console.log(alunosSlice2);

console.log("")
