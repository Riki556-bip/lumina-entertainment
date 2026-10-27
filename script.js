/*
  LUMINA ENTERTAINMENT — CONFIGURATION
  1. Remplace le numéro ci-dessous par le numéro WhatsApp de l'agence.
  2. Format international, chiffres uniquement (pas de +, espace ou tiret).
  Exemple fictif pour la France : 33612345678
  Ne publie pas de numéro personnel sans autorisation.
*/
const LUMINA_WHATSAPP_NUMBER = "TONNUMERO";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  if (LUMINA_WHATSAPP_NUMBER && LUMINA_WHATSAPP_NUMBER !== "TONNUMERO") {
    const message = encodeURIComponent("Bonjour Lumina Entertainment ! Je vous contacte depuis votre site.");
    link.href = `https://wa.me/${LUMINA_WHATSAPP_NUMBER}?text=${message}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "https://www.whatsapp.com/";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Le contact WhatsApp de l'agence n'est pas encore configuré. Ajoute le numéro dans script.js.");
    });
  }
});

document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}
