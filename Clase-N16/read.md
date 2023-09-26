### Arrays

const frutas = ['manzana', 'plátano', 'naranja', 'uva'];

console.log(frutas);

# Acceder al arrays y metodos at()
const frutas = ['manzana', 'plátano', 'naranja', 'uva'];

// Acceder a un elemento específico del array
console.log(frutas[0]); // Salida: manzana
console.log(frutas[2]); // Salida: naranja

// Utilizar el método at() para acceder a un elemento específico del array
console.log(frutas.at(1)); // Salida: plátano
console.log(frutas.at(3)); // Salida: uva

# Tipos y cantidad
#Ejemplo 
const datos =['Jose',23, true, 'Calle Falsa 123'];
console.log(datos.length); 

### Array de números:
const numeros = [1, 2, 3, 4, 5];
console.log(numeros); // Salida: [1, 2, 3, 4, 5]
console.log(numeros.length); // Salida: 5 (cantidad de elementos)

### Array de cadenas de texto:
const nombres = ['Juan', 'María', 'Pedro'];
console.log(nombres); // Salida: ['Juan', 'María', 'Pedro']
console.log(nombres.length); // Salida: 3 (cantidad de elementos)

### Array de booleanos:
const booleanos = [true, false, true, true];
console.log(booleanos); // Salida: [true, false, true, true]
console.log(booleanos.length); // Salida: 4 (cantidad de elementos)

### Array de objetos:
const personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
  { nombre: 'Pedro', edad: 35 }
];
console.log(personas); // Salida: [{ nombre: 'Juan', edad: 30 }, { nombre: 'María', edad: 25 }, { nombre: 'Pedro', edad: 35 }]
console.log(personas.length); // Salida: 3 (cantidad de elementos)




## Método push(): Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.

const frutas = ['manzana', 'plátano', 'naranja'];

frutas.push('uva');
console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva']

frutas.push('sandía', 'melón');
console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva', 'sandía', 'melón']

## Método unshift(): Agrega uno o más elementos al principio del array y devuelve la nueva longitud del array.

const numeros = [2, 3, 4, 5];

numeros.unshift(1);
console.log(numeros); // Salida: [1, 2, 3, 4, 5]

numeros.unshift(-2, -1, 0);
console.log(numeros); // Salida: [-2, -1, 0, 1, 2, 3, 4, 5]

## Método pop(): Elimina el último elemento del array y lo devuelve.

const colores = ['rojo', 'azul', 'verde'];

const ultimoColor = colores.pop();
console.log(colores); // Salida: ['rojo', 'azul']
console.log(ultimoColor); // Salida: 'verde'

## Método shift(): Elimina el primer elemento del array y lo devuelve.

const letras = ['a', 'b', 'c'];

const primeraLetra = letras.shift();
console.log(letras); // Salida: ['b', 'c']
console.log(primeraLetra); // Salida: 'a'


### Estos métodos te permiten agregar elementos al final o al principio del array (push() y unshift() respectivamente) y eliminar elementos del final o del principio del array (pop() y shift() respectivamente).

## Concatenar elementos
### Concat() 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultado = array1.concat(array2, array3);
console.log(resultado); // Salida: [1, 2, 3, 4, 5, 6, 7, 8, 9]

### join()
const elementos = ['Hola', ' ', 'mundo', '!'];

// Utilizando el método join()
const concatenado = elementos.join('');
console.log(concatenado); // Salida: 'Hola mundo!'

// Utilizando un bucle for...of
let concatenado2 = '';
for (let elemento of elementos) {
  concatenado2 += elemento;
}
console.log(concatenado2); // Salida: 'Hola mundo!'

### Método slice(): Retorna una copia superficial de una porción del array original sin modificarlo.

const numeros = [1, 2, 3, 4, 5];

const subArray = numeros.slice(2, 4);
console.log(subArray); // Salida: [3, 4]

const primerosTres = numeros.slice(0, 3);
console.log(primerosTres); // Salida: [1, 2, 3]


### slice()

const numeros = [1, 2, 3, 4, 5];

const subArray = numeros.slice(2, 4);
console.log(subArray); // Salida: [3, 4]

const primerosTres = numeros.slice(0, 3);
console.log(primerosTres); // Salida: [1, 2, 3]

## Sort()
const frutas = ['manzana', 'naranja', 'plátano', 'uva'];

frutas.sort();
console.log(frutas); // Salida: ['manzana', 'naranja', 'plátano', 'uva']

const numeros = [10, 5, 8, 2, 1];

numeros.sort();
console.log(numeros); // Salida: [1, 10, 2, 5, 8]

## Ejemplo  ascendente o descendente
const numeros = [10, 5, 8, 2, 1];

numeros.sort(function(a, b) {
  return a - b;
});

console.log(numeros); // Salida: [1, 2, 5, 8, 10]

const numeros = [10, 5, 8, 2, 1];

numeros.sort(function(a, b) {
  return b - a;
});

console.log(numeros); // Salida: [10, 8, 5, 2, 1]


const numeros = [1, 2, 3, 4, 5];

## forEach()
#### forEach() itera sobre cada elemento del array y ejecuta una función para cada uno.

numeros.forEach(function(numero) {
  console.log(numero);
});
// Salida:
// 1
// 2
// 3
// 4
// 5
## every()
const numeros = [1, 2, 3, 4, 5];

const todosMayoresQueCero = numeros.every(function(numero) {
  return numero > 0;
});

console.log(todosMayoresQueCero); // Salida: true

const todosPares = numeros.every(function(numero) {
  return numero % 2 === 0;
});

console.log(todosPares); // Salida: false

## some()
const numeros = [1, 2, 3, 4, 5];

const algunoMayorQueTres = numeros.some(function(numero) {
  return numero > 3;
});

console.log(algunoMayorQueTres); // Salida: true

const algunoNegativo = numeros.some(function(numero) {
  return numero < 0;
});

console.log(algunoNegativo); // Salida: false

## reduce()
### reduce() aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

const suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // Salida: 15



## map()
### map() crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
const duplicados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(duplicados); // Salida: [2, 4, 6, 8, 10]

## filter()
### filter() crea un nuevo array con los elementos que cumplen una condición especificada en una función.
const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});
console.log(pares); // Salida: [2, 4]


## find()
### find() devuelve el primer elemento del array que cumple con una condición especificada en una función.
const encontrado = numeros.find(function(numero) {
  return numero > 3;
});
console.log(encontrado); // Salida: 4
