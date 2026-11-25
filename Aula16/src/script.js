// Eventos

// Evento de click com addEventListener()

const paragrafo = document.querySelector("#ex1-p");
const botao = document.querySelector("#ex1-btn");

botao.addEventListener("click", () => {
    paragrafo.classList.toggle("estilo");
    paragrafo.innerHTML = "Somente a dor coletiva gera união";
})

/* botao.addEventListener("click",adicionarEstilo );

function adicionarEstilo () {
    paragrafo.classList.toggle("estiilo");
    paragrafo.innerHTML = "Somente a dor coletiva gera união"
} */
