let firstCard = 2;
let secondCard = 11;

let sum = firstCard + secondCard;

if (sum < 21){
    console.log("Add another card?")
} else if ( sum === 21){
    console.log("You have won")
} else {
    console.log("You lost ")
}