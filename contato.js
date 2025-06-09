document.addEventListener("DOMContentLoaded", () => {
  // Destacar página atual no menu
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  const form = document.getElementById("contatoForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Limpar mensagens de erro
    document.querySelectorAll(".erro").forEach(span => span.textContent = "");

    // Nome: não pode conter números
    const nome = document.getElementById("nome").value.trim();
    const erroNome = document.getElementById("erroNome");
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
      erroNome.textContent = "O nome deve conter apenas letras.";
      isValid = false;
    }

    // E-mail: formato válido
    const email = document.getElementById("email").value.trim();
    const erroEmail = document.getElementById("erroEmail");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      erroEmail.textContent = "Digite um e-mail válido.";
      isValid = false;
    }

    // Telefone: apenas números e deve conter DDD (mínimo 10 dígitos)
    const telefone = document.getElementById("telefone").value.trim();
    const erroTelefone = document.getElementById("erroTelefone");
    if (!/^\d{10,11}$/.test(telefone)) {
      erroTelefone.textContent = "Digite apenas números com DDD (ex: 11999999999).";
      isValid = false;
    }

    // Mensagem: não pode ultrapassar 1000 caracteres
    const mensagem = document.getElementById("mensagem").value.trim();
    const erroMensagem = document.getElementById("erroMensagem");
    if (mensagem.length === 0) {
      erroMensagem.textContent = "A mensagem não pode estar vazia.";
      isValid = false;
    } else if (mensagem.length > 1000) {
      erroMensagem.textContent = "A mensagem deve ter no máximo 1000 caracteres.";
      isValid = false;
    }

    // Se tudo estiver válido, simula envio
    if (isValid) {
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
    }
  });
});
