
// 		Reto 2: Group
// Crear un function constructor Group el cual crea una lista (arreglo) vacía.
// Agregar los siguientes métodos a Group:
// add: Agrega un nuevo valor al grupo solo si no existe.
// has: Retorna un booleano indicando si el valor es un miembro del grupo.
// from: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo.

// Los métodos estáticos son llamados sin instanciar su clase. Cuando se usan function constructors se pueden definir como método de la instancia sin necesidad de colocarlo en el prototype.

const Group = function () {
	this.data = [];
}

Group.prototype.add = function(val) {
	this.has(val) ? true : this.data.push(val);
}

Group.prototype.has = function(val) {
	return this.data.includes(val);
}

Group.from = function (arr) {
	const group = new Group();

	for (let i = 0; i < arr.length; i++) {
		group.add(arr[i]);
	}

	return group;
}

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true