
// 		Reto 1: Vectores
// Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y, ambos valores numéricos que deben ser las propiedades del objeto.

// Agregar los siguientes métodos al prototype de Vec:
// plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.
// minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.
// length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).

// Para calcular la distancia desde (0, 0) hasta (x, y) se puede usar el teorema de Pitágoras: √(x2 + y2). En JavaScript existe el método Math.sqrt para calcular raíces cuadradas.

const Vec = function (x, y) {
	this.x = x;
	this.y = y;
}

Vec.prototype.plus = function (vector) {
	return new Vec(vector.x + this.x, vector.y + this.y);
}

Vec.prototype.minus = function (vector) {
	return new Vec(this.x - vector.x, this.y - vector.y);
}

Vec.prototype.length = function (vector) {
	return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
}

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
