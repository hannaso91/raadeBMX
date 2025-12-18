// Denne funksjonen kalles når du klikker på ☰ i HTML-en
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

// Bare for å sjekke at JS faktisk er koblet til:
console.log("JS er lastet og klar!");
