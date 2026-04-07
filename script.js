
    function comprar(bolo){

let numero = "5531995408175";
let mensagem = "Olá! Gostaria de pedir: " + bolo;

let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

window.open(url, "_blank");

}


function teste() {
    teste()
}

function irParaCardapio() {
    window.location.href = "cardapio.html";
}

function abrirModal(id) {
  document.getElementById(id).classList.add("ativo");
}

function fecharModal(id) {
  document.getElementById(id).classList.remove("ativo");
}

window.onclick = function(event) {
  let modais = document.querySelectorAll(".modal");

  modais.forEach(function(modal) {
    if (event.target === modal) {
      modal.classList.remove("ativo");
    }
  });
}