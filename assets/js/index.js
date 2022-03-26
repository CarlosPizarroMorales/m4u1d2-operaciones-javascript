// ? podria usar una regla para usar pseudo selectores aca?
let operacionesForm = document.querySelector('#id-operaciones');
let temperaturaForm = document.querySelector('#id-temperaturas');
let diasForm = document.querySelector('#id-dias');

// ? Podria usar un solo event listener que escuchara todos los forms?
operacionesForm.addEventListener('submit', operaciones);
temperaturaForm.addEventListener('submit', temperaturas);
diasForm.addEventListener('submit', dias);

function operaciones (e) {
    e.preventDefault();

    const num1 = Number(e.target[0].value);
    const num2 = Number(e.target[1].value);
    const resp = e.target[3];

    resp.innerHTML = `${num1} + ${num2} = ${num1 + num2}&#10;${num1} - ${num2} = ${num1 - num2}&#10;${num1} * ${num2} = ${num1 * num2}&#10;${num1} / ${num2} = ${num1 / num2}`;
}


function temperaturas (e) {
    e.preventDefault();

    const temp = Number(e.target[0].value);
    const kelv = (temp + 273.15).toFixed(2);
    const fahr = ((temp * (9/5)) + 32).toFixed(2);

    e.target[2].value = kelv;
    e.target[3].value = fahr;
}

function dias (e) {
    e.preventDefault();

    const dias = Number(e.target[0].value); 
    const resultado = [0,0,0];

    resultado[0] = Math.floor(dias / 365);
    resultado[1] = Math.floor((dias % 365) / 7);
    resultado[2] = (dias % 365) % 7;

    let mensaje = 'Es(son) ';
    resultado[0] > 0 ? mensaje += `${resultado[0]} año(s) ` : mensaje += '';
    resultado[1] > 0 ? mensaje += `${resultado[1]} semana(s) ` : mensaje += '';
    resultado[2] > 0 ? mensaje += `${resultado[2]} día(s) ` : mensaje += '';

    e.target[2].innerHTML = mensaje;
}  