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

// Preenche o formuláro e não sai da página
revelarAoRolar();

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 


  const formData = new FormData(form);

  
  fetch(form.action, {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert("✅ Obrigado! Em breve entraremos em contato.");
      form.reset();
    } else {
      alert("❌ Ocorreu um erro, tente novamente.");
    }
  })
  .catch(() => {
    alert("❌ Não foi possível enviar. Verifique sua conexão.");
  });
});

