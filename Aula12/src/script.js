const pessoa = {
    nome: "Claudio",
    idade: 19,
    altura: 1.75
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa["idade"]);

console.log("");

// Alterando,adicionando e excluindo propriedades

pessoa.idade = 20;
console.log(pessoa);
console.log(pessoa.idade);

console.log("");

pessoa.ultimoNome = "Silva"
console.log(pessoa);
console.log(pessoa.ultimoNome);

console.log("");

delete pessoa.altura;
console.log(pessoa);

console.log("");

// Verificando existencia de propriedade em um objeto

let testeObjeto = ("idade" in pessoa);

console.log(testeObjeto)

console.log("");

// Objetos aninhados

const pessoa2 = {
    nome: "Bruce",
    sobreNome: "Wayne",
    profissao: "Super-Heroi",
    equipamentos: {
        capa: "tecido",
        arma: "Gancho"
    }
};

console.log(pessoa2);
console.log(pessoa2.equipamentos);

console.log("");

// Metodos de Objetos
const carro = {
    marca: "Bugatti",
    modelo: "Bolide",
    ano: 2021,
    acelerar: function () {
        return `O ${this.marca} ${this.modelo} acelerou`
    }
};

console.log(carro.acelerar());

console.log("");

// Adicionando Método em objeto

carro.capotar = function () {
    return `O ${this.marca} ${this.modelo} capotou`
};

console.log(carro.capotar());
console.log(carro)

;