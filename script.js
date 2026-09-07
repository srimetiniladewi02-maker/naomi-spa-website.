const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav a");
const scrollTop = document.getElementById("scrollTop");

// MENU MOBILE
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// SCROLL TO TOP
window.addEventListener("scroll", () => {
  scrollTop.style.display = window.scrollY > 500 ? "block" : "none";
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();


// ==========================================
// LANGUAGE SWITCHER
// ==========================================

const translations = {
  en: {
    navHome: "Home",
    navTreatments: "Treatments",
    navPrice: "Price List",
    navAbout: "About",
    navBook: "Book Now",

    heroEyebrow: "PREMIUM HOME SPA EXPERIENCE",
    heroTitle1: "Relax Your Body.",
    heroTitle2: "Refresh Your Mind.",
    heroText:
      "Enjoy a comfortable, peaceful, and professional spa experience directly at your place.",
    exploreTreatments: "Explore Treatments",
    bookAppointment: "Book Appointment",
    heroCard: "Luxury Wellness • Home Service",

    welcome: "WELCOME TO NAOMI SPA",
    introTitle1: "A Moment of",
    introTitle2: "Pure Relaxation",
    introText:
      "We bring you spa treatments with a warm and calming atmosphere. Choose your favorite treatment and enjoy a relaxing experience designed to help your body feel comfortable and refreshed.",

    stat1Title: "Professional",
    stat1Text: "Therapist Service",
    stat2Title: "Home Service",
    stat2Text: "Comfort at Your Place",
    stat3Title: "Flexible",
    stat3Text: "Booking & Extra Time",

    treatmentEyebrow: "OUR SIGNATURE TREATMENTS",
    treatmentTitle1: "Choose Your",
    treatmentTitle2: "Wellness Ritual",

    relaxationTitle: "Relaxation Massage",
    relaxationText:
      "A relaxing touch to help your body feel calmer and more comfortable.",

    painTitle: "Pain Relief & Therapy",
    painText:
      "Massage treatment for areas of the body that need extra attention.",

    bodyTitle: "Body Contour & Detox",
    bodyText:
      "A refreshing body care treatment designed for a revitalizing experience.",

    footHeadTitle: "Foot & Head Therapy",
    footHeadText:
      "Relaxation for your feet and head in a warm and comfortable spa atmosphere.",

    viewPrice: "View Price →",

    comfortFirst: "YOUR COMFORT COMES FIRST",
    featureTitle1: "Bring the Spa Experience",
    featureTitle2: "to Your Home.",
    bookSession: "Book Your Session",

    priceEyebrow: "TREATMENT & REAL PRICE",
    priceTitle1: "Our",
    priceTitle2: "Price List",
    priceNote:
      "The prices below follow our current price list and may change if services or prices are updated.",
    tableTreatment: "Treatment",

    whyChoose: "WHY CHOOSE NAOMI SPA",
    aboutTitle1: "Relaxation Designed",
    aboutTitle2: "For You",
    aboutText:
      "Every session is designed so you can enjoy a comfortable moment of rest without having to leave your place.",
    aboutList1: "✓ Professional home service",
    aboutList2: "✓ Flexible treatment duration",
    aboutList3: "✓ Warm and relaxing spa experience",
    aboutList4: "✓ Easy booking via WhatsApp",

    readyRelax: "READY TO RELAX?",
    contactTitle1: "Book Your",
    contactTitle2: "Spa Session",
    contactText:
      "Click the WhatsApp button and we will help you choose your treatment.",
    whatsappBooking: "WhatsApp Booking",

    footerText: "Relax your body, refresh your mind.",
    rights: "All rights reserved."
  },


  id: {
    navHome: "Beranda",
    navTreatments: "Perawatan",
    navPrice: "Daftar Harga",
    navAbout: "Tentang Kami",
    navBook: "Pesan Sekarang",

    heroEyebrow: "PENGALAMAN SPA PREMIUM DI RUMAH",
    heroTitle1: "Rilekskan Tubuh Anda.",
    heroTitle2: "Segarkan Pikiran Anda.",
    heroText:
      "Nikmati pengalaman spa yang nyaman, tenang, dan profesional langsung di tempat Anda.",
    exploreTreatments: "Lihat Perawatan",
    bookAppointment: "Buat Janji",
    heroCard: "Wellness Mewah • Home Service",

    welcome: "SELAMAT DATANG DI NAOMI SPA",
    introTitle1: "Momen",
    introTitle2: "Relaksasi Murni",
    introText:
      "Kami menghadirkan perawatan spa dengan suasana hangat dan menenangkan. Pilih treatment favorit Anda dan nikmati pengalaman relaksasi yang dirancang untuk membantu tubuh terasa lebih nyaman dan segar.",

    stat1Title: "Profesional",
    stat1Text: "Layanan Terapis",
    stat2Title: "Home Service",
    stat2Text: "Nyaman di Tempat Anda",
    stat3Title: "Fleksibel",
    stat3Text: "Booking & Waktu Tambahan",

    treatmentEyebrow: "TREATMENT UNGGULAN KAMI",
    treatmentTitle1: "Pilih",
    treatmentTitle2: "Ritual Relaksasi Anda",

    relaxationTitle: "Pijat Relaksasi",
    relaxationText:
      "Sentuhan relaksasi untuk membantu tubuh terasa lebih tenang dan nyaman.",

    painTitle: "Pereda Nyeri & Terapi",
    painText:
      "Perawatan pijat untuk area tubuh yang membutuhkan perhatian lebih.",

    bodyTitle: "Kontur Tubuh & Detoks",
    bodyText:
      "Rangkaian perawatan tubuh yang menyegarkan untuk pengalaman yang lebih revitalisasi.",

    footHeadTitle: "Terapi Kaki & Kepala",
    footHeadText:
      "Relaksasi untuk kaki dan kepala dalam suasana spa yang hangat dan nyaman.",

    viewPrice: "Lihat Harga →",

    comfortFirst: "KENYAMANAN ANDA ADALAH PRIORITAS",
    featureTitle1: "Hadirkan Pengalaman Spa",
    featureTitle2: "ke Rumah Anda.",
    bookSession: "Pesan Sesi Anda",

    priceEyebrow: "TREATMENT & HARGA",
    priceTitle1: "Daftar",
    priceTitle2: "Harga",
    priceNote:
      "Harga di bawah mengikuti daftar harga saat ini dan dapat berubah apabila terdapat perubahan layanan atau harga.",
    tableTreatment: "Treatment",

    whyChoose: "MENGAPA MEMILIH NAOMI SPA",
    aboutTitle1: "Relaksasi yang Dirancang",
    aboutTitle2: "Untuk Anda",
    aboutText:
      "Setiap sesi dirancang agar Anda dapat menikmati waktu istirahat yang nyaman tanpa perlu meninggalkan tempat Anda.",
    aboutList1: "✓ Home service profesional",
    aboutList2: "✓ Durasi treatment fleksibel",
    aboutList3: "✓ Pengalaman spa yang hangat dan menenangkan",
    aboutList4: "✓ Booking mudah melalui WhatsApp",

    readyRelax: "SIAP UNTUK RELAKS?",
    contactTitle1: "Pesan",
    contactTitle2: "Sesi Spa Anda",
    contactText:
      "Klik tombol WhatsApp dan kami akan membantu Anda memilih treatment.",
    whatsappBooking: "Booking via WhatsApp",

    footerText: "Rilekskan tubuh Anda, segarkan pikiran Anda.",
    rights: "Seluruh hak cipta dilindungi."
  }
};


// ==========================================
// CHANGE LANGUAGE FUNCTION
// ==========================================

function changeLanguage(language) {

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }

  });


  // CHANGE ACTIVE BUTTON
  document.querySelectorAll(".language-btn").forEach(button => {

    button.classList.remove("active");

    if (button.dataset.lang === language) {
      button.classList.add("active");
    }

  });


  // CHANGE HTML LANGUAGE
  document.documentElement.lang = language;


  // SAVE LANGUAGE
  localStorage.setItem("naomiSpaLanguage", language);
}


// ==========================================
// LANGUAGE BUTTON CLICK
// ==========================================

document.querySelectorAll(".language-btn").forEach(button => {

  button.addEventListener("click", () => {

    changeLanguage(button.dataset.lang);

  });

});


// ==========================================
// LOAD SAVED LANGUAGE
// ==========================================

const savedLanguage =
  localStorage.getItem("naomiSpaLanguage") || "en";

changeLanguage(savedLanguage);
