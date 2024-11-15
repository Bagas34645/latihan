// Mengatur menu toggle
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// Menangani pengiriman formulir
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah reload halaman
  alert("Berhasil dikirim!"); // Menampilkan alert
  contactForm.reset(); // Reset form
});
