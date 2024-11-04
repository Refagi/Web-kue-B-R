function navbar() {
  // Ambil semua link dalam navbar
  const links = document.querySelectorAll(".item-nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah aksi default

      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      const targetId = this.getAttribute("href"); // Ambil ID target dari atribut href
      const targetElement = document.querySelector(targetId); // Temukan elemen target

      if (targetElement) {
        // Scroll ke elemen target dengan smooth
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
navbar();

function textHome() {
  new TypeIt(".item-text-first", {
    speed: 50,
    waitUntilVisible: true,
    afterComplete: () => {
      setTimeout(() => {
        new TypeIt(".item-text-second", {
          speed: 50,
          waitUntilVisible: false,
        })
          .type('"Dibuat dengan cinta, dinikmati dengan senyuman."')
          .pause(500) // Beri jeda sejenak setelah kalimat pertama
          .break() // Tambah baris baru
          .type("Buka setiap hari pukul 8 pagi - 9 malam") // Tulis kalimat kedua
          .move(0)
          .go();
      });
    },
  })
    .move(-1)
    .go();
}
textHome();

function footer() {
  // Ambil semua link dalam navbar
  const links = document.querySelectorAll(".item-kontak ul li a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah aksi default

      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      const targetId = this.getAttribute("href"); // Ambil ID target dari atribut href
      const targetElement = document.querySelector(targetId); // Temukan elemen target

      if (targetElement) {
        // Scroll ke elemen target dengan smooth
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
footer();



function responNav() {
  // deklarasi tombol dan menu
  const tombol = document.querySelectorAll(".tombol");
  const menu = document.querySelector("nav .item-nav ul");

  // membuat event click
  // pada saat tombol di click, tambahkan class aktif pada class menu
  // saat diklik lagi, maka class aktif dihilangkan dari class menu (toggle)
    // membuat event click untuk setiap tombol
    tombol.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.preventDefault(); // Mencegah aksi default
        menu.classList.toggle("aktif");
      });
    });
}
responNav();