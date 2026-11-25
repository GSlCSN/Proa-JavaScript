// Eventos

//Eventos de mouse com JavaScript

// Evento de mouse com Mouseover e Mouseuot

const paragrafo = document.querySelector("#ex1-p");

paragrafo.addEventListener("mouseover", () => {
    paragrafo.innerHTML = "O mouse esta sobre o elemento";
    paragrafo.classList.add("estilo-texto");
    paragrafo.classList.remove("estilo-borda");
})

paragrafo.addEventListener("mouseout", () => {
    paragrafo.innerHTML = "O mouse esta fora do elemento";
    paragrafo.classList.add("estilo-borda");
    paragrafo.classList.remove("estilo-texto");
})

// Mostrando a posição do mouse com o evento mousemove

const paragrafoX = document.querySelector("#paragrafoX");

const paragrafoY = document.querySelector("#paragrafoY");

document.addEventListener("mousemove", (evento) => {
    paragrafoX.innerHTML = `X: ${evento.clientX}`;
    paragrafoY.innerHTML = `Y: ${evento.clientY}`;
})