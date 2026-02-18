(function () {
  "use strict";


const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  {
    root: null,
    threshold: 0.18,
  }
);

revealEls.forEach((el) => io.observe(el));

})();
