
// 		Reto 3: Encontrar elementos faltantes
// Escribir una función que reciba un arreglo de n cantidad de enteros positivos que pueden no estar ordenados. La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.

function findMissingNumbers(lista) {
	let res = [];

	for (let i = 1; i <= Math.max(...lista); i++) {
		if (!lista.includes(i)) {
			res.push(i);
		}
	}

	console.log(lista.join(', '), 'no contiene', res.join(', '));
}

findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]