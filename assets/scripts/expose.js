// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const confetti = new JSConfetti();

  const audio = document.querySelector("audio");
  const button = document.querySelector("button");
  const volIcon = document.querySelector("#volume-controls img");
  const volSlider = document.querySelector("#volume");
  const hornImg = document.querySelector("#expose img");
  const hornSelect = document.querySelector("#horn-select");

  // Horn
  hornSelect.addEventListener("change", function () {
    hornImg.src = `assets/images/${hornSelect.value}.svg`;
    audio.src = `assets/audio/${hornSelect.value}.mp3`;
  });

  // Volume
  volSlider.addEventListener("input", function () {
    const vol = volSlider.value;
    audio.volume = vol / 100;
    if (vol == 0) {
      volIcon.src = "assets/icons/volume-level-0.svg";
    } else if (vol < 33) {
      volIcon.src = "assets/icons/volume-level-1.svg";
    } else if (vol < 67) {
      volIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  // Sound & Confetti
  button.addEventListener("click", function () {
    audio.play();
    if (hornSelect.value == "party-horn") {
      confetti.addConfetti();
    }
  });
}