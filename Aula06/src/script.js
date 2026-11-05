// Estruturas Condicionais

//If

const hora = new Date().getHours();
let mensagem;

if (hora > 18) {
    mensagem = "Boa noite";
}

console.log(mensagem);
console.log("")

// Condição aninhada

// let idade = 18;
// let pais = "Brasil";
// let resultado = "Você não pode dirigir";

// if (pais == "Brasil") {
//     if (idade >= 18) {
//         resultado = "Você pode dirigir";
//     }
// }


let idade = 18;
let pais = "Brasil";
let resultado = "Você não pode dirigir";

if (pais == "Brasil" && idade >= 18) {
    resultado = "Você pode dirigir";
}

console.log(resultado)
console.log("")

// If Else

let mensagem2;

if (hora < 18) {
mensagem2 = "Bom dia!";
} else if (hora < 18 && hora >= 12) {
    mensagem2 = "Boa tarde!";
} else {
    mensagem2 = "Boa noite!";
}

console.log(mensagem2)
console.log("");

//If Ternarío

let idade2 = 28;    
let retorno = (idade2 >= 18) ? "E maior de idade" : "E menor de idade";

console.log(retorno);
console.log("")

//Swith

alert("Informe um dia da semana")

const dia = parseInt(prompt("Escolha o dia da semana: \n \n 0 - Domingo \n 1 - Segunda-feira \n 2 - Terça-feira \n 3 - Quarta-feira \n 4 - Quinta-feira \n 5 - Sexta-feira \n 6 - Sábado "))
let diasemana

switch (dia) {

    case 0:
        diasemana = "Domingo";
        alert("O dia da semana escolhido foi:" + diasemana)
        break;
    case 1:
        diasemana = "Segunda-feira";
        alert("O dia da semana escolhido foi:" + diasemana)
        break;
    case 2:
        diasemana = "Terça-feira";
        alert("O dia da semana escolhido foi:" + diasemana)
        break;
    case 3:
        diasemana = "Quarta-feira";
        alert("O dia da semana escolhido foi:" + diasemana)
        break;
    case 4:
        diasemana = "Quinta-feira";
        alert("O dia da semana escolhido foi:" + diasemana)
        break;
    case 5:
        diasemana = "Sexta-feira";
        alert("O dia da semana escolhido foi:" + diasemana)
        break;
    case 6:
        diasemana = "Sábado";
        alert("O dia da semana escolhido foi:" + diasemana)
        break;
    default:
        let aviso = "Valor Incorreto. Tente novamente.";
        alert(aviso)
        location.reload();
        break;
}

