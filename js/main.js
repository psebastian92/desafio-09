// Arrays para luego eliminar los atributos "title"
let arrayNombres = [
  "mario",
  "luigi",
  "bowser",
  "peach",
  "yoshi",
  "toad",
  "toadette",
  "daisy",
];

let arrayIdPersonaje = []; // array para obtener el ID de cada personaje

// Encundiado 1 y Enunciado 6

let botonPresentar = document.getElementById("boton-presentar");

botonPresentar.addEventListener("click", function () {
  let respuestaUsuario = prompt(
    "¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)"
  );
  console.log(respuestaUsuario);
  let nombrePersonaje = respuestaUsuario.toLowerCase();

  // Enunciado 2
  let nombreCompleto = "";

  switch (nombrePersonaje) {
    case "mario":
      nombreCompleto = "Mario";
      break;
    case "luigi":
      nombreCompleto = "Luigi";
      break;
    case "bowser":
      nombreCompleto = "Bowser Morton Koopa";
      break;
    case "peach":
      nombreCompleto = "Princesa Peach Toadstool";
      break;
    case "yoshi":
      nombreCompleto = "T. Yoshisaur Munchakoopas";
      break;
    case "toad":
      nombreCompleto = "Toad";
      break;
    case "toadette":
      nombreCompleto = "Toadette";
      break;
    case "daisy":
      nombreCompleto = "Princesa Daisy";
      break;
    default:
      nombreCompleto = "(desconocido)";
      break;
  }

  let spanNombre = document.querySelector("h1 span");
  spanNombre.textContent = nombreCompleto;

  // Inicio Bonus 1

  for (let i = 0; i < arrayNombres.length; i++) {
    if (nombreCompleto !== "(desconocido)") {
      arrayIdPersonaje[i] = document.getElementById(
        arrayNombres[i]
      );
      arrayIdPersonaje[i].removeAttribute("title");
    }
  }
  // Fin Bonus 1

  // Enunciado 3

  if (nombreCompleto !== "(desconocido)") {
    let elementoPersonaje = document.getElementById(nombrePersonaje);
    elementoPersonaje.setAttribute("title", "Presentado");
  }
});

// Inicio Bonus 2
let caja = document.querySelectorAll("#cajas > div");

// Asignar evento click a cada caja
caja.forEach(function (caja) {
  caja.addEventListener("click", function () {
    clickPersonaje(caja.id);
  });
});

function clickPersonaje(personaje) {

  let elementoPersonaje = document.getElementById(personaje);

  let tituloPresentado = elementoPersonaje.getAttribute("title");
  // la variable tituloPresentado obtiene "title" (si lo hay).

  // Borrar atributos "title" a todos los personajes.
  for (let i = 0; i < arrayNombres.length; i++) {
    arrayIdPersonaje[i] = document.getElementById(
      arrayNombres[i]
    );
    arrayIdPersonaje[i].removeAttribute("title");
  }
  
  // Asignar "title Presentado", si es que no lo tiene. Si lo tiene, se borrará.
  if (tituloPresentado === null) {
    elementoPersonaje.setAttribute("title", "Presentado");
  } else {
    elementoPersonaje.removeAttribute("title");
  }
}
// Fin Bonus 2
