let prompt = require("prompt-sync")();

// code below (replace this example)
const generatedNumber = Math.floor(Math.random() * 100) + 1 // a number between 1 to 100
console.log("Generated Number: " + generatedNumber)


function GuessANumber() {
  let answer = Number(prompt("Guess a number: "));
  let answers = []
  let numberOfAttempts = 0
  while(answer !== generatedNumber) {
    if(isNaN(answer)) {
      console.log(`That's not a number. Guess again.`)
      do {
        answer = Number(prompt("Guess a number again: "));
      } while (isNaN(answer));
    } else if(answers.includes(answer)) {
      console.log(`Already Guessed!`)
      answer = Number(prompt("Guess a number again: "));
      continue;
    }else if(answer > generatedNumber) {
      console.log('Too High!')
      numberOfAttempts += 1;
    } else if (answer < generatedNumber) {
      console.log('Too Low!')
      numberOfAttempts += 1;
    }
    answers.push(answer)
    console.log(answers, "ATTEMPTS: " + numberOfAttempts)
    answer = Number(prompt("Guess a number again: "));
  }
  numberOfAttempts += 1;
  console.log(answers)
  console.log(`You got it! You took ${numberOfAttempts} attempts!`)
}

GuessANumber()
