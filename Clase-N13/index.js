//comentario 

var nombre = 'Hola bienvenidos a la clase'; //string dato de texto


//alert(nombre);

// var mensaje = prompt('Ingrese su nombre: ');

// alert(mensaje); 


// let num = 50;
// let numero = 30;
// const pi = 3.14;

// var resultado= num + numero;
// console.log(resultado);
// resultado = num - numero;
// console.log(resultado);
// resultado = num * numero;
// console.log(resultado);
// resultado = num / numero;
// console.log(resultado);

// resultado = num + pi; 
// console.log(resultado);


// // const paa =3.15;


// // pa =3.16;
// // console.log(pa);

// //Incrmento 

// let contador = 5;
// contador++; // Incremento en 1
// console.log(contador); // Resultado: 6


// let contador1 = 10;
// contador1--; // Decremento en 1
// console.log(contador1); // Resultado: 9


// let numero3 = 7;
// let resultado3 = ++numero3 + 5; // Incremento después de la operación
// console.log(numero3); // Resultado: 8 (el valor de 'numero' se incrementa después de la operación)
// console.log(resultado3); // Resultado: 12 (7 + 5)

// let otroNumero = 10;
// let otroResultado = --otroNumero + 5; // Decremento antes de la operación
// console.log(otroNumero); // Resultado: 9 (el valor de 'otroNumero' se decrementa antes de la operación)
// console.log(otroResultado); // Resultado: 14 (9 + 5)

let temperatura = 25; //40

    if (temperatura > 30) {
      console.log("Hace calor");
      var local =5;  //let local =5;
      console.log(local);
    } else if (temperatura <= 30 && temperatura >= 20) {
      console.log("El clima es agradable");

    } else {
      console.log("Hace frío");
    }

    ///console.log(local);


let diaDeLaSemana = 8;
let nombreDia;

switch (diaDeLaSemana) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  case 7:
    nombreDia = "Domingo";
    break;
  default:
    nombreDia = "Día no válido";
}

console.log("Hoy es " + nombreDia);