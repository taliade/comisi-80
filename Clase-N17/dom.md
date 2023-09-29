Documentos 

console.log(document); // Muestra el objeto Document en la consola


attr = Atributos 

const link = document.querySelector('a');
const hrefAttr = link.attributes.href;
console.log(hrefAttr); // Muestra el objeto Attr que representa el atributo href del enlace


element
const divElement = document.querySelector('div');
console.log(divElement); // Muestra el objeto Element que representa el primer div encontrado en el documento


text = texto 
const paragraph = document.querySelector('p');
const textContent = paragraph.textContent;
console.log(textContent); // Muestra el contenido de texto dentro del párrafo seleccionado


getElementById:
El método getElementById te permite acceder a un elemento del DOM utilizando su ID único. Retorna el primer elemento que coincida con el ID especificado. Aquí tienes un ejemplo:

// HTML: <div id="myDiv">Contenido del div</div>
const myDiv = document.getElementById('myDiv');
console.log(myDiv); // Muestra el elemento div con el ID "myDiv"


getElementsByClassName:
El método getElementsByClassName te permite acceder a una lista de elementos del DOM que coincidan con una clase específica. Retorna una colección de elementos. Aquí tienes un ejemplo:

// HTML: <p class="myClass">Primer párrafo</p><p class="myClass">Segundo párrafo</p>
const paragraphs = document.getElementsByClassName('myClass');
console.log(paragraphs); // Muestra una colección de elementos p con la clase "myClass"


getElementsByName:
El método getElementsByName te permite acceder a una lista de elementos del DOM que coincidan con el atributo name especificado. Retorna una colección de elementos. Aquí tienes un ejemplo:


// HTML: <input type="text" name="myInput" value="Ejemplo">
const inputs = document.getElementsByName('myInput');
console.log(inputs); // Muestra una colección de elementos input con el atributo name "myInput"


getElementByTagName:
El método getElementByTagName te permite acceder a una lista de elementos del DOM que coincidan con el nombre de la etiqueta HTML especificada. Retorna el primer elemento que coincida con la etiqueta. Aquí tienes un ejemplo:

// HTML: <p>Primer párrafo</p><p>Segundo párrafo</p>
const firstParagraph = document.getElementsByTagName('p')[0];
console.log(firstParagraph); // Muestra el primer elemento p encontrado en el documento


getElementsByTagNameNS:
El método getElementsByTagNameNS te permite acceder a una lista de elementos del DOM que coincidan con el espacio de nombres del elemento y el nombre de la etiqueta especificados. Retorna una colección de elementos. Aquí tienes un ejemplo:

// HTML: <svg xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40"/></svg>
const circles = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'circle');
console.log(circles); // Muestra una colección de elementos circle dentro del espacio de nombres SVG


createElement('div'):
El método createElement te permite crear un nuevo elemento HTML especificando el nombre de la etiqueta. Puedes asignar atributos y contenido al elemento antes de agregarlo al DOM. Aquí tienes un ejemplo:

const newDiv = document.createElement('div');
newDiv.textContent = 'Contenido del nuevo div';
document.body.appendChild(newDiv);


### createTextNode('Hola Mundo'):
El método createTextNode te permite crear un nuevo nodo de texto con el contenido especificado. Puedes agregar este nodo de texto como hijo de otros elementos en el DOM. Aquí tienes un ejemplo:


const newTextNode = document.createTextNode('Hola Mundo');
const paragraph = document.createElement('p');
paragraph.appendChild(newTextNode);
document.body.appendChild(paragraph);

## padre.appendChild(hijo):
El método appendChild te permite agregar un elemento hijo al final de otro elemento padre en el DOM. Aquí tienes un ejemplo

const parentElement = document.getElementById('parent');
const childElement = document.createElement('div');
parentElement.appendChild(childElement);

### nodo.innerHTML = '<p>Hola</p>':
La propiedad innerHTML te permite establecer o obtener el contenido HTML de un elemento. Puedes usarla para modificar el contenido HTML de un elemento existente. Aquí tienes un ejemplo:

const element = document.getElementById('myElement');
element.innerHTML = '<p>Hola</p>';

## nodo.innerText = 'Hola':
La propiedad innerText te permite establecer o obtener el contenido de texto de un elemento. A diferencia de innerHTML, innerText solo maneja texto plano y no interpreta HTML. Aquí tienes un ejemplo:

const element = document.getElementById('myElement');
element.innerText = 'Hola';

## document.write('texto'):
La función document.write te permite escribir contenido directamente en el documento HTML mientras se carga. Ten en cuenta que si se llama después de que el documento se haya cargado, puede reemplazar todo el contenido HTML existente. Aquí tienes un ejemplo:

document.write('Texto que se escribirá en el documento HTML');

## Evento click:
El evento "click" se dispara cuando el usuario hace clic en un elemento. Puedes utilizar el manejador de eventos "onclick" para ejecutar una función cuando se produce este evento. Aquí tienes un ejemplo:

const button = document.querySelector('button');

button.onclick = function() {
  console.log('Se hizo clic en el botón');
};

## Evento submit:
El evento "submit" se dispara cuando se envía un formulario. Puedes utilizar el manejador de eventos "onsubmit" en el elemento del formulario para ejecutar una función cuando se produce este evento. Aquí tienes un ejemplo:

const form = document.querySelector('form');

form.onsubmit = function(event) {
  event.preventDefault(); // Evita el envío del formulario
  console.log('Se envió el formulario');
};


## Evento mouseover:
El evento "mouseover" se dispara cuando el cursor del mouse se mueve sobre un elemento. Puedes utilizar el manejador de eventos "onmouseover" para ejecutar una función cuando se produce este evento. Aquí tienes un ejemplo:

const element = document.querySelector('.elemento');

element.onmouseover = function() {
  console.log('El cursor del mouse está sobre el elemento');
};

## Evento keydown:
El evento "keydown" se dispara cuando una tecla del teclado se presiona. Puedes utilizar el manejador de eventos "onkeydown" en el documento o en un elemento específico para ejecutar una función cuando se produce este evento. Aquí tienes un ejemplo:

document.onkeydown = function(event) {
  console.log('Se presionó una tecla');
  console.log('Código de tecla:', event.keyCode);
};

