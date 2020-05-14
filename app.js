document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
       {
           name: 'mexico',
           img: 'icons/mexico.png'
       },

        {
            name: 'mexico',
            img: 'icons/mexico.png'
        },

        {
            name: 'movies',
            img: 'icons/movies.png'
        },

        {
            name: 'movies',
            img: 'icons/movies.png'
        },

        {
            name: 'pho',
            img: 'icons/pho.png'
        },

        {
            name: 'pho',
            img: 'icons/pho.png'
        },

        {
            name: 'taco',
            img: 'icons/taco.png'
        },

        {
            name: 'taco',
            img: 'icons/taco.png'
        },

        {
            name: 'travel',
            img: 'icons/travel.png'
        },

        {
            name: 'travel',
            img: 'icons/travel.png'
        },

        {
            name: 'run',
            img: 'icons/run.png'
        },

        {
            name: 'run',
            img: 'icons/run.png'
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
            var card = document.createElement('img')
            card.setAttribute('src', 'icons/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            // alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'icons/blank.png')
            cards[optionTwoId].setAttribute('src', 'icons/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src','icons/back.png')
            cards[optionTwoId].setAttribute('src','icons/back.png')
            // alert('Sorry Try Again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = ' Congratulations! You found all them all!'
        }

    }

    //flip the card
function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
 createBoard()

})