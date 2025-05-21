// pide la edad al usuarion
let edad = parseInt(prompt("Ingresa tu edad"))
let categoria

if (isNaN(edad) || edad < 0) {
  // edad negativa o no es numero
  categoria = "Edad no válida"
} else if (edad <= 12) {
  // rango de niño
  categoria = "Niño"
} else if (edad <= 17) {
  // rango de adolescente
  categoria = "Adolescente"
} else if (edad <= 59) {
  // rango de adulto
  categoria = "Adulto"
} else {
  // rango de adulto mayor
  categoria = "Adulto mayor"
}

// muestra igual en consola y en pantalla
console.log(categoria)
document.getElementById("categoria").textContent = categoria
// ajustes
