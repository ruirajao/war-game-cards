


const suitsMap = {}

const suits = ['♠', '♣', '♥', '♦'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
let deck = [];
    
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const card = `
          <div class="card-${suits[i]}">
            <div class="top-left-values">
              <p class="value">${values[j]}</p>
              <p class="suit">${suits[i]}</p>
            </div>
            <div class="middle-suit">
              <p class="suit">${suits[i]}</p>
            </div>
            <div class="bottom-right-values">
              <p class="value">${values[j]}</p>
              <p class="suit">${suits[i]}</p>
            </div>
            <div class="card-back">
            <img src="https://media.licdn.com/dms/image/C560BAQF_9dT4QyqvWw/company-logo_200_200/0/1673266287812?e=2147483647&v=beta&t=BevULykGeF1oKA9bvQyuUm-HMcHiwTkcC-JrqwcoVsY" alt="Mindera logo">
            </div>
          </div>
        `;
        deck.push(card);
      }
    }
const deckContainer = document.getElementById('card-container');
deckContainer.innerHTML = deck.join('');
//<p class="pattern">`+`♠ ♣ ♥ ♦ `.repeat(12)+`</p>


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



const suitSet = {
    spade: '♠',
    club: '♣',
    heart: '♥',
    diamond: '♦'
  };

  console.log(suitSet.spade);
  console.log(suitSet[spade]);


