"use strict";

const about = (document.getElementById("main-container").hidden = true);
// Generates a random number between 0 and 10
const randomNum = Math.floor(Math.random() * 11);
const myInfo = [
    {name: 'Erich', age: '34', location: 'Texas'}
]
const hobbyArray = [['Coding', ' Reading', ' Working Out', ' Spending time with my wife and children']];
let guesses = 0;
let attempts = 3;

function numberGuesser() {
  for (let i = 5; i > guesses; i--) {
    let guess = parseInt(prompt(
      `Please choose a number between 0 and 10. You have ${attempts} attempt(s) remaining.`
    ));
    // Need to account for NaN and numbers < 0 && > 10.
    if (guess === randomNum) {
      guesses++;
      alert(`That is correct! It took you ${guesses} guess(es).`);
      break;
    } else if (guess !== randomNum) {
      guesses++;
      attempts--;
      alert("That is incorrect. Please try again.");
    }
  }

  // Would like to account for any answer other than yes or no. I think a do/while loop could work for this.
  let playAgain = prompt(
    "Would you like to play again? Enter yes or no"
  ).toLowerCase();
  if (playAgain === "yes") {
    guesses = 0;
    attempts = 3;
    numberGuesser();
  } else if (playAgain === "no") {
    guesses = 0;
    attempts = 3;
  }
}

document.getElementById('about-me').innerHTML = myInfo.map(info => 
    ` <div class = 'mapped-info'>
        <h1>About</h1>
        <ul>
            <li>Name: ${info.name}</li>
            <li>Age: ${info.age}</li>
            <li>Location: ${info.location}</li>
        </ul>

    </div>

    `
)

document.getElementById('hobby-list').innerHTML = hobbyArray.map( info =>
    `
        <li>${info}</li>
    `
)

document
  .getElementById("click-me")
  .addEventListener(
    "click",
    (displayAbout) => (document.getElementById("main-container").hidden = false)
  );

document
  .getElementById("close-me")
  .addEventListener(
    "click",
    (closeAbout) => (document.getElementById("main-container").hidden = true)
  );

document
  .getElementById("number-guesser")
  .addEventListener("click", numberGuesser);
