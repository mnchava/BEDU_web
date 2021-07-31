
const numbers = [1, 2, 3, 4, 5];
const doubles = [];

for (let i = 0; i < numbers.length; i++) {
	doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
console.log(i); // Uncaught ReferenceError: i is not defined

const john = {
	firstName: 'John',
	lastName: 'Doe',
	birthYear: 1990,
	calculateAge: function () {
		const today = new Date();
		const year = today.getFullYear();
		this.age = year - this.birthYear;
	}
}
