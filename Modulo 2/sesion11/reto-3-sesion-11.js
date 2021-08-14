// 		Reto 3: Asynchronous Output
// Completar la función triggerActions que pasa un callback a processAction para producir el siguiente resultado:

// "Processed Action 1"
// ...
// "Processed Action n"
// Se debe mostrar el mensaje n cantidad de veces, determinado por triggerActions. Tomar en cuenta que no se debe modificar la función processAction.

// Don't alter this function
const processAction = (i, callback) => {
  setTimeout(function () {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
};

async function triggerActions(count) {
  let done = [];

  for (let i = 0; i < count; i++) {
    done[i] = new Promise((resolve) => {
      processAction(i, resolve);
    });
  }

  Promise.all(done).then(function (result) {
    result.forEach((value) => {
      console.log(value);
    });
  });
}

triggerActions(10);
