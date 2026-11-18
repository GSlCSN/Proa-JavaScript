// Arrays

// Criando arrays

const frutas = ["Maça","Morango","Maracuja"];

console.log(frutas);
console.log("");

// Adicionando elementos num arrays vazio

const carros = [];

carros[0] = "Volkswagen";
carros[1] = "BMW";
carros[2] = "Volvo";

console.log(carros);
console.log("");

// Criando array com  construtor de array

const frutas2 = new Array("Uva", "Pera", "Melancia");

console.log(frutas2);
console.log("");

// Acessando elementos de array 
const carros2 = ["Mitsubshi", "Toyota", "Lamborghini"];

console.log(carros2);

let primeiroCarro =  carros2[0];

console.log(primeiroCarro);

// Alterando elemento array

const frutas3 = ["Caju", "Laranja", "Melancia"];

console.log(frutas3);

frutas3[0] = "Lixia";

console.log(frutas3);

// Convertendo Array em string

const motos = ["CB 500", "MT-07", "XJ6"];

console.log(motos);

let motoString = motos.toString();

console.log(motoString);

// Verificando tipo de dado em array

console.log(typeof motos);

console.log("");

// Objetos em array

const carro1 = {
    marca: "Toyota",
    modelo: "Corolla"
};

const carro2 = {
    marca: "Volkswagen",
    modelo: "Golf"
};

const carros3 = [carro1, carro2];

console.log(carros3);

console.log("");

// Propriedade length em array

const alunos = ["Marcella", "Isabelly", "Molina", "Antonio"];

console.log(alunos);

let comprimentoAlunos = alunos.length;

console.log(comprimentoAlunos);

console.log("");

// Acessando o ultimo elemento do array

let ultimoElementoAlunos = alunos.length - 1;

console.log(alunos[ultimoElementoAlunos]);  

console.log("");

// Utilizando laço de repetição para percorrer array

const cidades = ["Minas gerais", "Salvador", "Recife", "Maceió"];

let quantidadeCidades = cidades.length;

console.log(quantidadeCidades);

for (let acumuladora = 0; acumuladora <= quantidadeCidades; acumuladora++){
    console.log(cidades[acumuladora]);
}   

console.log("")

// Utilizando um metodo forEach() para Percorrer array

/* cidades.forEach(listarCidades);

function listarCidades (cidade) {
    console.log(cidade)
} */

cidades.forEach( (cidades) => {
    console.log(cidades);
} );

console.log("")

// Adcionando elementos no array com o metodo push()

const cores = ["Laranja", "Preto", "Branco"];

console.log(cores);

cores.push("Verde");

console.log(cores);

cores.push("Vermelho", "Azul");

console.log(cores);

console.log("");

// Adicionando elemento no array com a propriedade length

cores[cores.length] = "Rosa";

console.log(cores);

console.log("");

// Buracos indefinidos no array

cores[14] = "Roxo";

console.log(cores)
