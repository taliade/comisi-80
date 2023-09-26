alert('error ');
// Funcion declara  
// function saludar() {
//     let numeros=15623;
//     console.log("¡Hola, mundo!", numeros);
    
//   }
  

//   saludar();


//Funcion Expresada 

// var sumar = function(a, b) {
//     return a + b;
//   };
  
//   var resultado = sumar(3, 5);
//   console.log(resultado);



// console.log(sumar(90,5));



// const sumarConsole = (a, b) =>{
//     let resultado = a + b;
//      console.log('El valor retinado es: ', resultado);
//     }

// sumarConsole(62,58);    
    
// const sumarAlert = (a, b) =>{
//     let resultado = a + b;
//         alert('El valor retinado es: '+ resultado + ' ' + resultado);
//     }
    
// sumarConsole(29,58);  


// sumarAlert(50,96);

// Una funcion dentro de otra funcion 

// const sumar = (a, b, callback) =>{
//     let resultado = a + b;
//     //otra operacion funcion  
//     callback(resultado);
// }

// sumar(10, 7, function (suma){
//     console.log('El valor retornado es' , suma);
//     alert('El valor retornado es: '+ suma);
// });


// sumar(8, 5, function (suma){
// alert('El valor retornado es: '+ suma);
// });


// var perro = {
//     nombre:'max ',
//     edad: 5,
//     vivo : true
// };



// console.log(perro.vivo);

// var perro2 ={
//     nombre:'pipi ',
//     edad: 2,
//     vivo : true
// }

// console.log(perro2.nombre);

// const mascota = {
//     nombre:'Firulais',
//     familia: 'Perro',
//     raza:'Caniche',
//     peso: 3000,
//     edad: '7 meses'
// };

// console.log(mascota.nombre);
// console.log(mascota.peso);
// console.log(mascota['familia']);
// console.log(mascota['raza']);

// mascota.color = 'blanco';
// console.log(mascota['color']);

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


