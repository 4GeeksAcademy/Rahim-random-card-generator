/* eslint-disable */

import "./style.css";

window.onload = function() {
  const suits = ["♥", "♦", "♣", "♠"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const cardNumber = document.querySelector(".number");
  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");

  const button = document.querySelector("button");

  generateCard();

  function generateCard() {
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomValueIndex = Math.floor(Math.random() * values.length);

    const randomSuit = suits[randomSuitIndex];
    const randomValue = values[randomValueIndex];

    cardNumber.textContent = randomValue;
    topSuit.textContent = randomSuit;
    bottomSuit.textContent = randomSuit;
  }

  const intervalId = setInterval(generateCard, 10000);

  button.addEventListener("click", () => {
    clearInterval(intervalId);
    generateCard();
  });
  console.log("Hello Rigo from the console!");
};
