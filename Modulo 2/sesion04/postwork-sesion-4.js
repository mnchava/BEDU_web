//    Postwork
// ----------------------------------------------------------------
console.log(
  "\nEscribir una función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si son objetos con las mismas propiedades.\n"
); //en este último caso los valores de las propiedades deben ser comparados con una llamada recursiva de deepEqual.
// Usando el operador typeof puedes determinar si ambas variables son objetos, de ser así se debe llamar nuevamente deepEqual para comparar las propiedades de dichos objetos, en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.

function deepEqual(a, b) {
  if (typeof a == "object" && typeof b == "object") {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (let i = 0; i < Object.keys(a).length; i++) {
      if (!deepEqual(Object.keys(a)[i], Object.keys(b)[i])) {
        return false;
      }
    }

    for (let j = 0; j < Object.keys(a).length; j++) {
      if (!deepEqual(Object.values(a)[j], Object.values(b)[j])) {
        return false;
      }
    }
    return true;
  } else if (
    (typeof a == "object" && typeof b !== "object") ||
    (typeof a !== "object" && typeof b == "object")
  ) {
    return false;
  } else {
    return a === b;
  }
}

var john = {
  firstName: "John",
  lastName: "Doe",
};

console.log("Test 1:", deepEqual(1, 1)); // true
console.log("Test 2:", deepEqual(1, "1")); // false
console.log("Test 3:", deepEqual(john, john)); // true
console.log("Test 4:", deepEqual(john, { firstName: "John", lastName: "Doe" })); // true
console.log("Test 5:", deepEqual(john, { firstName: "John" })); // false

//    #2
// ----------------------------------------------------------------
console.log(
  "\nEscribir una función chunk que recibe un arreglo y un número entero size. La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.\n"
);

function chunk(array, size) {
  let res = [];
  const chunks = Math.ceil(array.length / size);

  for (let i = 0, j = 0; i < chunks; i++, j += size) {
    res.push([]);
    for (let k = 0; k < size; k++) {
      if (array[j + k] !== undefined) {
        res[i].push(array[j + k]);
      }
    }
  }

  return res;
}

var data = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Test 1:", chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log("Test 2:", chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log("Test 3:", chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//    #3
// ----------------------------------------------------------------
console.log(
  "\nEscribir una función frequency que recibe un string como argumento. Esta función debe contar la frecuencia o el número de veces que se repite cada carácter. El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia. Los resultados deben ordenarse ascendentemente por los caracteres y no la frecuencia.\n"
);

function frequency(string) {
  let counter = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] in counter) {
      counter[string[i]] += 1;
    } else {
      counter[string[i]] = 1;
    }
  }

  const sortedKeys = Object.keys(counter).sort();
  let sorted = {};

  for (let i = 0; i < sortedKeys.length; i++) {
    sorted[sortedKeys[i]] = counter[sortedKeys[i]];
  }

  return sorted;
}

console.log("Test 1:", frequency("cccbbbaaa"));
// {a: 3, b: 3, c: 3}
console.log("Test 2:", frequency("www.bedu.org"));
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log("Test 3:", frequency("john.doe@domain.com"));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
