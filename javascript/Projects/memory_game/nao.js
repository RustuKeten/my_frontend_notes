let cardArray = [
    {
        name: 'çöl' ,
        img: 'image/çöl.jpg'
    },
    {
        name: "deniz" ,
        img: 'image/deniz.jpg'
    },
    {
        name: 'gökyüzü' ,
        img: 'image/gökyüzü.jpg'
    },
    {
        name: 'Kuzey-Işıkları' ,
        img: 'image/Kuzey-Işıkları.jpg'
    },
    {
        name: 'orman' ,
        img: 'image/orman.jpg'
    },
    {
        name: 'sahil' ,
        img: 'image/sahil.jpg'
    },
    {
        name: 'çöl' ,
        img: 'image/çöl.jpg'
    },
    {
        name: "deniz" ,
        img: 'image/deniz.jpg'
    },
    {
        name: 'gökyüzü' ,
        img: 'image/gökyüzü.jpg'
    },
    {
        name: 'Kuzey-Işıkları' ,
        img: 'image/Kuzey-Işıkları.jpg'
    },
    {
        name: 'orman' ,
        img: 'image/orman.jpg'
    },
    {
        name: 'sahil' ,
        img: 'image/sahil.jpg'
    },
]
cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('#grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'image/kart.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
  createBoard()
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'image/kart.jpg')
      cards[optionTwoId].setAttribute('src', 'image/kart.jpg')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'image/white.png')
      cards[optionTwoId].setAttribute('src', 'image/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } 
    else {
      cards[optionOneId].setAttribute('src', 'image/kart.jpg')
      cards[optionTwoId].setAttribute('src', 'image/kart.jpg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }