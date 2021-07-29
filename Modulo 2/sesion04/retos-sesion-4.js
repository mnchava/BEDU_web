
//    Reto 1: Potenciación
// Crear una función power que recibe dos argumentos base y exponent. La función debe retornar el resultado de elevar base a la potencia exponent.

function power(base, exponent) {
  let res = base;

  for (let i = 1; i < exponent; i++) {
    res = res * base;
  }

  return res;
}

console.log(power(3, 3));

//    Reto 2: Número mayor
// Completar la función getLargerInt la cual recibe dos números enteros. La función debe retornar el número mayor.

const getLargerInt = (number1, number2) => number1 > number2 ? number1 : number2;

console.log(getLargerInt(24, 38));

//    Reto 3: Fibonacci
// En la serie de Fibonacci: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...]
// Cada elemento se obtiene sumando los dos valores anteriores.
// Completar la función fibonacciSequence la cuál recibe limit, un entero positivo que representa la cantidad de elementos de la serie que queremos.
// La función debe mostrar en consola los elementos de la serie hasta que limit sea alcanzado.

const fibonacciSequence = function(limit) {
  if (limit < 1) return []; 

  let serie = [];
  let a = 0, b = 1, c = 0;

  for (let i = 0; i < limit; i++) {
    if (i == 1) {
      serie.push(1);
      a = 1;
      b = 1;
      continue;
    }
    serie.push(a + b);
    c = a + b;
    a = b;
    b = c;
  }

  return serie;
}

console.log("10 primeros elementos de la serie:", fibonacciSequence(10));