function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");
  const hamburger = document.getElementById("hamburgerBtn");

  const isOpen = menu.classList.toggle("show");
  overlay.classList.toggle("show");

  hamburger.textContent = isOpen ? "✕" : "☰";
}


/* Lukk når man trykker på en lenke */
document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  if (e.target.closest("#mobileMenu a")) {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  }
});

/* ESC for å lukke */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("mobileMenu").classList.remove("show");
    document.getElementById("menuOverlay").classList.remove("show");
  }
});



// Bare for å sjekke at JS faktisk er koblet til:
console.log("JS er lastet og klar!");




// Håndter skjema-innsending
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subjectInput = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = subjectInput || "Henvendelse fra Råde BMX nettsiden";

    const bodyLines = [
      `Navn: ${name}`,
      `E-post: ${email}`,
      "",
      "Melding:",
      message
    ];

    const mailtoLink = `mailto:hanna_s91@hotmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoLink;
  });
}

// Kjør når siden er lastet
document.addEventListener("DOMContentLoaded", () => {
  setupContactForm();
});

