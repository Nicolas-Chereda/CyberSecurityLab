//Botão Home
function eventoHome(){
    window.location.href = "sobre.html";
}

//Âncora
window.onscroll = function() {
    mostrarBotao();
  };
  
  function mostrarBotao() {
    const ancora = document.getElementById("ancora");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      ancora.style.display = "block";
    } else {
      ancora.style.display = "none";
    }
  }
  
  // Função para rolar ao topo
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


