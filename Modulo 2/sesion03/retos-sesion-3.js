
//    Reto 1: Calcular promedio
// Dado el arreglo numbers compuesto solamente por números enteros mayores que cero, obtener el promedio de todos sus elementos.

const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
var total = 0;

for (const number of numbers) {
  total += Number(number);
}
console.log(total);

const avg = total / (numbers.length);

console.log(avg);

//    Reto 2: Arreglo a objeto
// En el ejemplo 2 transformamos un objeto a un arreglo con los pares [key, value] por cada propiedad y valor del objeto.
// Para este reto vamos a realizar lo opuesto. Es decir, tomar un arreglo con pares [key, value] y crear un objeto con sus respectivas propiedades y valores.

const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];
let auto = {};

for (let i = 0; i < car.length; i++) {
  auto[car[i][0]] = car[i][1];
}

console.log(auto);

//    Reto 3: Objetos anidados
// Dado el siguiente objeto, extraer las URLs de facebook e instagram y renombrar las variables por fb e ig respectivamente.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  links: {
    web: {
      blog: 'https://johndoe.com'
    }, 
    social: {
      facebook: 'https://facebook.com/john.doe',
      instagram: 'https://instagram.com/john.doe'
    } 
  }
}

const { facebook: fb, instagram: ig } = person.links.social;

console.log(fb, ig);