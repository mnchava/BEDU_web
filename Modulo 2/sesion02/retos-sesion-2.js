//    Reto 01
// Nuestro código tiene una pequeña falla, el día solo tiene 24 horas y no se está tomando en cuenta el caso en el que time sea una hora inválida.
// Utilizando lo visto hasta el momento sobre operadores lógicos y condicionales, debes crear un nuevo mensaje que será usado cuando time sea una hora que no existe en el día.

const time = 33;
let greeting;

if (time < 0 || time > 24) {
  greeting = "Invalid Time";
} else if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting);

//    Reto 02
// Crear un ciclo desde 0 hasta 100.
// Mostrar todos los números pares en este ciclo con console.log()

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//    Reto 03
// Crear un ciclo desde 0 hasta 100.
// Mostrar todos los números primos en este ciclo con console.log()

for (let i = 0; i <= 100; i++) {
  if (i == 0 || i == 1)  {
  } else if (i == 2) {
    console.log(i);
  } else {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        esPrimo = false;
      }
    }
    if (esPrimo) {
      console.log(i);
    }
  }
}
