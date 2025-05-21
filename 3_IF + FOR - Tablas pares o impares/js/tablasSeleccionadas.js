// pregunta si quiere pares o impares
let opcion = prompt("Escribe pares o impares para ver las tablas");
let cont = document.getElementById("resultado");

if (opcion.toLowerCase() === "pares" || opcion.toLowerCase() === "impares") {
  let esPar = opcion.toLowerCase() === "pares";
  let html = "";

  // recorre del 1 al 10 y filtra según pares/impares
  for (let n = 1; n <= 10; n++) {
    if ((n % 2 === 0) === esPar) {
      console.log(`Tabla del ${n}`);
      html += `<div class="section"><h2>Tabla del ${n}</h2>`;
      for (let i = 1; i <= 12; i++) {
        let linea = `${n} x ${i} = ${n * i}`;
        console.log(linea);
        html += `<p>${linea}</p>`;
      }
      html += `</div>`;
    }
  }

  cont.innerHTML = html;
} else {
  cont.textContent = "Opción no válida";
  console.log("Opción no válida");
}
