// 		Reto 3: Asynchronous Output
// Completar la función triggerActions que pasa un callback a processAction para producir el siguiente resultado:

// "Processed Action 1"
// ...
// "Processed Action n"
// Se debe mostrar el mensaje n cantidad de veces, determinado por triggerActions. Tomar en cuenta que no se debe modificar la función processAction.

// Don't alter this function
const processAction = (i, callback) => {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random()*1000);
}

const triggerActions = (count) => {
  // Code goes here
}

triggerActions(5);