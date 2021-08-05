
//    Reto 2: Compact
// Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy.

function compact(array) {
  return array.filter( elm => elm ? true : false );
}

const array = [0, 1, false, 2, "", 3];
const compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]
