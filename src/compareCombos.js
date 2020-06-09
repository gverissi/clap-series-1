/*
 * /!\ À faire à la fin, seul ou en groupe !
 * Les tableaux cards1 et cards2 contiennent 5 cartes. L'objectif est de retourner le tableau contenant le 
 * meilleur combos :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 */

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


function compareCombos(cards1, cards2) {
	
	let tri = [cards1, cards2].sort(compare)
	return tri[0]
}

function compare(cards1, cards2) {

	if (getHandValue(cards1) > getHandValue(cards2)) return -1
	else if (getHandValue(cards1) < getHandValue(cards2)) return 1
	else {
		if (getHandValue(cards1) > getHandValue(cards2)) return -1
		else return 1
	}
}


function getCardsValue(cards) {
	let cardsValue = []
	let value = ""
	cards.forEach(
		card => {
			value = card.charAt(0)
			if (value == "1") value = value + "0"
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

function getHandValue(cards) {

	// cards = orderCards(cards)
	let cardsValue = getCardsValue(cards)
	let cardsType = getCardsType(cards)
	
	// Check for a full
	let occur = occurences(cards)
	let isAThree = false
	let isATwo = false
	for (let [key, value] of Object.entries(occur)) {
		if (value == 3 && isAThree == false) {
			isAThree = true
		}
	}
	for (let [key, value] of Object.entries(occur)) {
		if (value == 2 && isATwo == false) {
			isATwo = true
		}
	}
	if (isAThree && isATwo) {
		return 4
	}

	// Check for a flush
	if (isAFlush(cards)) {
		let types = ["d", "c", "h", "s"]
		types.forEach(
			type => {
				let nbOcc = nbOccurences(cardsType, type)
				if (nbOcc > 4) {
					return
				}
			}
		)
		return 3
	}

	// Check for a pair
	if (isAPair(cards)) {
		let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
		values.forEach(
			value => {
				let nbOcc = nbOccurences(cardsValue, value)
				if (nbOcc == 2) {
					return
				}
			}
		)
		return 2
	}

	// Check for a hauteur
	return 1
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

export { compareCombos };