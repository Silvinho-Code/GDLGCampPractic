//DOM

var total, numero1, numero2;

function totalPagar(numero1,numero2){
    total = numero1 * numero2;
    return total;
}

var granTotoal = totalPagar(10,20);

var calculadora = document.getElementById('resultado').innerHTML = "C$"+ granTotoal;

//SCOPE
/*
function scope1(){
    var a = 10;
    console.log(a);
}
function scope2(){
    var b = 20;
    console.log(b);
}

scope1();
scope2(); 

//Funciones que retornan valores

/**
var numero1;
function multiplicarx20(numero){
    numero *= 20;
    return numero;
}

var resultado = multiplicarx20(3);
resultado *= 2;
console.log("El valor del resultado es: " + resultado);


const IMPUESTO = .16;
var cantidad;
function totalPagar(numero){
    numero = numero + (numero * IMPUESTO);
    return numero;
}

var resultado = totalPagar(100);
console.log(resultado * 1.03);
 */

/**function suma(numero1,numero2){
    console.log(numero1 + numero2);
}
suma(5,8);
suma(83,23);

function multiplicar(numero1,numero2){
    console.log(numero1 * numero2);
}
multiplicar(3,4);
multiplicar(4,9);

var frutas = [];
function array_frutas(fruta){
    frutas.push(fruta);
    console.log(fruta);
}
array_frutas('durazno');
array_frutas('manzanas');
array_frutas('frijoles');
array_frutas('fresas');
array_frutas('limon');

//      CARRITO
const IMPUESTO = 0.16;
var total = 0;
function carrito(articulo, precio){
    console.log("Articulo: "+ articulo + " Precio: "+ precio);
    total += precio + (IMPUESTO * precio);
    console.log("Impuesto: "+ precio * IMPUESTO);
    console.log("Total: C$"+ total.toFixed(2) );
}
carrito("cerveza",20)
 */



//Dos maneras de hacer un arreglo/array 
/*var premierleague = ['Chealse', 'Manchester United', 'Liverpool', 'Arsenal']

var la_liga = new Array('Barcelona', 'Real Madrid', 'Atrletico Madrid');

console.log(la_liga.reverse());*/

/*
var auto = {         /* Objeto 
    nombre: 'Mustang',
    motor: 5.5,
    color: 'Azul',
    Clasico: true,
    anio: 1995
}
console.log(auto.color);
console.log(auto.anio);
console.log(auto.motor);
console.log(auto.Clasico);
console.log(auto.nombre);
console.log(auto);
*/


/*
var nombre = prompt('Como te llamas')
var pais = prompt('De donde eres?')
alert('Bienvenido '+ nombre + ' de ' + pais)
*/
/*
var modelo = 'Mustang';
var motor = 5.5;
var color = 'azul'

var modelo2, motor2, color2;

modelo2 = 'Camaro';
motor2 = 5.8
color2 = 'Negro';

modelo = 'Challenger';


var modelo = 'Mustang';
console.log(modelo);
*/