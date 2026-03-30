const adminEmail = "thaislimaalves03@gmail.com";

// LOGIN SIMPLES
function login() {
  let email = prompt("Digite seu Gmail:");
  let user = { email: email };

  verificarAdmin(user);
}

// VERIFICA ADMIN
function verificarAdmin(user) {
  if (user.email === adminEmail) {
    document.getElementById("adminPanel").style.display = "block";
    alert("Você é ADMIN 😎");
  } else {
    alert("Bem-vindo!");
  }
}

// ADICIONAR FILME
function adicionarFilme() {
  let titulo = document.getElementById("titulo").value;
  let url = document.getElementById("url").value;

  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${titulo}</h3>
    <video src="${url}" controls width="300"></video>
  `;

  document.querySelector(".filmes").appendChild(card);
}

// MUDAR COR
function mudarCor() {
  let cor = document.getElementById("corSite").value;
  document.body.style.backgroundColor = cor;
}
