const intentos = 6;
let palabra = "APPLE";


function leerintento() {
    let intentos = document.getElementById("guess-input");
    intentos = intentos.value;
    intentos = intentos.toUpperCase();
    return intentos
}

const button = document.getElementById("guess-button");
button.addEventListener('click', intentar);

function intentar() {
    const INTENTO = leerintento();

    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }

    const GRID = document.getElementById("grid");
    const ROW = document.getElementsByClassName("row");
//No necesito row.classname pq la linea de arriba ya obtiene el input con una clase row.
    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237'
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);

    intentos--
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😖</h1>")

    }
}
function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input")
    INPUT.disabled = true;
    const BOTON = document.getElementById("guess-button");
    BOTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}