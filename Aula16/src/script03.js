// Eventos

// Eventos de Teclado 

// Evento keydown
const input = document.querySelector("#ex1-inpt");
const paragrafo = document.querySelector("#ex1-p");

let texto = "";

input.addEventListener("keydown", (evento) => {
    if(evento.key.lenght === 1) {
        texto += evento.key
    } else if (evento.key === "Backspace") {
        texto = texto.slice(0, -1)
    }

    paragrafo.innerHTML = `O conteudo digitado foi: ${texto}`
})

/* 
input.addEventListener("keydown", (evento)=> {
paragrafo.innerHTML = `A tecla pressionada foi: ${evento.key}`;
}); */