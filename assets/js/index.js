/*****************************************
 **             SETUP INICIAL           **
 *****************************************/

//* SELECTORES
let operacionesForm = document.querySelector('#id-operaciones');
let temperaturaForm = document.querySelector('#id-temperaturas');
let diasForm = document.querySelector('#id-dias');
let sumaPromedioForm = document.querySelector('#id-suma-promedio')

//* EVENTLISTENERS
//*  Podria usar un solo event listener que escuchara todos los forms?
//! SIP pero ya no lo hice. Hay que escuchar el evento submit en el 
//! container de los forms y a través del event.target se podrá capturar
//! el elemento que ha disparado. Así no se desperdecia capacidad de proceso,
//! pues los listener son funciones "caras" debido a que están oyendo 
//! constantemente la interacción en la ventana.
operacionesForm.addEventListener('submit', operaciones);
temperaturaForm.addEventListener('submit', temperaturas);
diasForm.addEventListener('submit', dias);
sumaPromedioForm.addEventListener('submit', sumaPromedio);


/*****************************************
 **       EJERCICIO 1 OPERACIONES       **
 *****************************************/

function operaciones (e) {
    e.preventDefault();

    const num1 = Number(e.target[0].value);
    const num2 = Number(e.target[1].value);
    const resp = e.target[3];

    resp.innerHTML = `${num1} + ${num2} = ${num1 + num2}&#10;${num1} - ${num2} = ${num1 - num2}&#10;${num1} * ${num2} = ${num1 * num2}&#10;${num1} / ${num2} = ${(num1 / num2).toFixed(1)}`;
}

/*****************************************
 **       EJERCICIO 2 TEMPERATURAS      **
 *****************************************/
function temperaturas (e) {
    e.preventDefault();

    const temp = Number(e.target[0].value);
    const kelv = (temp + 273.15).toFixed(1);
    const fahr = ((temp * (9/5)) + 32).toFixed(1);

    e.target[2].value = kelv;
    e.target[3].value = fahr;
}

/*****************************************
 **    EJERCICIO 3 AÑOS-SEMANAS-DÍAS    **
 *****************************************/
function dias (e) {
    e.preventDefault();

    const dias = Number(e.target[0].value); 
    const resultado = [0,0,0];

    resultado[0] = Math.floor(dias / 365);
    resultado[1] = Math.floor((dias % 365) / 7);
    resultado[2] = (dias % 365) % 7;

    // esto lo podría hacer directamente en la asignación pero lo hago 
    // así para evitar mensajes como "0 años, 0 semanas, 3 días"
    // El programa devolverá solo "3 días"
    let mensaje = 'Es/Son: ';
    resultado[0] > 0 ? mensaje += `${resultado[0]} año(s) ` : mensaje += '';
    resultado[1] > 0 ? mensaje += `${resultado[1]} semana(s) ` : mensaje += '';
    resultado[2] > 0 ? mensaje += `${resultado[2]} día(s) ` : mensaje += '';

    e.target[2].innerHTML = mensaje;
} 

/*****************************************
 **     EJERCICIO 4 SUMA Y PROMEDIA     **
 *****************************************/
function sumaPromedio (e) {
    e.preventDefault();

    let suma = 0, promedio = 0;
    
    for (i = 0; i < 5; i++) { 
      suma += Number(document.forms[3][i].value);
    }
    promedio = suma / 5;

    document.forms[3][6].innerText = suma;
    document.forms[3][7].innerText = promedio;
}

/**********************************************
 *TODO              Testing                  **
 **********************************************/

