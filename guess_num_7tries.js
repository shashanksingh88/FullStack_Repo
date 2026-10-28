console.log("Welcome to the Number Guessing Game!");

var secretNumber = Math.floor(Math.random() * 100) + 1;

for (let attempts = 1; attempts <= 7; attempts++) {
  let g = Number(prompt("Enter your guess:"));
  if (g === secretNumber) {
    console.log("Congratulations! You guessed the number.");
    break;
  } else if (g < secretNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }
}