(function () {
  "use strict";

  const form = document.querySelector("#madlibs-form");
  const story = document.querySelector(".story-text");
  story.classList.remove("show"); // makes sure it is hidden when the page loads

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //  collect all inputs
    const data = {
      name1: document.querySelector("#name1").value.trim(),
      name2: document.querySelector("#name2").value.trim(),
      pluralFood: document.querySelector("#plural-food").value.trim(),
      verb: document.querySelector("#verb").value.trim(),
      adjective1: document.querySelector("#adjective1").value.trim(),
      adjective2: document.querySelector("#adjective2").value.trim(),
      adverb: document.querySelector("#adverb").value.trim(),
      ingredient1: document.querySelector("#ingredient1").value.trim(),
      ingredient2: document.querySelector("#ingredient2").value.trim(),
      noun: document.querySelector("#noun").value.trim(),
      verbPast1: document.querySelector("#verb-past-tense").value.trim(),
      exclamation: document.querySelector("#exclamation").value.trim(),
      adjective3: document.querySelector("#adjective3").value.trim(),
      adjective4: document.querySelector("#adjective4").value.trim(),
      verbIng: document.querySelector("#verb").value.trim() + "ing",
      judgeAdjective: document.querySelector("#adjective5").value.trim(),
      judgeName: document.querySelector("#judgeName").value.trim(),
      adverb2: document.querySelector("#adverb2").value.trim(),
      adjective5: document.querySelector("#adjective5").value.trim(),
      adjective6: document.querySelector("#adjective2").value.trim(), 
      verbPast2: document.querySelector("#verb2").value.trim(),
      winner: document.querySelector("#Name1orName2").value.trim(),
      pluralNoun: document.querySelector("#plural-noun").value.trim(),
      finalAdjective: document.querySelector("#adjective3").value.trim(), 
    };

    for (const key in data) {
      if (!data[key]) {
        alert("Please fill out all fields!");
        return;
      }
    }

 
    function setText(id, value) {
      const el = document.querySelector(id);
      if (el) el.textContent = value;
    }


    setText("#name1Out", data.name1);
    setText("#name1Out2", data.name1);
    setText("#name1Out3", data.name1);
    setText("#name1Out4", data.name1);

    setText("#name2Out", data.name2);
    setText("#name2Out2", data.name2);
    setText("#name2Out3", data.name2);
    setText("#name2Out4", data.name2);

    setText("#pluralFoodOut", data.pluralFood);
    setText("#pluralFoodOut2", data.pluralFood);

    setText("#verbOut", data.verb);
    setText("#verbIngOut", data.verbIng);

    setText("#adjective1Out", data.adjective1);
    setText("#adjective2Out", data.adjective2);
    setText("#adjective3Out", data.adjective3);
    setText("#adjective4Out", data.adjective4);
    setText("#adjective5Out", data.adjective5);
    setText("#adjective6Out", data.adjective6);
    setText("#finalAdjectiveOut", data.finalAdjective);

    setText("#adverbOut", data.adverb);
    setText("#adverb2Out", data.adverb2);

    setText("#ingredient1Out", data.ingredient1);
    setText("#ingredient2Out", data.ingredient2);
    setText("#nounOut", data.noun);

    setText("#verbPast1Out", data.verbPast1);
    setText("#verbPast2Out", data.verbPast2);

    setText("#exclamationOut", data.exclamation);

    setText("#judgeAdjectiveOut", data.judgeAdjective);
    setText("#judgeNameOut", data.judgeName);
    setText("#judgeNameOut2", data.judgeName);
    setText("#judgeNameOut3", data.judgeName);

    setText("#winnerOut", data.winner);
    setText("#pluralNounOut", data.pluralNoun);

    story.hidden = false;
    story.classList.add("show");


  });
})();
