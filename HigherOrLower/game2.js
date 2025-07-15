let cardElement = document.getElementById("card");
let startButton = document.getElementById("start")
let symbols = ["clubs", "diamonds", "hearts", "spades"];
let lastCard = "";
let randomCard = 10;
let randomSymbol = "diamond";

console.log(cardElement);
console.log(randomCard);

function randomIntager(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    randomCard = randomIntager(1,13);
    randomSymbol = symbols[randomIntager(0, symbols.length - 1)];
    console.log(randomCard);
    checkCards();
    startButton.style.display = "none"
}

function Lower() {
    lastCard = randomCard;
    console.log(lastCard);
    startGame();
    if(randomCard < lastCard) {
        console.log("Win")
    } else {
        console.log("Lose")
    }
}

function Higher() {
    lastCard = randomCard;
    console.log(lastCard);
    startGame();
    if(randomCard > lastCard) {
        console.log("Win")
    } else {
        console.log("Lose")
    }
}


function checkCards() {
    if(randomCard < 11 && randomCard > 1) {
        cardElement.src = "./images/cards/" + randomCard + "_of_" + randomSymbol + ".png"
    } else if(randomCard == 11) {
        cardElement.src = "./images/cards/jack_of_" + randomSymbol + ".png"
    } else if(randomCard == 12) {
        cardElement.src = "./images/cards/queen_of_" + randomSymbol + ".png"
    } else if(randomCard == 13) {
        cardElement.src = "./images/cards/king_of_" + randomSymbol + ".png"
    } else if (randomCard == 1) {
        cardElement.src = "./images/cards/ace_of_" + randomSymbol + ".png"
    }
}