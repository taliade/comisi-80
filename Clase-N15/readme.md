# Objetos

## Como crear un objeto 

var perro = {
    nombre:'max ',
    edad: 5,
    vivo : true
};


console.log(perro.vivo);

var perro2 ={
    nombre:'pipi ',
    edad: 2,
    vivo : true
}

console.log(perro2.nombre);


### Como acceder a atributos 

const myObj = {};

// Definir una nueva propiedad en el objeto "myObj"
Object.defineProperty(myObj, 'nombre', {
  value: 'John',
  writable: false, // La propiedad no puede ser modificada
  enumerable: true, // La propiedad es enumerable
  configurable: true // La propiedad es configurable
});

console.log(myObj.nombre); // Salida: John

// Intentar modificar la propiedad (lo cual no será posible debido a writable: false)
myObj.nombre = 'Jane';

console.log(myObj.nombre); // Salida: John (la propiedad no se modificó)







const mascota = {
    nombre:'Firulais',
    familia: 'Perro',
    raza:'Caniche',
    peso: 3000,
    edad: '7 meses'
};

console.log(mascota.nombre);
console.log(mascota.peso);
console.log(mascota['familia']);
console.log(mascota['raza']);

### Podemos Añadir valores a nuestro objeto ya creado

mascota.color = 'blanco';

## Recorrer un objeto

const persona = {
  nombre: 'John',
  apellido: 'Ramirez',
  edad: 30,
  profesion: 'Desarrollador'
};

// Recorrer el objeto (persona) utilizando un bucle "for...in"
for (let clave in persona) {
  if (persona.hasOwnProperty(clave)) {
    console.log(clave + ': ' + persona[clave]);
  }
}
#### utilizando el método "hasOwnProperty" para evitar recorrer propiedades heredadas. Luego, imprimimos la clave y el valor correspondiente utilizando la notación de corchetes para acceder a los valores del objeto.


### METODOS 

const mascota = {
    nombre:'Firulais',
    familia: 'Perro',
    raza:'Caniche',
    peso: 3000,
    edad: '7 meses',
    sonido: 'Guau Guau!',
    saludar: fuction(){
        console.log(this.sonido);}
};

mascota.saludar();

### Otros objetos Funcionales 

function Mascota(nombre,familia,raza,peso,edad,sonido){
    this.nombre = nombre;
    this.familia = familia;
    this.raza =raza;
    this.peso =peso;
    this.edad = edad;
    this.sonido = sonido;
    
    this.saludar = function(){
    console.log(this.sonido);
    }
}

 // Crear una instancia de la clase Mascota
const miMascota = new Mascota('Firulais', 'Perro', 'Labrador', 20, 5, 'Guau Guau!');

// Invocar el método saludar de la instancia
miMascota.saludar();  



## Objeto de clase -  class
#### 
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear un objeto de la clase Persona
const persona1 = new Persona('Juan', 25);

// Acceder a las propiedades del objeto
console.log(persona1.nombre); // Salida: Juan
console.log(persona1.edad); // Salida: 25

// Invocar el método saludar del objeto
persona1.saludar(); // Salida: Hola, mi nombre es Juan y tengo 25 años.


###  Objetos y Arrays

const listaTareas = [
  {
    id: 1,
    tarea: 'Hacer la compra',
    completada: false
  },
  {
    id: 2,
    tarea: 'Limpiar la casa',
    completada: true
  },
  {
    id: 3,
    tarea: 'Pasear al perro',
    completada: false
  }
];

## Mostrar todas las tareas
console.log('Lista de tareas:');
for (const tarea of listaTareas) {
  console.log(`ID: ${tarea.id}, Tarea: ${tarea.tarea}, Completada: ${tarea.completada}`);
}

### Agregar una nueva tarea
const nuevaTarea = {
  id: 4,
  tarea: 'Hacer ejercicio',
  completada: false
};
listaTareas.push(nuevaTarea);

## Obtener solo los nombres de cada tarea
const nombresTareas = listaTareas.map(tarea => tarea.tarea); // metodo map 

### Mostrar los nombres de las tareas
console.log('Nombres de las tareas:');
for (const nombreTarea of nombresTareas) {
  console.log(nombreTarea);
}