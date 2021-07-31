
const array1 = ['Hello'];

const mutable = array => {
	const newArray = array.slice();
    newArray.push('World');
	
    return newArray;
}

console.log(`Mi array1 al inicio: ${array1}`);
console.log(`Mi array resultante: ${mutable(array1)}`);
console.log(`Mi array1 después de la función: ${array1}`);