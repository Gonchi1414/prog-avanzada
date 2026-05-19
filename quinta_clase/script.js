const botonTema = document.getElementById("btn-tema"); // busca el elemento con el id btn-tema y lo guarda en la variable botonTema
console.log(botonTema);
const tarjeta = document.querySelector("main");
botonTema.addEventListener("click", () => {
  // agrega un evento de click al botonTema
  tarjeta.classList.toggle("dark-mode"); // agrega o quita la clase dark a la tarjeta
  document.body.classList.toggle("dark-mode"); // agrega o quita la clase dark al body
});
const botonSincrono = document.getElementById("btn-sinc");
const botonAsincrono = document.getElementById("btn-async");
const divResultado = document.getElementById("resultado");
/*
// funcion sincrona
botonSincrono.addEventListener('click', function () {
  console.log("Inicio de la función sincrona");
  divResultado.innerHTML = "Resultado de la función sincrona... <br>";
  const saludo = "Hola vengo del evento sincronico";
  divResultado.innerHTML += saludo + "<br>";
  divResultado.innerHTML += "Fin de la función sincrona";
});
// funcion asincrona
botonAsincrono.addEventListener("click", async () => {
  console.log("Inicio de la función asincrona");
  divResultado.innerHTML =
    "Iniciando resultado de la función asincrona... <br>";
  divResultado.innerHTML +=
    "esperare 5 segundos para obetenr el resultado... <br>";
  botonAsincrono.disabled = true;
  await new Promise((resolve) => setTimeout(resolve, 5000)); // espera 2 segundos
  divResultado.innerHTML += "Fin de la función asincrona";
  botonAsincrono.disabled = false;
});*/
/////////////////////////////////////
// const btnAgregar = document.getElementById("btn-agregar");
// const inputTarea = document.getElementById("input-item");
// const listaTareas = document.getElementById("lista-dinamica");
// btnAgregar.addEventListener("click", () => {
//   const item = inputTarea.value.trim(); 
//   if (item === "") return;
//   const nuevoIten = document.createElement("li");
//   const spanTexto = document.createElement("span");
//   const btnEliminar = document.createElement("button");
//   spanTexto.textContent = item;
//   btnEliminar.textContent = "Eliminar";
//   btnEliminar.classList.add("btn-eliminar");
//   btnEliminar.addEventListener("click", () => {
//     nuevoIten.remove();
//   });
//   nuevoIten.appendChild(spanTexto);
//   nuevoIten.appendChild(btnEliminar);
//   listaTareas.appendChild(nuevoIten);
//   inputTarea.value = "";
// });
////////////////////////////////////////////
const btnAnimarCss = document.getElementById("btn-animar-css");
const cajaCss = document.getElementById("caja-css");
btnAnimarCss.addEventListener("click", () => {
    cajaCss.classList.toggle('caja-css-animada')
})

const btnAnimarJs = document.getElementById("btn-animar-js");
const cajaJs = document.getElementById("caja-js");
let animandoJS = false;
btnAnimarJs.addEventListener("click", () => {
    console.log('entra');
    
    if (animandoJS) return;
    animandoJS = true
    let posicionActual =0;
    const destino = 800
    function animar() {
        posicionActual +=50;
        cajaJs.style.transform = `translateX(${posicionActual}px)`;
        if (posicionActual < destino) {
            requestAnimationFrame(animar);
        } else {
            // setTimeout(() => {
            //     cajaJs.style.transform = `translateX(0px)`;
            //     animandoJS = false;
            // })
            animandoJS = false;
        }
    }
    requestAnimationFrame(animar);
})
