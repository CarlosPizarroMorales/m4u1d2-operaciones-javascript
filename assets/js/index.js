// podria usar una regla para usar pseudo selectores aca?
let operaForm = document.querySelector('#id-operaciones');

// Podria usar un solo event listener que escuchara todos los inputs?
operaForm.addEventListener('submit', operaciones);


function operaciones (e) {
    e.preventDefault();

    const num1 = Number(e.target[0].value);
    const num2 = Number(e.target[1].value);
    const resp = e.target[3];

    if (num2 > 0 && num1 > 0) {
        resp.innerHTML = `${num1} + ${num2} = ${num1 + num2}&#10;${num1} - ${num2} = ${num1 - num2}&#10;${num1} * ${num2} = ${num1 * num2}&#10;${num1} / ${num2} = ${num1 / num2}`;
    } else {
        resp.innerHTML = 'Debes elegir 2 numeros mayores a 0.'
    }

    // if (Number(operaNum1.value) > 0 && Number(operaNum2.value) > 0) {
    //     const sum = operaNum1 + operaNum2;
    //     const res = operaNum1 - operaNum2;
    //     const mul = operaNum1 * operaNum2;
    //     const div = operaNum1 / operaNum2;
    //     document.querySelector('#opera-resultado').innerText = `
    //     La suma es: ${sum}
    //     La resta es: ${res}
    //     La multiplicación es: ${mul}
    //     La división es: ${div}
    //     `
    // }
}
