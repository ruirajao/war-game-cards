
const suits = ['spade', 'club', 'heart', 'diamond'];
const suitsSymbol = ['♠', '♣', '♥', '♦'];
// const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const valuesSymbol = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const values = [2, 3, 4, 5, 6, 7];
const valuesSymbol = ["2", "3", "4", "5", "6", "7"];
let deck = [];


//------------DECK: Cards deck with all properties------------
suits.forEach((suit, suitIndex) => {
    values.forEach((value, valuesIndex) => {
        deck.push({
            id: suitIndex * values.length + valuesIndex + 1,
            suit: suit,
            suitSymbol: suitsSymbol[suitIndex],
            value: value,
            valueSymbol: valuesSymbol[valuesIndex]
        });
    })
});


//------------Play(): GAME LOGIC ----------

let counter = 0;
let shuffleDeck = [];
let p1Deck = [];
let p2Deck = [];
let tempWonCards = [];
let gameOver = false;
let valueDifference;


function shuffle() {
    console.log("-----shuffle-----");
    shuffledDeck = shuffleOriginalDeck(deck);
    dealPlayerDecks(shuffledDeck, p1Deck, p2Deck);
    drawFakeStacks(p1Deck, p2Deck);
    const button = document.getElementById("shuffle");
    button.disabled = true;
}

function newGame() {
    // let button = document.querySelector(".play-again");
    //     let popup_p1 = document.querySelector(".popup-p1");
    //     let popup_p2 = document.querySelector(".popup-p2");
    hidePopup();
    reset();
}

function reset() {
    counter = 0;
    valueDifference = 0;
    p1Deck = [];
    p2Deck = [];
    tempWonCards = [];
    shuffle();
    play();
}

function play() {
    console.log("-----play-----");
    drawFirstCards(p1Deck, p2Deck);
    valueDifference = p1Deck[0].value - p2Deck[0].value;

    switch (true) {
        case valueDifference > 0:
            p1PlayWin();
            break;
        case valueDifference < 0:
            p2PlayWin();
            break;
        default:
            playWar();
            break;
    }

    valueDifference = 0;
    drawFakeStacks(p1Deck, p2Deck);
    counter++;
    console.log("counter:" + counter);
    checkWinner();
    return;

}



//------------Shuffled deck (only html) ------------

function shuffleOriginalDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}


//------------Deal deck for each player (only html)------------

function dealPlayerDecks(anyDeck, deck1, deck2) {
    const halfDeckLength = Math.floor(anyDeck.length / 2);
    let firstHalf = anyDeck.slice(0, halfDeckLength);
    let secondHalf = anyDeck.slice(halfDeckLength);
    deck1.push(...firstHalf);
    deck2.push(...secondHalf);
}

//  Draws first card on board
function drawFirstCards(deck1, deck2) {
    p1Card = deck1[0];
    p1FirstCard = `
        <div class="card-${p1Card.suit}">
            <div class="top-left-values">
              <p class="value">${p1Card.valueSymbol}</p>
              <p class="suit">${p1Card.suitSymbol}</p>
            </div>
            <div class="middle-suit">
              <p class="suit">${p1Card.suitSymbol}</p>
            </div>
            <div class="bottom-right-values">
              <p class="value">${p1Card.valueSymbol}</p>
              <p class="suit">${p1Card.suitSymbol}</p>
            </div>
            <div class="card-back">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
            </div>
        </div>`;
    const p1Play = document.getElementById('player-1-play');
    p1Play.innerHTML = p1FirstCard;

    p2Card = deck2[0];
    p2FirstCard = `
        <div class="card-${p2Card.suit}">
            <div class="top-left-values">
              <p class="value">${p2Card.valueSymbol}</p>
              <p class="suit">${p2Card.suitSymbol}</p>
            </div>
            <div class="middle-suit">
              <p class="suit">${p2Card.suitSymbol}</p>
            </div>
            <div class="bottom-right-values">
              <p class="value">${p2Card.valueSymbol}</p>
              <p class="suit">${p2Card.suitSymbol}</p>
            </div>
            <div class="card-back">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
            </div>
        </div>`;
    const p2Play = document.getElementById('player-2-play');
    p2Play.innerHTML = p2FirstCard;
}

