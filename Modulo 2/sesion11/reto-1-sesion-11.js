// 		Reto 1: Creando Promise.all
// Podemos pasar un arreglo de promesas a Promise.all el cual espera a que todas las promesas del arreglo se resuelvan, después retorna un arreglo con los resultados de cada promesa. Si alguna de las promesas del arreglo falla entonces toda la promesa es rechazada.

// En este reto vamos a crear una función promiseAll que haga exactamente lo mismo. Toma en cuenta que una vez que una promesa se resuelva o rechace no puede llamarse de nuevo. Si una promesa en el arreglo es rechazada entonces todas las demás deben ser ignoradas.

function promiseAll(promises) {
	return new Promise((resolve, reject) => {
    if (promises.length == 0) resolve([]);
    
		let done = [];
		let missing = promises.length;

		for (let i = 0; i < missing; i++) {
			promises[i].then(result => {
        done[i] = result;
				missing--;
				if (missing == 0) resolve(done);
			}).catch(reject);
		}
	});
}

function soon(value) {
	return new Promise(resolve => {
		setTimeout(() => resolve(value), 1000)
	})
}

// Test cases
promiseAll([])
	.then(results => {
		console.log('Expected result []: ', results)
	})

promiseAll([soon(1), soon(2), soon(3)])
	.then(results => {
		console.log('Expected result [1, 2, 3]: ', results)
	})

promiseAll([soon(1), Promise.reject('X'), soon(3)])
	.then(results => {
		console.log('We should not get here')
	})
	.catch(error => {
		console.log('Expected error X: ', error)
	})