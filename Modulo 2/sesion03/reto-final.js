//    Reto final
// Unir los arreglos siguientes, despues calcular la suma de los numeros primos que contiene

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
  array3: [11, 12, 13, 14, 15],
};

function esPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return num !== 1;
}

const array3 = [...array1, ...array2, ...calificaciones.array3];

console.log('Arreglo concatenado: ' + array3);

const primos = [];
let suma = 0;

for (let i = 0; i < array3.length; i++) {
  if (esPrimo(array3[i])) {
    primos.push(array3[i]);
    suma += Number(array3[i]);
  }
}

console.log('Primos en el arreglo: ' + primos);
console.log('Suma de los primos: ' + suma);
