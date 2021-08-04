
// 		Reto 1: Extraer una lista de propiedades
// Completar la función pluck que extrae una lista de propiedades de un arreglo de objetos.

var singers = [
	{ name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
	{ name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
	{ name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
	{ name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
	let res = [];

	for (const item of list) {
		if (Object.getOwnPropertyNames(item).includes(propertyName)) {
			// console.log('Se encontro', propertyName);
			res.push(item[propertyName]);
		}
	}

	return res;
}

console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]