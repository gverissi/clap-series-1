/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une pair, exemple : 
 * cards = ["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"] isPaired(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isPaired(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : s => ♠, h => ♥, c => ♣, d => ♦
 */

function isAPair(cards) {

	let hand = []
	cards.forEach(card => {
		let value = card.charAt(0)
		hand.push(value);
	});

	for (var i = 0; i < hand.length; i++) {
		let value1 = hand[i]
		for (var j = 0; j < hand.length; j++) {
			if ( j != i) {
				let value2 = hand[j]
				if ( value1 === value2) {
					return true
				}
			}
		}
	}
	return false

}

export { isAPair };