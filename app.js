let outputText = document.querySelector('.output-text');
let cardText = document.querySelector('.cards');
let sumText = document.querySelector('.sum');
let sum;
let message;

function start() {
    sum = 0;
    cardText.innerHTML = "";
    newCard();
    newCard();
    outputText.style.color = "White";
    document.getElementById('start-btn').style.display = "none";
    document.getElementById('newcard-btn').style.display = "inline";
}

function newCard() {
    let card = Math.floor(Math.random() * (12 - 2)) + 2;
    if(cardText.innerHTML != ""){
        cardText.innerHTML = cardText.innerHTML + ", " + card;
        // cardText.innerHTML += card +  ", ";
    }else{
        cardText.innerHTML += card;
    }
    
    sum += card;
    sumText.innerHTML = sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!";
    } else {
        message = "You're out of the game!";
        document.getElementById('start-btn').style.display = "inline";
        outputText.style.color = "Red";
        document.getElementById('newcard-btn').style.display = "none";
    }
    outputText.innerHTML = message;
}