//Draws fake stacking deck
function drawFakeStacks(deck1, deck2) {
    p1FakeDeckStack = [];
    console.log(deck1.length);
    for (let i = 0; i < deck1.length; i++) {
        p1FakeDeckStack.push(
            `<div class="p1-fake-card">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
        </div>`
        )
    }

    const p1FakeDeckStackContainer = document.getElementById('p1-stack-deck');
    p1FakeDeckStackContainer.innerHTML = p1FakeDeckStack.join('');
    const p1fakeCards = document.querySelectorAll('.p1-fake-card');
    p1fakeCards.forEach((card, index) => {
        const x = index + 1;
        const y = index + 1;
        card.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    const numOfCardsLeftP1 = p1FakeDeckStack.length;
    const numOfCardsLeftElemP1 = document.getElementById("numOfCardsLeftP1");
    numOfCardsLeftElemP1.innerHTML = `Number of cards left: ${numOfCardsLeftP1}`;
    console.log("NUMBER OF CARDS LEFT P1: " + numOfCardsLeftP1);

    p2FakeDeckStack = [];
    for (let i = 0; i < deck2.length; i++) {
        p2FakeDeckStack.push(
            `<div class="p2-fake-card">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
            </div>`
        )
    }

    const p2FakeDeckStackContainer = document.getElementById('p2-stack-deck');

    p2FakeDeckStackContainer.innerHTML = p2FakeDeckStack.join('');

    const p2fakeCards = document.querySelectorAll('.p2-fake-card');

    p2fakeCards.forEach((card, index) => {
        const x = index + 1;
        const y = index + 1;
        card.style.transform = `translateX(${-x}px) translateY(${y}px)`;
    });

    const numOfCardsLeftP2 = p2FakeDeckStack.length;
    const numOfCardsLeftElemP2 = document.getElementById("numOfCardsLeftP2");
    numOfCardsLeftElemP2.innerHTML = `Number of cards left: ${numOfCardsLeftP2}`;
    console.log("NUMBER OF CARDS LEFT P2: " + numOfCardsLeftP2);
}

function p1PlayWin() {
    tempWonCards.push(p1Deck.shift());
    tempWonCards.push(p2Deck.shift());
    console.log("tempWonCards from P1Play: " + JSON.stringify(tempWonCards));

    // console.log("tempWonCards Length From p1PlayWin: " + tempWonCards.length);
    while (tempWonCards.length > 0) {
        p1Deck.push(tempWonCards.shift());
    }
    // console.log("Player 1 won");
    drawWarFakeStack(tempWonCards);
    hideWarDeck();
    // console.log("after p1 won war:"+ tempWonCards.size);
    console.log("Player 1 won the Round");
}

function p2PlayWin() {
    tempWonCards.push(p2Deck.shift());
    tempWonCards.push(p1Deck.shift());
    console.log("tempWonCards: " + JSON.stringify(tempWonCards));

    // console.log("tempWonCards Length From p2PlayWin: " + tempWonCards.length);
    while (tempWonCards.length > 0) {
        p2Deck.push(tempWonCards.shift());
    }

    console.log("Player 2 won");
    drawWarFakeStack(tempWonCards);
    hideWarDeck();
    // console.log("after p1 won war:"+ tempWonCards.size);
    console.log("Player 2 won the Round");
}

function playWar() {

    console.log("WAR!");
    if (p1Deck.length < 3) {
        //TODO
        console.log("P1: Not enough cards to play WAR!");
        //p2PlayWin();
        p2Winner();
        return;
    }
    if (p2Deck.length < 3) {
        //TODO
        console.log("P2: Not enough cards to play WAR!");
        //p1PlayWin();
        p1Winner();
        return;
    }

    for (let i = 0; i <= 2; i++) {
        tempWonCards.push(p1Deck.shift());
        tempWonCards.push(p2Deck.shift());
    }

    showWarDeck();
    drawWarFakeStack(tempWonCards);

    console.log("tempWonCards: " + JSON.stringify(tempWonCards));
    // console.log("tempWonCards Length After WAR: " + tempWonCards.length);
}

function showWarDeck() {
    const warDecks1 = document.querySelectorAll('.war-deck-1');
    const warDecks2 = document.querySelectorAll('.war-deck-2');

    warDecks1.forEach(deck => { deck.classList.add("show-deck"); });
    warDecks2.forEach(deck => { deck.classList.add("show-deck"); });
    // const warCards = document.querySelectorAll('.war-card');

}

function hideWarDeck() {
    const warDeck1 = document.querySelector(".war-deck-1");
    warDeck1.classList.remove("show-deck")
        ;
    const warDeck2 = document.querySelector(".war-deck-2");
    warDeck1.classList.remove("show-deck");

    // const warCard = document.querySelector(".war-card");
    // warDeck.classList.remove("revealed");
}

function drawWarFakeStack(tempDeck) {
    tempFakeWarDeck = [];

    for (let i = 0; i < (tempDeck.length) / 2; i++) {
        tempFakeWarDeck.push(
            `<div class="war-card">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
        </div>`
        )
    }

    const p1WarDeckContainer = document.getElementById('p1-war-deck');
    p1WarDeckContainer.innerHTML = tempFakeWarDeck.join('');

    const p2WarDeckContainer = document.getElementById('p2-war-deck');
    p2WarDeckContainer.innerHTML = tempFakeWarDeck.join('');

    const warCards = document.querySelectorAll('.war-card');

    warCards.forEach((card, index) => {
        const x = index + 1;
        const y = index + 1;
        const angle = (index + 1) * 5; // change this value to adjust the amount of rotation
        card.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${angle}deg)`;
    });

}




function showWarDeck() {
    const warDecks1 = document.querySelectorAll('.war-deck-1');
    const warDecks2 = document.querySelectorAll('.war-deck-2');

    warDecks1.forEach(deck => { deck.classList.add("show-deck"); });
    warDecks2.forEach(deck => { deck.classList.add("show-deck"); });
    // const warCards = document.querySelectorAll('.war-card');

}

function hideWarDeck() {
    const warDeck1 = document.querySelector(".war-deck-1");
    warDeck1.classList.remove("show-deck")
        ;
    const warDeck2 = document.querySelector(".war-deck-2");
    warDeck1.classList.remove("show-deck");

    // const warCard = document.querySelector(".war-card");
    // warDeck.classList.remove("revealed");
}

function drawWarFakeStack(tempDeck) {
    tempFakeWarDeck = [];

    for (let i = 0; i < (tempDeck.length) / 2; i++) {
        tempFakeWarDeck.push(
            `<div class="war-card">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
        </div>`
        )
    }

    const p1WarDeckContainer = document.getElementById('p1-war-deck');
    p1WarDeckContainer.innerHTML = tempFakeWarDeck.join('');

    const p2WarDeckContainer = document.getElementById('p2-war-deck');
    p2WarDeckContainer.innerHTML = tempFakeWarDeck.join('');

    const warCards = document.querySelectorAll('.war-card');
    warCards.forEach((card, index) => {
        const x = index + 1;
        const y = index + 1;
        const angle = (index + 1) * 5; // change this value to adjust the amount of rotation
        card.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${angle}deg)`;
    });
}




function showPopup() {
    const popup = document.querySelector(".popup-container");
    popup.classList.add("show-container");

    const button_war = document.getElementById("play");
    const button_shuffle = document.getElementById("shuffle");
    const button_reset = document.getElementById("reset");

    button_war.disabled = true;
    button_shuffle.disabled = true;
    button_reset.disabled = true;
}

function hidePopup() {
    const popup = document.querySelector(".popup-container");
    popup.classList.remove("show-container");

    const button_war = document.getElementById("play");
    const button_shuffle = document.getElementById("shuffle");
    const button_reset = document.getElementById("reset");

    button_war.disabled = false;
    button_shuffle.disabled = false;
    button_reset.disabled = false;
}

function checkWinner() {
    if (p1Deck.length === 0) {
        p2Winner();
    } else if (p2Deck.length === 0) {
        p1Winner();
    }
}

function p1Winner() {
    console.log("p1 won the game");
    let popup = `<h2>PLAYER 1 WON</h2>
    <button class="play-again" id="play-again" onclick="newGame()">PLAY AGAIN</button>`;
    const p2Win = document.getElementById("popup-container").querySelector(".popup");;
    p2Win.innerHTML = popup;
    showPopup();
}

function p2Winner() {
    console.log("p2 won the game");
    let popup = `<h2>PLAYER 2 WON</h2>
    <button class="play-again" id="play-again" onclick="newGame()">PLAY AGAIN</button>`;
    const p2Win = document.getElementById("popup-container").querySelector(".popup");;
    p2Win.innerHTML = popup;
    showPopup();
}






