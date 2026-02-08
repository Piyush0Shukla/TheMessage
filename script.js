const screens = document.querySelectorAll(".screen");
const audio = document.getElementById("voiceMessage");
const audioBtn = document.getElementById("audioBtn");

let current = 0;

document.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  if (e.target === audioBtn) {
    audio.play();
    audioBtn.textContent = "Playing...";
    audioBtn.disabled = true;
    return;
  }

  screens[current].classList.remove("active");
  current++;

  if (screens[current]) {
    screens[current].classList.add("active");
  }
});