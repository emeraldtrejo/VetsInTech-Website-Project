document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
       {
           name: 'mexico',
           card: 'icons/mexico.png'
       },

        {
            name: 'mexico',
            card: 'icons/mexico.png'
        },

        {
            name: 'movies',
            card: 'icons/movies.png'
        },

        {
            name: 'movies',
            card: 'icons/movies.png'
        },

        {
            name: 'pho',
            card: 'icons/pho.png'
        },

        {
            name: 'pho',
            card: 'icons/pho.png'
        },

        {
            name: 'taco',
            card: 'icons/taco.png'
        },

        {
            name: 'taco',
            card: 'icons/taco.png'
        },

        {
            name: 'travel',
            card: 'icons/travel.png'
        },

        {
            name: 'travel',
            card: 'icons/travel.png'
        },

        {
            name: 'run',
            card: 'icons/run.png'
        },

        {
            name: 'run',
            card: 'icons/run.png'
        },
    
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grids')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    //create your gameboard
function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('card')
            card.setAttribute('src', 'icons/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
function checkForMatch() {
        var cards = document.querySelectorAll('.card')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId){
            //alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'icons/blank.png')
            cards[optionTwoId].setAttribute('src', 'icons/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src','icons/back.png')
            cards[optionTwoId].setAttribute('src','icons/back.png')
            //alert('Sorry Try Again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found all them all!'
        }

    }

    //flip the card
function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 700)
        }
    }
 createBoard()

})