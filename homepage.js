function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");
  const hamburger = document.getElementById("hamburgerBtn");

  const isOpen = menu.classList.toggle("show");
  overlay.classList.toggle("show");

  hamburger.textContent = isOpen ? "✕" : "☰";
}


document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  if (e.target.closest("#mobileMenu a")) {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("mobileMenu").classList.remove("show");
    document.getElementById("menuOverlay").classList.remove("show");
  }
});




console.log("JS er lastet og klar!");





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


document.addEventListener("DOMContentLoaded", () => {
  setupContactForm();
});

function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
