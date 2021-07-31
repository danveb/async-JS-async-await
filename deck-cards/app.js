// Deck of Cards (app.js)

// #1 OK
async function getCard() {
    let baseURL = 'https://deckofcardsapi.com/api'
    let response = await axios.get(`${baseURL}/deck/new/draw/?count=1`)
    let cardData = response.data.cards[0]
    // console.log(response.data.cards[0])
    console.log(`${cardData.value} of ${cardData.suit}`)
}
// getCard(); 

// #2 OK 
// Shuffle Deck (deck_id) 
const deck = {
    // async METHOD - initialize a deck 
    async initialize() {
        let response = await axios.get('https://deckofcardsapi.com/api/deck/new')
        // console.log(response) 
        this.deckId = response.data.deck_id;
    }, 
    // another async METHOD - reshuffle deck
    async shuffle() {
        let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
        console.log(response) 
    }, 
    // another async METHOD - draw card
    async drawCards() {
        let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=2`)
        let cardData = response.data.cards[0]
        let cardData2 = response.data.cards[1]
        console.log(`${cardData.value} of ${cardData.suit}`)
        console.log(`${cardData2.value} of ${cardData2.suit}`)
    }
}
// deck.initialize(); 
// deck.shuffle();
// deck.drawCards();

// #3 
const cardList = document.querySelector('.card-list')  
const button = document.getElementById('btn') 
const load = document.addEventListener('DOMContentLoaded', ready) 
let deckId = null; 
let baseURL = 'http://deckofcardsapi.com/api/deck'

// DOMContentLoaded & Shuffle Deck 
function ready() {
    axios.get(`${baseURL}/new/shuffle`)
    .then(res => {
        deckId = res.data.deck_id
        console.log(deckId)
    })
}

async function getCard() {
    let response = await axios.get(`${baseURL}/${deckId}/draw/`)
    let card = response.data.cards[0]
    let cardLeft = response.data 
    if(cardLeft.remaining !== 0) {
        const newP = document.createElement('p')
        newP.innerText = `${card.value} of ${card.suit}`
        cardList.appendChild(newP) 
        console.log(cardLeft.remaining)     
    }
}

button.addEventListener('click', function() {
    getCard(); 
})