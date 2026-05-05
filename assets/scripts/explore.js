// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let voices = [];

  const synth = window.speechSynthesis;
  const button = document.querySelector("button");
  const voiceSelect = document.querySelector("#voice-select");
  const face = document.querySelector("#explore img");
  const inputText = document.querySelector("#text-to-speak");

  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += " - DEFAULT";
      }
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);

      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", function () {
    const utterThis = new SpeechSynthesisUtterance(inputText.value);

    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }

    utterThis.addEventListener("start", function () {
      face.src = "assets/images/smiling-open.png";
    });
    utterThis.addEventListener("end", function () {
      face.src = "assets/images/smiling.png";
    });

    synth.speak(utterThis);
  });
}