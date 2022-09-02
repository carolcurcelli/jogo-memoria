document.addEventListener('DOMContentLoaded', () => {

	// baralho

	const cardArray = [
	{
		name: 'cloud',
		img: 'images/cloud.jpg'
	},
	{
		name: 'aerith',
		img: 'images/aerith.jpg'
	},
	{
		name: 'tifa',
		img: 'images/tifa.jpg'
	},
	{
		name: 'barret',
		img: 'images/barret.jpg'
	},
	{
		name: 'red13',
		img: 'images/red13.jpg'
	},
	{
		name: 'sephiroth',
		img: 'images/sephiroth.jpg'
	},
	{
		name: 'cloud',
		img: 'images/cloud.jpg'
	},
	{
		name: 'aerith',
		img: 'images/aerith.jpg'
	},
	{
		name: 'tifa',
		img: 'images/tifa.jpg'
	},
	{
		name: 'barret',
		img: 'images/barret.jpg'
	},
	{
		name: 'red13',
		img: 'images/red13.jpg'
	},
	{
		name: 'sephiroth',
		img: 'images/sephiroth.jpg'
	},
	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	const newGame = document.querySelector('#retry')
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []

	// criando board

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img')
			card.setAttribute('src', 'images/cover.jpg')
			card.classList.add('back')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}

	// verificando se são iguais

	function checkForMatch() {
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

		if (cardsChosen[0] === cardsChosen[1]) {
			cards[optionOneId].setAttribute('src', 'images/found.jpg')
			cards[optionTwoId].setAttribute('src', 'images/found.jpg')
			cards[optionOneId].removeEventListener('click', flipCard)
			cards[optionTwoId].removeEventListener('click', flipCard)
			cardsWon.push(cardsChosen) // adicionando pro contador
		} 

		else {
			cards[optionOneId].setAttribute('src', 'images/cover.jpg')
			cards[optionOneId].classList.add('back')
			cards[optionTwoId].setAttribute('src', 'images/cover.jpg')
			cards[optionTwoId].classList.add('back')
			// faz card voltar a ser jogável:
			cards[optionOneId].addEventListener('click', flipCard)
			cards[optionTwoId].addEventListener('click', flipCard)
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if (cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = "Congrats! You found them all!"
			newGame.classList.add('new-game')
		}
	}

	// virando o card
	function flipCard() {
		this.classList.remove('back')
		this.classList.add('selected')
		this.removeEventListener('click', flipCard)
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500) // miliseconds
		}
	}

	createBoard()

})