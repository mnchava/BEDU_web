const data = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

//    Reto 2
// Crear una tabla a partir de la información proporcionada por data, un arreglo de objetos con las propiedades name, height y place. La tabla debe contener una columna por cada propiedad, y una fila por cada objeto. Adicionalmente debe contener una fila con headers <th> listando el nombre de cada columna, el cual corresponde a las propiedades del objeto.

function pluck(list, propertyName) {
  let res = [];

  for (const item of list) {
    if (Object.getOwnPropertyNames(item).includes(propertyName)) {
      res.push(item[propertyName]);
    }
  }

  return res;
}

const headers = Object.keys(data[0]);

const table = document.createElement("table");

const headerRow = document.createElement("tr");
headers.forEach((name) => {
  const head = document.createElement("th");
  head.style.width = "150px";
  head.style.color = "yellow";
  head.style.backgroundColor = "black";
  head.style.padding = "5px";
  head.appendChild(document.createTextNode(name.toUpperCase()));
  headerRow.appendChild(head);
});

table.appendChild(headerRow);

const columnas = headers.map((element, index) => pluck(data, element));

for (let i = 0; i < columnas[0].length; i++) {
  const row = document.createElement("tr");
  console.log(columnas[i]);

  for (let j = 0; j < columnas.length; j++) {
    const cell = document.createElement("td");
    if (typeof columnas[j][i] === "number") {
      // Alinear hacia la derecha las celdas que contengan valores numéricos asignando a la propiedad style.textAlign el valor right.
      cell.style.textAlign = "right";
      cell.style.color = "red";
    }
    cell.style.padding = "3px 8px";
    cell.appendChild(document.createTextNode(columnas[j][i]));
    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.getElementById("mountains").appendChild(table);
