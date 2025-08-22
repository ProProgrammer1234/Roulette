let moneyElement = document.getElementById("money");
let Money = 2000;
let betElement = document.getElementById("bet");
let currentBet = 500;
let wheel = document.getElementById("roullete")
let isSpinning = false;
let playerGuess = [];
let selected = "";
let correctGuess = "";
let plusButton = document.getElementById("plusButton");
let minusButton = document.getElementById("minusButton");
let minBet = 500;
let betButton = "";
let btnColor = "";
let canSelect = false
let wheelSound = new Audio("wheelSpin.mp3")
let alertElement = document.getElementById("alert")
let betType = ""
let username = localStorage.getItem("Username")

const C1 = [3,6,9,12,15,18,21,24,27,30,33,36]
const C2 = [2,5,8,11,14,17,20,23,26,29,32,35]
const C3 = [1,4,7,10,13,16,19,22,25,28,31,34]
const dozen1 = [1,2,3,4,5,6,7,8,9,10,11,12]
const dozen2 = [13,14,15,16,17,18,19,20,21,22,23,24]
const dozen3 = [25,26,27,28,29,30,31,32,33,34,35,36]
const small1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
const small2 = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]
const small3 = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
const small4 = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
const small5 = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,]
const small6 = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

// console.log(moneyElement);
// console.log(Money);
// console.log(wheel);
// console.log(isSpinning);
// console.log(randomNumber);
// console.log(playerColor);
// console.log(playerNumber);
// console.log(correctColor);
// console.log(correctNumber);
// console.log(betElement);
// console.log(currentBet);

function resetBetBtn() {
    if (Money == 0) {
        minusButton.style.backgroundColor = "gray"
        minusButton.style.border = "gray"
        minusButton.style.cursor = "not-allowed";
        minusButton.disabled = true;

        plusButton.style.backgroundColor = "gray";
        plusButton.style.border = "gray";
        plusButton.style.cursor = "not-allowed";
        plusButton.disabled = true;
        currentBet = 0;
        betElement.innerHTML = "Current Bet: " + currentBet + "$";
        return;
    } else if (Money == 500) {
        minusButton.style.backgroundColor = "gray"
        minusButton.style.border = "gray"
        minusButton.style.cursor = "not-allowed";
        minusButton.disabled = true;

        plusButton.style.backgroundColor = "gray";
        plusButton.style.border = "gray";
        plusButton.style.cursor = "not-allowed";
        plusButton.disabled = true;
        return;
    }
    
    minusButton.style.backgroundColor = "gray"
    minusButton.style.border = "gray"
    minusButton.style.cursor = "not-allowed";
    minusButton.disabled = true;

    plusButton.style.backgroundColor = "green";
    plusButton.style.border = "green";
    plusButton.style.cursor = "pointer";
    plusButton.disabled = false;
}


alertElement.innerHTML = "Hello, " + username + ". Welcome to the Wheel of Fortune! Place your bet to begin.";
moneyElement.innerHTML = "Your Money: " + Money + "$";
betElement.innerHTML = "Current Bet: " + currentBet + "$";

