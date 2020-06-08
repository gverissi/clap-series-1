/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */
function plusArray(arr1, arr2) {
	const arr = arr1.concat(arr2)
	const reducer = (accumulator, currentValue) => accumulator + currentValue
	
	return arr.reduce(reducer)
}

export { plusArray };