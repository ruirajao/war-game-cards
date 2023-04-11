
const suits = ['spade', 'club', 'heart', 'diamond'];
const suitsSymbol = ['♠', '♣', '♥', '♦'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
const valuesSymbol = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];


//------------Shuffled deck------------
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

//------------Shuffled deck------------
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

//------------Shuffled deck------------
let k = 0;
let randomNumber = Math.floor(Math.random() * 52);

function shuffle(anyDeck) {
    for (let i = anyDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [anyDeck[i], anyDeck[j]] = [anyDeck[j], anyDeck[i]];
    }
    return anyDeck;
}

const shuffledDeck = shuffle(visualDeck);

// const shuffledDeckContainer = document.getElementById('shuffled-container');
// shuffledDeckContainer.innerHTML = shuffledDeck.join('');

const p1Deck = [];
const p2Deck = [];

//------------Shuffled deck for each player------------
function deal(anyDeck, deck1, deck2) {
    const halfDeckLength = Math.floor(anyDeck.length / 2);
    let firstHalf = anyDeck.slice(0, halfDeckLength);
    let secondHalf = anyDeck.slice(halfDeckLength);
    p1Deck.push(...firstHalf);
    p2Deck.push(...secondHalf);
}

deal(shuffledDeck, p1Deck, p2Deck);

const p1DeckContainer = document.getElementById('player1Deck-container');
p1DeckContainer.innerHTML = p1Deck.join('');

const p2DeckContainer = document.getElementById('player2Deck-container');
p2DeckContainer.innerHTML = p2Deck.join('');

p1FirstCard = p1Deck[0];
const p1Play = document.getElementById('player-1-play');
p1Play.innerHTML = p1FirstCard;

p2FirstCard = p2Deck[0];
const p2Play = document.getElementById('player-2-play');
p2Play.innerHTML = p2FirstCard;




//------------Stacking cards deck------------
// let fakeStackDeck = [];

// deck.forEach(card => {
//     fakeStackDeck.push(
//         `<div class="fake-card">
//             <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
//         </div>`
//     )
// });

// console.log(fakeStackDeck);
// const fakeDeckContainer = document.getElementById('stack-deck');
// fakeDeckContainer.innerHTML = fakeStackDeck.join('');


p1FakeDeckStack = [];

p1Deck.forEach(card => {
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


p2FakeDeckStack = [];

p2Deck.forEach(card => {
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