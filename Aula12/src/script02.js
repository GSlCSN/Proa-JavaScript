// Objetos

// Criando objetos com contrutores

function Carro(marca, modelo, ano, cor, acidente) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.acidente = acidente;
}

const carroBom = new Carro("Chevrolet", "Onix", 2013, "azul", "batida");
const carroRuim = new Carro("Volvo", "Lifan", 2014, "preto", "cambio");

console.log(carroBom);
console.log(carroRuim);

carroBom.quilometragem = 80000;
carroRuim.aroRoda = 18;

console.log("");

console.log(carroBom);
console.log(carroRuim);

const carroLaiza = new Carro("Honda", "Civic", 2002, "Vermelha", "Burrice");

console.log(carroLaiza);