function randomIntager(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spinWheel() {
    if(isSpinning){
        alertElement.innerHTML = "Easy there, gambler! Let the wheel finish its magic."
        return;
    }

    if(Money == 0) {
        alertElement.innerHTML = "You can't bet anymore! you reached 0$. <br> better luck next time!";
        window.location.href = "index.html"
    }

    if (playerGuess.length > 0) {
    Money = Money - currentBet;
    moneyElement.innerHTML = "Your Money: " + Money + "$";

    correctGuess = randomIntager(0, 36);
    wheel.classList.add("spin", "spinTo" + correctGuess);
    wheelSound.play();
    setTimeout(checkForWinnings, 10500);
    isSpinning = true;
    
    
    setTimeout(removeAnimation, 15000);
    } else {
        alertElement.innerHTML = "Place your bet before spinning the wheel!"
    }
}

function removeAnimation() {
    wheel.classList.remove("spin", "spinTo" + correctGuess);
    isSpinning = false;
    alertElement.innerHTML = "Place your bet and spin the wheel!"
    if (Money == 0) {
        location.href = "index.html"
    }
}

function checkForWinnings() {
    if(playerGuess.includes(correctGuess)) {
        alertElement.innerHTML = "Winner, winner! <br> Luck is on your side! <br> Correct Guess: " + correctGuess;
        if(betType == "num") {
            Money = Money + currentBet * 36;
            moneyElement.innerHTML = "Your Money: " + Money; 
            currentBet = minBet;
            betElement.innerHTML = "Current Bet: " + currentBet + "$";
            resetBetBtn();
        } else if (betType == "collumn") {
            Money = Money + currentBet * 3;
            moneyElement.innerHTML = "Your Money: " + Money; 
            currentBet = minBet;
            betElement.innerHTML = "Current Bet: " + currentBet + "$";
            resetBetBtn();
        } else if (betType == "dozen") {
            Money = Money + currentBet * 3;
            moneyElement.innerHTML = "Your Money: " + Money; 
            currentBet = minBet;
            betElement.innerHTML = "Current Bet: " + currentBet + "$";
            resetBetBtn();
        } else if (betType == "smallBets") {
            Money = Money + currentBet * 2;
            moneyElement.innerHTML = "Your Money: " + Money + "$"; 
            currentBet = minBet;
            betElement.innerHTML = "Current Bet: " + currentBet + "$";
            resetBetBtn();
        }
    } else {
        resetBetBtn();
        alertElement.innerHTML = "Sometimes you win, <br> sometimes the house does. <br> Correct Guess: " + correctGuess; 
        currentBet = minBet;
        betElement.innerHTML = "Current Bet: " + currentBet + "$";
        if (Money == 0) {
            resetBetBtn();
            alertElement.innerHTML = "You can't bet anymore! you reached 0$. <br> better luck next time!"; 
        }
    }
    playerGuess = []
    betButton.classList.remove("selected");
    console.log(Money);
}

function decreaseBet() {
    if (isSpinning) {
        alertElement.innerHTML = "No sneaky changes mid-spin! Wait for the next round." 
        return;
    }
    if(currentBet > minBet) {
        currentBet = currentBet - 500;
        betElement.innerHTML = "Current Bet: " + currentBet + "$";
        if(currentBet == minBet) {
            minusButton.style.backgroundColor = "gray";
            minusButton.style.border = "gray";
            minusButton.style.cursor = "not-allowed";
            minusButton.disabled = true;
        }
        if(currentBet + 500 <= Money) {
            plusButton.style.backgroundColor = "";
            plusButton.style.border = "";
            plusButton.style.cursor = "pointer";
            plusButton.disabled = false;
        }
    }
}


function increaseBet() {
    if (isSpinning) {
        alertElement.innerHTML = "No sneaky changes mid-spin! Wait for the next round." 
        return;
    }
    if(currentBet + 500 <= Money) {
        currentBet = currentBet + 500;
        betElement.innerHTML = "Current Bet: " + currentBet + "$";
        if(currentBet == Money) {
        plusButton.style.backgroundColor = "gray";
        plusButton.style.border = "gray";
        plusButton.style.cursor = "not-allowed";
        plusButton.disabled = true;
    }
    if(currentBet > minBet) {
            minusButton.style.backgroundColor = "";
            minusButton.style.border = "";
            minusButton.style.cursor = "pointer";
            minusButton.disabled = false;
        }
    }
}




function playerPick(button, guess, color, id) {
    if (isSpinning) {
        alertElement.innerHTML = "No sneaky changes mid-spin! Wait for the next round." 
        return;
    }

    if(playerGuess.length > 0) {
        betButton.classList.remove("selected");
        playerGuess = []
        if(Array.isArray(guess)) {
        betButton = button;
        btnColor = color;
        betType = id;
        canSelect = true;
        playerGuess.push(...guess);
        console.log(playerGuess);
        betButton.classList.add("selected");
        }
        else {
            betButton = button;
            btnColor = color;
            betType = id;
            canSelect = true;
            playerGuess.push(guess);
            console.log(playerGuess);
            betButton.classList.add("selected");
        }
        return;
    } 
    if(Array.isArray(guess)) {
        betButton = button;
        btnColor = color;
        betType = id;
        canSelect = true;
        playerGuess.push(...guess);
        console.log(playerGuess);
        betButton.classList.add("selected");
        }
        else {
            betButton = button;
            btnColor = color;
            betType = id;
            canSelect = true;
            playerGuess.push(guess);
            console.log(playerGuess);
            betButton.classList.add("selected");
        }
    
}




                 
        

