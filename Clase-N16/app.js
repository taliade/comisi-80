alert ('Elementos Arrays');

// const frutas = ['manzana', 'plátano', 'naranja', 'uva'];

// console.log(frutas);

// // Acceder a un elemento específico del array
// console.log(frutas[0]); // Salida: manzana
// console.log(frutas[2]); // Salida: naranja

// // Utilizar el método at() para acceder a un elemento específico del array
// console.log(frutas.at(1)); // Salida: plátano
// console.log(frutas.at(3)); // Salida: uva

const datos =['Jose',23, true, 'Calle Falsa 123'];
console.log(datos.length); // 

// Array de números:
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros); // Salida: [1, 2, 3, 4, 5]
// console.log(numeros.length); // Salida: 5 (cantidad de elementos)

/// Array de cadenas de texto:
const nombres = ['Juan', 'María', 'Pedro'];
console.log(nombres); // Salida: ['Juan', 'María', 'Pedro']
console.log(nombres.length); // Salida: 3 (cantidad de elementos)

//Array de booleanos:
const booleanos = [true, false, true, true];
console.log(booleanos); // Salida: [true, false, true, true]
console.log(booleanos.length); // Salida: 4 (cantidad de elementos)

// Array de objetos:
const personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
  { nombre: 'Pedro', edad: 35 }
];
console.log(personas); // Salida: [{ nombre: 'Juan', edad: 30 }, { nombre: 'María', edad: 25 }, { nombre: 'Pedro', edad: 35 }]
console.log(personas.length); // Salida: 3 (cantidad de elementos)


// const frutas = ['manzana', 'plátano', 'naranja'];

// frutas.push('uva');
// console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva']

// frutas.push('sandía', 'melón');
// console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva', 'sandía', 'melón']

// frutas.pop(); // queda vacio, elimino e ultimo elemento 

// console.log(frutas);

// frutas.shift(); // elimino el primer elemento de mi array

// console.log(frutas);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const resultado = array1.concat(array3, array2);
// console.log(resultado); // Salida: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const elementos = ['Hola', ' ', 'mundo', '!'];

// // Utilizando el método join()
// const concatenado = elementos.join('*');
// console.log(concatenado); // Salida: 'Hola mundo!'

// // Utilizando un bucle for...of
// let concatenado2 = '-';
// for (let elemento of elementos) {
//   concatenado2 += elemento;
// }
// console.log(concatenado2); // Salida: 'Hola mundo!'


// const numero = [1, 2, 3, 4, 5];

// const subArray = numero.slice(2, 5);
// console.log(subArray); // Salida: [3, 4 , 5]

//  const primerosTres = numero.slice(0, 3);
//  console.log(primerosTres); // Salida: [1, 2, 3]


//  const animales  = [ 'Pato', 'Perro','Gato','Loro','Puma' ];
//  console.log(animales); // Salida: [|
//  console.log(animales.slice(0,3));
//  console.log(animales.slice(2,4));

//  const frutas = ['manzana', 'naranja', 'plátano', 'uva'];

//  frutas.sort();
//  console.log(frutas); // Salida: ['manzana', 'naranja', 'plátano', 'uva']
 
//  const numer = [10, 5, 8, 2, 1];
 
//  numer.sort();
//  console.log(numer); // Salida: [1, 10, 2, 5, 8]

//  const numeros = [10, 5, 8, 2, 1];

// numeros.sort(function(a, b) {
//   return a - b;
// });

// console.log(numeros); // Salida: [1, 2, 5, 8, 10]

// const numeros = [10, 5, 8, 2, 1];

// numeros.sort(function(a, b) {
//   return b - a;
// });

// console.log(numeros); // Salida: [10, 8, 5, 2, 1]


///////


 const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero);
  });
  // Salida:
  // 1
  // 2
  // 3
  // 4
  // 5

const todosMayoresQueCero = numeros.every(function(numero) {
    return numero > 0;
  });
  
  console.log(todosMayoresQueCero); // Salida: true
  
  const todosPares = numeros.every(function(numero) {
    return numero % 2 === 0;
  });
  
  console.log(todosPares); // Salida: false

  const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
  console.log(suma); // Salida: 15




  const duplicados = numeros.map(function(numero) {
    return numero * 2;
  });
  console.log(duplicados); // Salida: [2, 4, 6, 8, 10]



  const pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
  });
  console.log(pares); // Salida: [2, 4]



  const encontrado = numeros.find(function(numero) {
    return numero > 3;
  });
  console.log(encontrado); // Salida: 4