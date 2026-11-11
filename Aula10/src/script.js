//funcoes 

//expresao de funcao 
const multiplicar = function (a, b){
    return a * b;
};

console.log(multiplicar);

//funcao execultando outra funcao
function execultarFuncao(funcao) {
    return funcao();
}

const exebirSaudacao = function (){
    return "ola, SP16";
};

console.log(execultarFuncao(exebirSaudacao));

//Arrow Functions

const multiplicar2 = (a,b) => a * b;

console.log(multiplicar2(5,6));

console.log("");

//Arrow Functions com um parametro

const potencia = a => a * a;

console.log(potencia(5));

console.log("");

//Chamada de Arrow Function

const dizerOla = () => {return "Olá";};

console.log(dizerOla())
