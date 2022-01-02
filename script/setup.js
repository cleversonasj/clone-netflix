$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function informacao() {
  var btInformacao = document.getElementById("informacao");
  var informacao = document.getElementById("informacao_1");
  informacao.innerHTML = `<p class="info"><b>Áudios:</b> Espanhol, Português e Inglês. <br> <b>País de Origem:</b> Espanha.</p>`;
  informacao.style.display == "block"
    ? (informacao.style.display = "none")
    : (informacao.style.display = "block");
}
