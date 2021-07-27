
const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

const doubled = []

for(let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2)
}

console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(doubled)  // [2, 6, 8, 14, 4, 2, 18, 0]

const car = {
  brand: 'Nissan',
  model: 'Versa',
  year: 2020
}

const keys = Object.keys(car)
const pairs = []

for(let i = 0; i < keys.length; i++) {
  pairs.push( [keys[i], car[keys[i]]] )
}

console.log(pairs)

const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName: name,  country: ctry = 'Unknown'} = person;

console.log(name, ctry);