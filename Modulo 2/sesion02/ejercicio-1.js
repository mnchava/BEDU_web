
// Crea un script en donde dado el diámetro de una rueda y su grosor (en número) y
// a través de condicionales if realice las siguientes operaciones:

let diametro = 1.0, grosor = 0.15;

if (diametro > 1.4) {
  // - Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
  console.log("La rueda es para un vehículo grande");
  if (grosor < 0.4) { 
    // - Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
    console.log("El grosor para esta rueda es inferior al recomendado");
  }
} else if (diametro > 0.8 && diametro <= 1.4) {
  // - Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
  console.log("La rueda es para un vehículo mediano");
  if (grosor < 0.25) {
    // si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
    console.log("El grosor para esta rueda es inferior al recomendado");
  }
} else {
  // - Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
  console.log("La rueda es para un vehículo pequeño");
}

