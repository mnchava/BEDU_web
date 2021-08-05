
//    Reto 1: Flatten
// Crear una función flatten que recibe un arreglo de arreglos y retorna un nuevo arreglo con todos los elementos del arreglo original.

function flatten(arrays) {
  let res = []
  arrays.forEach( x => x.forEach( y => res.push( y )));

  return res;
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]