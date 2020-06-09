
function getCardsValue(cards) {
	let cardsValue = []
	let value = ""
	cards.forEach(
		card => {
			value = card.slice(0, card.length - 1)
			cardsValue.push(value)
		}
	)
	return cardsValue
}

function getCardsType(cards) {
	let cardsType = []
	let type = ""
	cards.forEach(
		card => {
			type = card.charAt(card.length-1)
			cardsType.push(type);
		}
	)
	return cardsType
}

function allIndexOf(arr, value) {
	if (arr.indexOf(value) >= 0) {
		let res = []
		for( let i = arr.indexOf(value); i >= 0; i = arr.indexOf(value,i+1) ) {
			res.push(i);
		}
		return res
	}
	else return false
}

function nbOccurences(arr, value) {
	let indexes = allIndexOf(arr, value)
	if (indexes != false) return indexes.length
	else return false
}


export { getCardsValue }
export { getCardsType }
export { allIndexOf }
export { nbOccurences }