// pide un numero al usuarion
let num = parseInt(prompt("Ingresa un número para la tabla"));
let cont = document.getElementById("resultado");

if (isNaN(num)) {
  cont.textContent = "Número no válido";
  console.log("Número no válido");
} else {
  // construye y muestra la tabla
  let html = "";
  for (let i = 1; i <= 12; i++) {
    let linea = `${num} x ${i} = ${num * i}`;
    console.log(linea);
    html += `<p>${linea}</p>`;
  }
  cont.innerHTML = html;
}
