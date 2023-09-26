alert('Hola mundo!');

/// Objetos  
var perro = {
    nombre:'max',
    edad: 5,
    vivo : true
};

console.log(perro);

var perro2 ={
    nombre:'pipi ',
    edad: 2,
    vivo : true
}

console.log(perro2.nombre);
console.log(perro2);



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

// mascota.color = 'Blanco';
// mascota.dientes = "Le faltan dientes";

// console.log(mascota);
// console.log(mascota['dientes']);


/// FOR              /// +=numero(2,10) 
 for (let i = 0; i <= 10; i++) {
    /// Codigo a ejecutar
    console.log('El numero de i es:', i);
   
 }

 const persona = {
    nombre: 'John',
    apellido: 'Ramirez',
    edad: 30,
    profesion: 'Desarrollador'
  };




  const teclado ={

  };
  
  // Recorrer el objeto (persona) utilizando un bucle "for...in"
  for (let clave in teclado) {
    console.log('mensaje');
    if (teclado.hasOwnProperty(clave)) {
      console.log(clave + ': ' + teclado[clave]);
    }else{
        console.log('El objeto esta vacio');
    }
  }



  
const mascota = {
    nombre:'Firulais',
    familia: 'Perro',
    raza:'Caniche',
    peso: 3000,
    edad: '7 meses',
    sonido: 'Guau Guau!',
    saludar: function(){
        console.log(this.sonido);}
};

mascota.saludar();




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
  const persona2 = new Persona('Micaela',30)

  const gato1 = new Persona('tito',2);


  persona1.saludar();

  gato1.saludar();