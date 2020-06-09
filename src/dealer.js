/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */

const  VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const TYPES = ["d", "c", "h", "s"]

function dealer() {
	// Create a deck of 52 cards

	// // Method 1
	// let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
	// let types = ["d", "c", "h", "s"]
	// let deck = []
	// for (var i = 0; i < 4; i++) {
	// 	for (var j = 0; j < 13; j++) {
	// 		deck.push(values[j] + types[i])
	// 	}
	// }

	// // Method 2
	// let deck = [
	// 	"2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "Jd", "Qd", "Kd", "Ad",
	// 	"2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "Jc", "Qc", "Kc", "Ac",
	// 	"2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "Jh", "Qh", "Kh", "Ah",
	// 	"2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "Js", "Qs", "Ks", "As",
	// ]

	// Method 3
	let deck = VALUES.map(v => TYPES.map(t => v + t)).flat().shuffle()

	// // Method 1
	// let hands = []
	// for (var i = 0; i < 2; i++) {
	// 	let hand = []
	// 	for (var j = 0; j < 5; j++) {
	// 		let index = Math.floor(Math.random() * deck.length)
	// 		hand.push(deck[index])
	// 		deck.splice(index, 1);
	// 	}
	// 	hands.push(hand)
	// }

	// // Method 2
	// shuffle(deck)
	// let hands = [deck.slice(0, 5), deck.slice(5, 10)]
	// return hands

	// Method 3
	return [deck.slice(0, 5), deck.slice(5, 10)]
}

// function shuffle(array) {
// 	array.sort(() => Math.random() - 0.5)
// }

// Monkey Patching
Array.prototype.shuffle = function() {
	return this.sort(() => Math.random() - 0.5);
}

export { dealer };