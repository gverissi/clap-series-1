/*
 * /!\ À faire à la fin, seul ou en groupe!
 * Le tableau cards contient 7 cartes. L'objectif est de retourner les 5 cartes permettant de faire le 
 * meilleur combo possible :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 * À savoir : une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * Attention, une hauteur doit comporter les 5 meilleures cartes possible en sachant que la valeur 
 * prime sur le type !
 * 
 */


import { getCardsValue, getCardsType, allIndexOf, nbOccurences } from "../src/partials";
import { occurences } from "../src/occurences";
import { orderCards } from "../src/orderCards";
import { isAFlush } from "../src/isAFlush";
import { isAPair } from "../src/isAPair";

const CARDS = {
	as: "A",
	king: "K",
	queen: "Q",
	jack: "J",
	ten: "10",
	nine: "9",
	height: "8",
	seven: "7",
	six: "6",
	five: "5",
	four: "4",
	three: "3",
	two: "2"
}

function bestCombo(cards) {

	cards = orderCards(cards)
	let cardsValue = getCardsValue(cards)
	let cardsType = getCardsType(cards)
	
	// Check for a full
	let hand = []
	let occur = occurences(cards)
	let isAThree = false
	let isATwo = false
	for (let [key, value] of Object.entries(occur)) {
		if (value == 3 && isAThree == false) {
			isAThree = true
			for (var i = 0; i < cards.length; i++) {
				if (cardsValue[i] == CARDS[key]) hand.push(cards[i])
			}
		}
	}
	for (let [key, value] of Object.entries(occur)) {
		if (value == 2 && isATwo == false) {
			isATwo = true
			for (var i = 0; i < cards.length; i++) {
				if (cardsValue[i] == CARDS[key]) hand.push(cards[i])
			}
		}
	}
	if (isAThree && isATwo) {
		return hand
	}

	// Check for a flush
	if (isAFlush(cards)) {
		let hand = []
		let types = ["d", "c", "h", "s"]
		types.forEach(
			type => {
				let nbOcc = nbOccurences(cardsType, type)
				if (nbOcc > 4) {
					let indexes = allIndexOf(cardsType, type)
					for (let i = 0; i < 5; i++) {
						hand.push(cards[indexes[i]])
					}
					return
				}
			}
		)
		return hand
	}

	// Check for a pair
	if (isAPair(cards)) {
		let hand = []
		let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
		values.forEach(
			value => {
				let nbOcc = nbOccurences(cardsValue, value)
				if (nbOcc == 2) {
					let indexes = allIndexOf(cardsValue, value)
					for (let i = 0; i < 2; i++) {
						hand.push(cards[indexes[i]])
					}
					let i = 0
					let j = 0
					while (j < 3) {
						if (!indexes.includes(i)) {
							hand.push(cards[i])
							j++
						}
						i++
					}
					return
				}
			}
		)
		return hand
	}

	// Check for a hauteur
	hand = []
	for (let i = 0; i < 5; i++) {
		hand.push(cards[i])
	}
	return hand

}

export { bestCombo }