let num= Math.floor(Math.random() * 3);
let userChoice = Number(prompt("Enter your choice 1 for Rock, 2 for Paper, 3 for Scissors:")) -1;
if(userChoice==0){
        console.log(" You chose Rock");
} else if(userChoice==1){
        console.log(" You chose Paper");
} else {
        console.log(" You chose Scissors");
}

if (num == 0) {
    console.log("Computer chose Rock");
} else if (num == 1) {
    console.log("Computer chose Paper");
} else {
    console.log("Computer chose Scissors");
}

if (userChoice < 0 || userChoice > 2 || !Number.isInteger(userChoice)) {
    console.log("Please enter a valid choice!");
} else if (userChoice == num) {
    console.log("It's a Tie!");
} else if (
    (userChoice == 0 && num == 2) ||
    (userChoice == 1 && num == 0) ||
    (userChoice == 2 && num == 1)
) {
    console.log("Congratulations! You Win!");
} else {
    console.log("Computer Wins!");
}

