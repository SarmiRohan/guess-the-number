"use strict";
const main = document.querySelector(".box");
const winLine = document.querySelector(".instruction");
let score = 20;
let heighscore = 0;
let playing = true;
let randumNumber = Math.trunc(Math.random() * 20) + 1;
const numberGussing = function () {
  if (playing === true) {
    const guessingNumber = Number(document.querySelector("#guess-input").value);
    if (guessingNumber === randumNumber) {
      main.classList.remove("on");
      main.classList.add("win");
      playing = false;
      winLine.textContent = "🎉👏 YOU WON THE GAME";
      document.querySelector("#current-score").textContent = score;
      if (heighscore <= score) {
        heighscore = score;
        document.querySelector("#high-score").textContent = heighscore;
      }
    }
    if (guessingNumber < randumNumber) {
      winLine.textContent = " 📈 Too Low";
      score = score - 1;
      document.querySelector("#current-score").textContent = score;
    }
    if (guessingNumber > randumNumber) {
      winLine.textContent = " 📉 Too High";
      score = score - 1;
      document.querySelector("#current-score").textContent = score;
    }
    if (score === 0) {
      winLine.textContent = "👎 YOU LOST....";
      playing = false;
    }
  }
};
document.querySelector(".check").addEventListener("click", numberGussing);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    numberGussing();
  }
});

document
  .querySelector(".new-game-button")
  .addEventListener("click", function () {
    document.querySelector("#guess-input").value = "";
    winLine.textContent = "🤷‍♀️🤷‍♀️ Guess Number";
    score = 20;
    document.querySelector("#current-score").textContent = score;
    randumNumber = Math.trunc(Math.random() * 20) + 1;
    main.classList.remove("win");
    main.classList.add("on");
    playing = true;
  });
