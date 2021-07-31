
// 		Reto 2: Crear un número de teléfono
// Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, y retorne un string en forma de número telefónico.
// La función debe retornar el mismo formato, incluyendo el espacio después del paréntesis.

function createPhoneNumber(numbers) {
	let res = [];

	if (numbers.length == 10) {
		res.push("(");
		res.push(numbers[0]);
		res.push(numbers[1]);
		res.push(numbers[2]);
		res.push(") ");
		res.push(numbers[3]);
		res.push(numbers[4]);
		res.push(numbers[5]);
		res.push("-");
		res.push(numbers[6]);
		res.push(numbers[7]);
		res.push(numbers[8]);
		res.push(numbers[9]);

		console.log(res.join(''));
	}
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"