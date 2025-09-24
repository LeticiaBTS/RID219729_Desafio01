// Elementos com animação
const elementos = document.querySelectorAll(".texto, .imagem");

function revelarAoRolar() {
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    
    if (posicao < alturaTela - 100) {
      el.classList.add("visivel");
    }
  });
}


window.addEventListener("scroll", revelarAoRolar);
