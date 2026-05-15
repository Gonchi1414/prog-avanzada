// 1. Seleccionamos el botón y la tarjeta que queremos modificar
// 'getElementById' busca un elemento en el HTML por su atributo 'id'
const botonTema = document.getElementById('btn-tema');

// 'querySelector' busca el primer elemento que coincida con la etiqueta dada (en este caso, la etiqueta <main>)
const tarjeta = document.querySelector('main');

// 2. Agregamos un "escuchador de eventos" (Event Listener) al botón
// Esto le dice al navegador: "Cuando alguien haga 'click' en este botón, ejecuta esta función"
botonTema.addEventListener('click', function () {

    // 3. Modificamos las clases de la tarjeta
    // 'classList' nos permite acceder a la lista de clases de un elemento HTML
    // 'toggle' es un método muy útil que funciona como un interruptor:
    // - Si el elemento NO tiene la clase 'dark-mode', se la agrega.
    // - Si el elemento YA TIENE la clase 'dark-mode', se la quita.
    tarjeta.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode'); // También afectamos al fondo de la pantalla

});

// =====================================================================
// EJEMPLO DE FUNCIONES: Síncrona vs Asíncrona (Integradas al HTML)
// =====================================================================

const btnSincrono = document.getElementById('btn-sincrono');
const btnAsincrono = document.getElementById('btn-asincrono');
const divResultado = document.getElementById('resultado-ejemplos');

// 1. Función Sincrónica
btnSincrono.addEventListener('click', function () {
    divResultado.innerHTML = "Iniciando saludo síncrono...<br>";

    // Ejecución inmediata
    const saludo = "¡Hola! Este es un mensaje síncrono al instante.";
    divResultado.innerHTML += saludo + "<br>";
    divResultado.innerHTML += "Fin del saludo síncrono.";
});

// 2. Función Asincrónica
btnAsincrono.addEventListener('click', async function () {
    divResultado.innerHTML = "Iniciando petición asíncrona...<br>";
    divResultado.innerHTML += "Esperando 2 segundos...<br>";

    // Deshabilitamos el botón para evitar múltiples clics mientras carga
    btnAsincrono.disabled = true;

    // Simulamos una demora de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));

    divResultado.innerHTML += "<strong>¡Datos recibidos después de 2 segundos!</strong><br>";
    divResultado.innerHTML += "Fin de la petición asíncrona.";

    // Volvemos a habilitar el botón
    btnAsincrono.disabled = false;
});

// =====================================================================
// EJEMPLO DE MANIPULACIÓN DEL DOM: createElement, appendChild, remove
// =====================================================================

const btnAgregar = document.getElementById('btn-agregar');
const inputItem = document.getElementById('input-item');
const listaDinamica = document.getElementById('lista-dinamica');

btnAgregar.addEventListener('click', function () {
    const texto = inputItem.value.trim(); // Obtenemos el texto ingresado
    if (texto === "") return; // Si está vacío, no hacemos nada

    // 1. createElement: Creamos nuevos "nodos" (elementos HTML) desde cero
    const nuevoLi = document.createElement('li');
    const spanTexto = document.createElement('span');
    const btnEliminar = document.createElement('button');

    // Configuramos los elementos
    spanTexto.textContent = texto;
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('btn-eliminar');

    // 2. remove: Le decimos al botón 'Eliminar' qué debe hacer al ser clickeado
    btnEliminar.addEventListener('click', function () {
        // remove() elimina por completo el elemento del DOM
        nuevoLi.remove();
    });

    // 3. appendChild: Insertamos un nodo DENTRO de otro nodo "padre"
    // Primero, metemos el texto y el botón dentro de la etiqueta <li>
    nuevoLi.appendChild(spanTexto);
    nuevoLi.appendChild(btnEliminar);

    // Finalmente, metemos el <li> ya armado dentro de la lista principal <ul>
    listaDinamica.appendChild(nuevoLi);

    // Limpiamos la caja de texto
    inputItem.value = '';
});

// =====================================================================
// EJEMPLO DE ANIMACIONES: CSS vs JS
// =====================================================================

// 1. ANIMACIÓN POR CSS
// JS casi no hace nada, solo prende y apaga un "interruptor" (la clase)
// El navegador es quien usa la tarjeta gráfica para calcular la animación.
const btnAnimCss = document.getElementById('btn-anim-css');
const cajaCss = document.getElementById('caja-css');

btnAnimCss.addEventListener('click', function () {
    // Al agregar esta clase, CSS detecta el cambio de posición y lo anima.
    cajaCss.classList.toggle('caja-css-animada');
});


// 2. ANIMACIÓN POR JAVASCRIPT
// JS calcula manualmente dónde debe estar la caja cuadro por cuadro.
const btnAnimJs = document.getElementById('btn-anim-js');
const cajaJs = document.getElementById('caja-js');
let animandoJs = false;

btnAnimJs.addEventListener('click', function () {
    if (animandoJs) return; // Si ya se está moviendo, ignoramos el clic
    animandoJs = true;

    let posicionActual = 0;
    const destino = 200; // Queremos moverla 200px (igual que en CSS)

    // Función que pinta UN SOLO CUADRO (frame) de la animación
    function animarFrame() {
        posicionActual += 4; // Avanzamos 4 pixeles por frame

        // JS modifica el estilo directamente en el HTML (estilo inline)
        cajaJs.style.transform = `translateX(${posicionActual}px)`;

        // Si aún no llegamos al destino...
        if (posicionActual < destino) {
            // requestAnimationFrame le dice al navegador: "antes de pintar la siguiente 
            // pantalla (usualmente en 16ms), ejecuta de nuevo esta función"
            requestAnimationFrame(animarFrame);
        } else {
            // Al terminar, la reseteamos después de 1 segundo para poder repetir
            setTimeout(() => {
                cajaJs.style.transform = `translateX(0px)`;
                animandoJs = false;
            }, 1000);
        }
    }

    // "Pateamos" la bola de nieve iniciando el primer frame
    requestAnimationFrame(animarFrame);
});
