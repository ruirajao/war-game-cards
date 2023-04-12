
const suits = ['spade', 'club', 'heart', 'diamond'];
const suitsSymbol = ['♠', '♣', '♥', '♦'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const valuesSymbol = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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
console.log(deck);


//------------VISUAL DECK: Array with 52 html cards------------
// let visualDeck = [];
// deck.forEach(card => {
//     visualDeck.push(
//         `<div class="card-${card.suit}">
//             <div class="top-left-values">
//               <p class="value">${card.valueSymbol}</p>
//               <p class="suit">${card.suitSymbol}</p>
//             </div>
//             <div class="middle-suit">
//               <p class="suit">${card.suitSymbol}</p>
//             </div>
//             <div class="bottom-right-values">
//               <p class="value">${card.valueSymbol}</p>
//               <p class="suit">${card.suitSymbol}</p>
//             </div>
//             <div class="card-back">
//             <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
//             </div>
//         </div>`
//     )
// })
// console.log(visualDeck);


//------------Play(): GAME LOGIC ----------

let counter = 0;
let shuffleDeck = [];
const p1Deck = [];
const p2Deck = [];
let tempWonCards = [];
let gameOver = false;
let valueDifference;


function shuffle() {
    console.log("-----shuffle-----");
    shuffledDeck = shuffleOriginalDeck(deck);
    dealPlayerDecks(shuffledDeck, p1Deck, p2Deck);
    drawFakeStacks(p1Deck, p2Deck);
}

function newGame(){
    let button = document.querySelector(".play-again");
        let popup_p1 = document.querySelector(".popup-p1");
        let popup_p2 = document.querySelector(".popup-p2");

        button.onclick = function(){
            popup_p1.style.display = "none";
            popup_p2.style.display = "none";
        }
        shuffle();
}

function play() {
    console.log("-----play-----");
    drawFirstCards(p1Deck, p2Deck);
    console.log("p1deck.length: " + p1Deck.length + "| p2deck.length: " + p2Deck
        .length);
    console.log("P1:" + p1Deck[0].value + "|" + "P2:" + p2Deck[0].value);
    valueDifference = p1Deck[0].value - p2Deck[0].value;
    console.log(valueDifference);

    console.log("tempWonCards Length Before Switch: " + tempWonCards.length);
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

    drawFakeStacks(p1Deck, p2Deck);
    counter++;
    console.log("counter:" + counter);
    return;

    //DealEachCard();
    //CheckValues();
    //CheckWinner();
    //CheckWar();
    //Deal3BackCards() & DealEachCard();
    //UpdateCardsLeft();       

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
    console.log(p1Card);
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
    deck1.forEach(card => {
        p1FakeDeckStack.push(
            `<div class="p1-fake-card">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
        </div>`
        )
    })

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

    p2FakeDeckStack = [];
    deck2.forEach(card => {
        p2FakeDeckStack.push(
            `<div class="p2-fake-card">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
        </div>`
        )
    })

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
}

function p1PlayWin() {
    tempWonCards.push(p1Deck.shift());
    tempWonCards.push(p2Deck.shift());
    console.log("tempWonCards from P1Play: " + JSON.stringify(tempWonCards));

    console.log("tempWonCards Length From p1PlayWin: " + tempWonCards.length);
    while (tempWonCards.length > 0) {
        p1Deck.push(tempWonCards.shift());
    }

    p1Popup = `<h2>PLAYER 1 WON</h2>
    <button class="play-again" id="play-again" onclick="newGame()">PLAY AGAIN</button>`;
    const p1Win = document.getElementById("popup-Container").querySelector(".popup");;
    p1Win.innerHTML = p1Popup;

    //document.getElementById("popup-container").style.display = "flex";
    
    console.log("Player 1 won");
}

function p2PlayWin() {
    tempWonCards.push(p2Deck.shift());
    tempWonCards.push(p1Deck.shift());
    console.log("tempWonCards: " + JSON.stringify(tempWonCards));

    console.log("tempWonCards Length From p2PlayWin: " + tempWonCards.length);
    while (tempWonCards.length > 0) {
        p2Deck.push(tempWonCards.shift());
    }

    p2Popup = `<h2>PLAYER 2 WON</h2>
    <button class="play-again" id="play-again" onclick="newGame()">PLAY AGAIN</button>`;
    const p2Win = document.getElementById("popup-Container").querySelector(".popup");;
    p2Win.innerHTML = p2Popup;
    
    //document.getElementById("popup-container").style.display = "flex";

    console.log("Player 2 won");
}

function playWar() {
    console.log("WAR!");
    if (p1Deck.length < 3) {
        //TODO
        console.log("P1: Not enough cards to play WAR!");
        p2PlayWin();
        return;
    }
    if (p2Deck.length < 3) {
        //TODO
        console.log("P2: Not enough cards to play WAR!");
        p1PlayWin();
        return;
    }

    for (let i = 0; i <= 2; i++) {
        tempWonCards.push(p1Deck.shift());
        tempWonCards.push(p2Deck.shift());
    }

    drawFakeStacks(tempWonCards);

    console.log("tempWonCards: " + JSON.stringify(tempWonCards));
    console.log("tempWonCards Length After WAR: " + tempWonCards.length);
}









/*----------------TEST 1---------------
console.log("(---TEST 1----)")
let deck1 = [];
suits.forEach((suit, suitIndex) => {
    values.forEach((value, valuesIndex) => {
        const card1 = {
            id: suitIndex * values.length + valuesIndex + 1,
            suit: suit,
            suitSymbol: suitsSymbol[suitIndex],
            value: value,
            valueSymbol: valuesSymbol[valuesIndex]
        };
        deck1.push(card1);
    })
});
console.log(deck1);
*/
/*----------------TEST 2---------------
console.log("(---TEST 2----)");

let deck2= [];

suits.forEach((suit, suitIndex) => {
    values.forEach((value, valuesIndex) => {
        deck2.push({
            id: suitIndex * values.length + valuesIndex + 1,
            suit: suit,
            suitSymbol: suitsSymbol[suitIndex],
            value: value,
            valueSymbol: valuesSymbol[valuesIndex]
        });
    })
});
console.log(deck2);

let visualDeck2 = [];


deck2.forEach(card => {
    visualDeck2.push(
        `<div class="card-${card.suit}">
            <div class="top-left-values">
              <p class="value">${card.valueSymbol}</p>
              <p class="suit">${card.suitSymbol}</p>
            </div>
            <div class="middle-suit">
              <p class="suit">${card.suitSymbol}</p>
            </div>
            <div class="bottom-right-values">
              <p class="value">${card.valueSymbol}</p>
              <p class="suit">${card.suitSymbol}</p>
            </div>
            <div class="card-back">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
            </div>
        </div>`
    )
})

console.log(visualDeck2);
document.getElementById('card-container').innerHTML = visualDeck2.join('');
*/
/* ---------------TEST 3---------------
console.log("(---TEST 3----)");
class Card {
    constructor(suit,suitSymbol,value,valueSymbol){
        this.suit = suit;
        this.suitSymbol=suitSymbol;
        this.value = value;
        this.valueSymbol = valueSymbol;
    }
}

class Deck {
    suits3 = ['spade', 'club', 'heart', 'diamond'];
    suitsSymbol3 = ['♠', '♣', '♥', '♦'];
    values3 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
    valuesSymbol3 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    constructor() {
        this.myDeck  = [];
    }

    createDeck() {
        this.suits3.forEach((suit, suitIndex) => {
            this.values3.forEach((value, valuesIndex) => {
                const card3 = {
                    id: suitIndex * values.length + valuesIndex + 1,
                    suit: suit,
                    suitSymbol: suitsSymbol[suitIndex],
                    value: value,
                    valueSymbol: valuesSymbol[valuesIndex]
                };
                this.myDeck.push(card3);
            })
        });
    }
}

let deck3 = new Deck();
deck3.createDeck();
console.log(deck3.myDeck);
*/