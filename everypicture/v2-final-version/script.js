(function () {
  "use strict";

  const container = document.querySelector("#container");
  const hotSpots = document.querySelectorAll("#container .hotspot");
  const theImg = document.querySelector("#container img");
  const infoTitle = document.querySelector(".info-title");
  const infoBody = document.querySelector(".info-body");
  const infoNote = document.querySelector(".info-note");



  function setPanel(title, body) {
    infoTitle.textContent = title;
    infoBody.textContent = body;
    infoNote.textContent = "Move to another area to explore more.";
  }

  function resetPanel() {
    infoTitle.textContent = "Hover a hotspot";
    infoBody.textContent =
      "Move your mouse over different parts of the collage to see why each moment helps me feel calmer.";
    infoNote.textContent = "";
  }

  function applyZoom(spotId) {
    theImg.className = "start";

    switch (spotId) {
      case "candle":
        theImg.classList.add("zoom-candle");
        setPanel(
          "Ambient Lighting",
          "I always love to sit near a window, or have warm lighting. It helps me slow down and relax."
        );
        break;

      case "flowers":
        theImg.classList.add("zoom-flowers");
        setPanel(
          "Flowers",
          "I always pause to admire flowers when I pass by them. It’s a reminder to be present and notice the small, beautiful things in everyday life."
        );
        break;

      case "headphones":
        theImg.classList.add("zoom-headphones");
        setPanel(
          "Headphones + music",
          "Watching cooking vlogs helps me relax and think about something non-academic. Music also helps me decompress between classes and during walks."
        );
        break;

      case "matcha":
        theImg.classList.add("zoom-matcha");
        setPanel(
          "A sweet drink",
          "Treating myself to a drink (or studying at a café) gives me a change of pace. I usually get boba or a latte on weekends when I’m out with people I care about. A drink is like a mini reset. The routine + change of pace makes me feel lighter."
        );
        break;

      case "planner":
        theImg.classList.add("zoom-planner");
        setPanel(
          "Agenda / planner",
          "Having a physical or digital agenda helps me stay organized, remember tasks, and focus on what matters. Structure makes everything feel less overwhelming."
        );
        break;

      default:
        theImg.className = "start";
        resetPanel();
    }
  }

  function handleOver(event) {
    const spotId = event.target.id;
    applyZoom(spotId);
  }

  function handleOut() {
    theImg.className = "start";
    resetPanel();
  }

  hotSpots.forEach(function (eachSpot) {
    eachSpot.addEventListener("mouseover", handleOver);
    eachSpot.addEventListener("mouseout", handleOut);
  });

  
  resetPanel();
})();