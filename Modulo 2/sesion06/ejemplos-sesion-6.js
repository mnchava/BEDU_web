
const john = {
	name: 'John',
	birthYear: 1990,
	job: 'Developer'
}

const Person = function (name, birthYear, job) {
	this.name = name;
	this.birthYear = birthYear;
	this.job = job;
}

const john = new Person('John', 1990, 'Developer');

const mark = new Person('Mark', 1985, 'Teacher');

const jane = new Person('Jane', 1975, 'Designer');

const Person = function (name) {
	this.name = name;
}

const Developer = function (name, skills, yearsOfExperience) {
	Person.call(this, name);

	this.skills = skills;
	this.yearsOfExperience = yearsOfExperience;
}

const john = new Developer('John', 'JavaScript', 10);

console.log(john);
