// Es una funcion que pasa como argumento a otra funcion 

function suma (a,b){
    return a + b;
}

///segunda funcion que utillizo como argumento a otra funcion
function calc(a ,b, callback){
    return callback(a,b);
}

console.log(calc(2,5,suma));

//setTimeout();

setTimeout(function(){
    console.log('Hola Javascript');
}, 2000);

function saludo(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludo,2000, 'Talia');