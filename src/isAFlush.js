/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple : 
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */

function isAFlush(cards) {

	// Get the type
	let hand = []
	cards.forEach(card => {
		let type = card.charAt(card.length-1)
		hand.push(type);
	});

	// Check for a flush
	let types = ["d", "c", "h", "s"]
	let count = {"d": 0, "c": 0, "h": 0, "s": 0}
	for (var j = 0; j < types.length; j++) {
		let type = types[j]
		for (var i = 0; i < hand.length; i++) {
			if (type === hand[i]) {
				count[type] += 1
				if (count[type] > 4) {
					return true
				}
			}
		}
	}
	return false
}

export { isAFlush };