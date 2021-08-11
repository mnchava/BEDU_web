/*
Crear una función createTabs que recibe un nodo del DOM y genera una interfaz de tabs de navegación.

La función debe insertar una lista de elementos <button> al principio del nodo.
Se debe crear un botón por cada nodo hijo.
El texto del botón será el valor del atributo data-tabname.
Solamente se debe mostrar uno de los hijos a la vez y este debe cambiar dependiendo del botón seleccionado.
La visibilidad de los elementos la puedes controlar con display: none y display: block.
Por último, cambiar el color de texto del botón que esté seleccionado para que sea visible cuál tab es el que se encuentra activo.
*/

const node = document.getElementById("tab-panel");

function createTabs(node) {
  node.style.textAlign = "center";
  const tabs = Array.from(node.children).map((child) => {
    const boton = document.createElement("button");
    boton.textContent = child.getAttribute("data-tabname");
    boton.style = "padding: 5px 8px; margin: 0 5px;";

    const tab = {
      tag: child,
      button: boton,
    }

    boton.addEventListener("click", () => select(tab));

    return tab;
  });

  const buttons = document.createElement("div");
  buttons.style.margin = "8px";

  for (const tab of tabs) {
    buttons.appendChild(tab.button);
  }

  node.insertBefore(buttons, node.firstChild);

  function select(selected) {
    for (const tab of tabs) {
      tab.button.style.color = tab === selected ? "red" : "";
      tab.tag.style.display = tab === selected ? "" : "none";
    }
  }

  select(tabs[0]);
}

createTabs(node);
