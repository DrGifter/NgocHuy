const sound = document.getElementById("scarySound");
const scaryImage = document.getElementById("scaryImage");
const scaryVideo = document.getElementById("scaryVideo");
const candle = document.getElementById("candleImage");
let loopStartTime = 0.5;

function blowCandle() {
candle.src = "./style/Candle-Off.png";

setTimeout(() => {
  sound1.pause();
  sound1.currentTime = 0;

  sound.volume = 1.0;
  sound.currentTime = loopStartTime;
  sound.play();

  scaryImage.style.display = "block";

  setTimeout(() => {
    scaryImage.style.display = "none";
    scaryVideo.style.display = "block";
    scaryVideo.play();
  }, 5000);

  sound.onended = function () {
    sound.currentTime = loopStartTime;
    sound.play();
  };
}, 5000);
}

const sound1 = document.getElementById("scarySound1");

function playSound1From4s() {
  try {
    sound1.currentTime = 1;
    sound1.volume = 1.0;
    sound1.play().then(() => {
      console.log("Đã phát scarySound1");
    }).catch((error) => {
      console.warn("Không thể phát tự động (sẽ phát sau):", error);
    });
  } catch (e) {
    console.error("Lỗi phát scarySound1:", e);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  playSound1From4s();

  document.addEventListener("click", () => {
    if (sound1.paused) {
      playSound1From4s();
    }
  }, { once: true }); 
});