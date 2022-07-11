window.addEventListener("scroll", function () {
  var topheader = document.querySelector(".topheader");
  topheader.classList.toggle("active-bg", window.scrollY > 200);
});

// for the main Navbar
$(document).ready(function () {
  $("#sidebarCollapse, #closeMenu, #side-click-close, .nv_link").on(
    "click",
    function () {
      $(
        "#sidebarCollapse, #navbarNav, #closeMenu,  #side-click-close"
      ).toggleClass("active");
      $("#overlay_menu").toggleClass("bg-body");
      $("body").toggleClass("stop-scroll");
      $("a[aria-expanded=true]").attr("aria-expanded", "false");
    }
  );
});

// theme settings
$(document).ready(function () {
  $(".theme-settings").on("click", function () {
    $(
      "body, .theme-settings, .navbar, section, .mynav-link, footer, .swiper, .swiper-button-prev, .bar-parents"
    ).toggleClass("active-theme");
  });
});

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Scroll to top 
 window.addEventListener("scroll", function () {
      var scroll = document.querySelector(".scrollTop");
      scroll.classList.toggle("active", window.scrollY > 500);
  });

  function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }

$(".owl-carousel.owl_carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 8,
    },
  },
});

$(".owl-carousel.owl_carousel_2").owlCarousel({
  loop: false,
  margin: 30,
  stagePadding:20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

// Swiper Js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  margin: 30,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// AOS
AOS.init();
