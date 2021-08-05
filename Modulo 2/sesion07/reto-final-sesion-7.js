const estudiantes = [
  { nombre: "Pedro", calif: 5, grupo: "A" },
  { nombre: "Pablo", calif: 8, grupo: "B" },
  { nombre: "Alexis", calif: 2, grupo: "A" },
  { nombre: "Oscar", calif: 4, grupo: "C" },
  { nombre: "Arturo", calif: 7, grupo: "C" },
  { nombre: "Juan", calif: 5, grupo: "A" },
  { nombre: "José", calif: 6, grupo: "B" },
  { nombre: "Cesar", calif: 5, grupo: "A" },
  { nombre: "Rodolfo", calif: 7, grupo: "C" },
  { nombre: "Arturo", calif: 9, grupo: "C" },
  { nombre: "Diego", calif: 8, grupo: "A" },
  { nombre: "Esteban", calif: 6, grupo: "B" },
  { nombre: "Julio", calif: 6, grupo: "A" },
  { nombre: "Ciro", calif: 7, grupo: "C" },
];

function getAvg(students, group) {
  let aprobados = students.filter(
    (student) => student.grupo == group && student.calif >= 6
  );

  return [
    ...aprobados,
    {
      Promedio:
        aprobados.reduce((sum, value) => {
          return sum + value.calif;
        }, 0) / aprobados.length,
    },
  ];
}

console.log(getAvg(estudiantes, "A"));
console.log(getAvg(estudiantes, "B"));
console.log(getAvg(estudiantes, "C"));
