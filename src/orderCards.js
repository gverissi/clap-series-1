/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors orderCards(cards) retournera ["As", "Ad", "Qs", "8d", "7h"]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * On considère que la valeur de la carte prime sur le type de la carte
 */
function orderCards(cards) {
	
	return cards.sort(compare)

}

function compare(card1, card2) {
	if (getValue(card1) > getValue(card2)) return -1
	else if (getValue(card1) < getValue(card2)) return 1
	else {
		if (getType(card1) > getType(card2)) return -1
		else return 1
	}
}

function getValue(card) {
	let value = card.charAt(0)
	if (value == "1") value = value + "0"
	switch (value) {
		case "J":
			return 11
		case "Q":
			return 12
		case 'K':
			return 13
		case 'A':
			return 14
		default:
			return Number(value)
	}
}

function getType(card) {
	let type = card.charAt(card.length-1)
	switch (type) {
		case "d":
			return 1
		case "c":
			return 2
		case 'h':
			return 3
		case 's':
			return 4
	}
}

export { orderCards }