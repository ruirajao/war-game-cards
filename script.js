
const suits = ['spade', 'club', 'heart', 'diamond'];
const suitsSymbol = ['♠', '♣', '♥', '♦'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
const valuesSymbol = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];

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

let visualDeck = [];
deck.forEach(card => {
    visualDeck.push(
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

console.log(visualDeck);
document.getElementById('card-container').innerHTML = visualDeck.join('');



/*
//------------Shuffled deck------------
let k = 0;
let randomNumber = Math.floor(Math.random() * 52);

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}


const shuffledDeck = shuffle(deck);

const shuffledDeckContainer = document.getElementById('shuffled-container');
shuffledDeckContainer.innerHTML = shuffledDeck.join('');

const player1 = [];
const player2 = [];

//------------Shuffled deck for each player------------
function deal(deck, player1, player2) {
    const halfDeckLength = Math.floor(deck.length / 2);
    let player1Deck = deck.slice(0, halfDeckLength);
    let player2Deck = deck.slice(halfDeckLength);
    player1.push(...player1Deck);
    player2.push(...player2Deck);
}

deal(shuffledDeck, player1, player2);

const player1DeckContainer = document.getElementById('player1Deck-container');
player1DeckContainer.innerHTML = player1.join('');

const player2DeckContainer = document.getElementById('player2Deck-container');
player2DeckContainer.innerHTML = player2.join('');


//------------Stacking cards deck------------
let fakeDeck = [];

for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        const fakeCard = `
          <div class="fake-card">
            <div class="top-left-values">
              <p class="value">${values[j]}</p>
              <p class="suit.${suits[i]}">${suits[i]}</p>
            </div>
            <div class="middle-suit">
              <p class="suit.${suits[i]}">${suits[i]}</p>
            </div>
            <div class="bottom-right-values">
              <p class="value">${values[j]}</p>
              <p class="suit.${suits[i]}">${suits[i]}</p>
            </div>
            <div class="card-back">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
            </div>
          </div>
        `;
        fakeDeck.push(fakeCard);
    }
}
const fakeDeckContainer = document.getElementById('stack-deck');
fakeDeckContainer.innerHTML = fakeDeck.join('');
*/


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