// Objetos

// Exemplo de Objeto Simples
const carro = {
    marca: "Mitsubishi",
    modelo: "Lancer",
    ano: 2011,
    acelerar: function () {
        return `${this.marca} ${this.modelo} Explodiu boomm...`
    }
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.acelerar())

const pessoa = {
    nome: "Claudio",
    idade: 19,
    altura: 1.83,
    registro: "99999999977",
    empregado: true,
    apresentar: function () {

        let alturadecimal = this.altura;

        let infoEmpregado = (this.empregado === true) ? "Sim" : "Não";

        return `
        Meu nome é: ${this.nome}
        Minha idade é: ${this.idade}
        Minha altura é: ${alturadecimal.toFixed(2)}
        E meu número de registro é: ${this.registro}
        Eu trabalho? ${infoEmpregado}`
    }
}

console.log(pessoa.apresentar())

document.querySelector("#ex1").innerHTML = "Claudio"
