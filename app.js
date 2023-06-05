//* ------ Selectors ------- */
const selectionArticle = document.querySelector(".selection");

//? Secilen elemanlarin tayicilari
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//? message
const messagePar = document.querySelector(".message");

//? Score
const scoreCardSection = document.querySelector(".score-card");

//* ------- Variables ------- */
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");

//? Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//* ------- Event Listeners ------- */
selectionArticle.addEventListener("click", (e) => {
  // console.log(e.target.id)
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});

//* ------- Functions ------- */

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  // console.log(userSelectImg.alt)
  // console.log(pcSelectImg.alt)

  //? Esitlik durumu
  if (userSelectImg.alt === pcRandom) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }
};

const draw = () => {
  messagePar.textContent = "Its a draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};

const youLost = () => {};

const youWin = () => {};

//! İlkel Yontem
//? Resimler
// const rockImg = document.getElementById("rock")
// const paperImg = document.getElementById("paper")
// const scissorImg = document.getElementById("scissor")

// rockImg.addEventListener("click", () => {
//   image.src = "./assets/rock.png"
//   image.alt = "rock"
//   yourChoiceDiv.appendChild(image)

//   //? innerHTML
//   // yourChoiceDiv.innerHTML = `<img src="./assets/rock.png" alt="rock">`
// })

// paperImg.addEventListener("click", () => {
//   image.src = "./assets/paper.png"
//   image.alt = "paper"
//   yourChoiceDiv.appendChild(image)
// })

// scissorImg.addEventListener("click", () => {
//   image.src = "./assets/scissor.png"
//   image.alt = "scissor"
//   yourChoiceDiv.appendChild(image)
// })
