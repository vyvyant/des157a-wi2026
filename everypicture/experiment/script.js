(function () {
  "use strict";

const card = document.querySelector(".card");
const img = document.querySelector(".card img");
const overlay = document.querySelector(".overlay");

// when mouse enters
card.addEventListener("mouseenter", function () {
  img.style.opacity = "0.25";
  overlay.style.opacity = "1";
});

// when mouse leaves
card.addEventListener("mouseleave", function () {
  img.style.opacity = "1";
  overlay.style.opacity = "0";
});

// focus  (keyboard / tap)
card.addEventListener("focus", function () {
  img.style.opacity = "0.25";
  overlay.style.opacity = "1";
});

card.addEventListener("blur", function () {
  img.style.opacity = "1";
  overlay.style.opacity = "0";
});


})();
