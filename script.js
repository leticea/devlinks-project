function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "Foto de Letícia com cabelo curto na altura do queixo, usando óculos escuros e sorrindo"
    );
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Letícia com cabelo curto na altura do queixo, usando no rosto um efeito da maquiagem do Coringa e vestindo uma blusa azul da seleção brasileira"
    );
  }
}
