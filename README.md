## Desafio 

![captura][0]

|Bootcamp 2022 Modulo 4|Fundamentos de Javascript|
|----|-----|
|**Unidad 1**|Introducción a Javascript|
|**Día Bootcamp**|39|
|**Día Modulo**|2/15|

<hr>

## REFERENCIAS: *references...my precious!* 😁

- [MDN sobre `window.document.forms`][2]
- [MDN sobre `HTMLCollection`][3]

|N°|Estado|Requisito|
|:-------:|:------:|:------:|
|1|OK|Realizar diagrama de flujo para `+ - * /`  y  `%` de dos números ingresados por el usuario.|
|2|OK|Solicitar 2 números, *x,y > 0* y devolver +,-,*,/,%|
|3|OK|Solicitar t° Celsius y devolver F° y K° correspondientes|
|4|OK|Solicitar *X* días y devolver años-semanas-días correspondientes|
|5|OK|Solicitar 5 números y devolver suma y promedio|


Este desafío es parte del módulo 4. Consiste en una serie de 4 pequeños ejercicios por consola para utilizar sentencias básicas de Javascript y operadores matemáticos. Se ha utilizado Bootstrap para dar formato a una vista muy sencilla.

## IMPLEMENTACIÓN: 

- Se han utilizado cuatro formularios simples para recibir los datos, cada uno con su propio `eventListener` que envia la ejecución a la función *handler*. Este ejercicio se realizó hace varias semanas, por lo que el código es un poco torpe, pero logra el objetivo. Se usan validaciones de HTML para evitar validar con Javascript y la vista general se realizó sobre Bootstrap. El requerimiento 1 se cumple con la siguiente captura (en la carpeta raíz se provee el archivo para Pseint "flowChart.psc"): 

![flowChart][1]

<hr>

## NOTAS:

- Se podría escuchar el evento `submit` directamente en el contenedor de los formularios para evitar 3 listeners?. De esta manera el *handler* tendría la función de detectar desde qué formulario `event.target` se realizó `submit` y en base a eso enviar los parámetros capturados directamente a la función que va a calcular/pintar los resultados.
- Descubrí curioseando que el objeto `window.document` entre sus propiedades, tiene `links` y `forms` y ambas devuelven un objeto `HTMLCollection`. Este objeto es similar a un array en que provee un índice que en el caso de `forms` lista todos los elementos del formulario capturado, aunque no es un objeto iterable por lo que no se pueden utilizar métodos de array sobre él. Algunas capturas: 

![captura][4]
![captura][5]
![captura][6]

<!-- ENLACES DE LAS REFERENCIAS -->

[6]:./assets/utils/screenshot-document-forms2.png
[5]:./assets/utils/screenshot-document-forms1.png
[4]:./assets/utils/screenshot-document-forms.png
[3]:https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
[2]:https://developer.mozilla.org/en-US/docs/Web/API/Document/forms
[1]:./assets/utils/flowChart.png
[0]:./assets/utils/screenshot.png