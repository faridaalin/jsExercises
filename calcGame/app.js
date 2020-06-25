const score = document.querySelector(".score");
const textHighcore = document.querySelector(".highscore");
const randomNumber = document.querySelector(".rNumber");
const input = document.querySelector(".answer");

let answer = 0;
let points = 0;
let speed = 6;
let highscore = 0;


if (localStorage.highscore) {
  highscore = localStorage.highscore;
}

textHighcore.innerHTML = highscore;

const gameOver = () => {
  console.log("Game over!");
  input.disabled = true;
  input.style.backgroundColor = "salmon";
};

const createNumbers = () => {
  const number1 = Math.ceil(
    Math.random() * 9
  ); /*Math.random() *9 :Tall fra 0 - 9 og Math.ceil runder tallet opp*/
  const number2 = Math.ceil(Math.random() * 9);
  answer = number1 * number2;
  randomNumber.innerHTML = `${number1} · ${number2}`;
};

const startAnimation = () => {
  randomNumber.classList.add("fall");
};

randomNumber.addEventListener("animationend", gameOver);

input.oninput = () => {
  
  validateAnswer();

};
createNumbers();

const validateAnswer = () => {
  const inputAnswer = Number(input.value);
  if (inputAnswer === answer) {
    randomNumber.classList.remove("fall");
    setTimeout(startAnimation, 30);
    createNumbers();
    input.value = "";
    points++;
    score.innerHTML = points;
    speed -= 0.5;

    randomNumber.style.animationDuration = speed + "s";

    addHighscore();
  }
}

const addHighscore = () => {
  if (points > highscore) {
    textHighcore.innerHTML = points;
    textHighcore.style.color = "steelblue";
    localStorage.highscore = points;
  }
};

