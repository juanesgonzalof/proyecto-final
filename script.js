// Clases
class Personas {
    constructor(id, nombre, edad, profesion) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.profesion = [profesion];
    }
}

/// Personas
const arraydepersona = [];
const lugar = [];
lugar.push(new Personas(1, "Mariana Rodriguez", 34, arraydepersona));
lugar.push(new Personas(2, "Paula Perez", 45, arraydepersona));
lugar.push(new Personas(3, "Daniela Lopez", 30, arraydepersona));
lugar.push(new Personas(4, "Veronica Pujol", 42, arraydepersona));
lugar.push(new Personas(5, "Eugenia Fernandez", 26, arraydepersona));
lugar.push(new Personas(6, "Micaela Martinez", 28, arraydepersona));
lugar.push(new Personas(7, "DJorge Rodriguez", 40, arraydepersona));
lugar.push(new Personas(8, "Daniel Bernal", 38, arraydepersona));
lugar.push(new Personas(9, "Haydee Baster", 27, arraydepersona));
lugar.push(new Personas(10, "Federica Rauconf", 35, arraydepersona));
/////

let opc = parseInt(prompt("Que desea saber?\n 1- listado de profesion.\n 2- listado de Personas registradas\n 3-Personas por edad"))

switch (opc) {

    case 1:
        let personaid = parseInt(prompt("Ingrese un id para buscar a la persona: "));
        numCompras = parseInt(prompt("Cuantas compras realizo?"))
        if (personaid > 11) {
            alert("Ingrese un id valido ")
        }
        else {
            let compras;
            let profesion;

            for (let i = 1; i <= numCompras; i++) {
                profesion = String(prompt("ingrese profesion"))
                compras = parseFloat(prompt("ingrese compras " + profesion))
                arraydepersona.push({ profesion, compras });
            }
            console.log(lugar[nombreid - 1])
            suma = arraydepersona.map(item => item.compras).reduce((prev, curr) => prev + curr, 0);
            prom = suma / numCompras
        }
        if (prom >= 7) {
            console.log("Compra abundante" + prom)
        }
        else {
            console.log("No ha comprado suficiente " + prom)
        }
        break;

    case 2:
        /*
        lugar.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1;
            } else if (a.nombre < b.nombre) {
                retur -1;
            } else {
                return 0;
            }
        })
        */
        console.log(lugar.map((el) => el.nombre))
        break;

    case 3:
        let ed = parseInt(prompt("Ingrese una edad: "))
        const edad = lugar.filter((el) => el.edad == ed)
    
        if (edad.length == 0) {
            alert("No hay esa edad")
        }
        else {
            console.log("las personas con  " + ed + "son: ")
            console.log(edad)
        };
        break;
}

if (opc > 3) {
    alert ("Opcion no valida")
}







// CLASE 7
// console.log("clase 7");

/*
let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log(total);
*/


/*
function sumarRango (de, hasta) {
    let total = 0;
    for (let i = de; i <= hasta; i++) {
        total += i;
    }
    return total;
}
console.log("la suma va desde 1 a 20 ");
console.log(sumarRango(1, 20));
*/

/*
function mayorQue(a) {
    return (b) => b > a;
    // return (b) => b;
}
let mayorQueDiez = mayorQue(10);
let mayorQueCien = mayorQue(100);

console.log( mayorQueDiez(12) );
console.log( mayorQueDiez(8) );
console.log( mayorQueCien(98) );
console.log( mayorQueCien(101) );
*/


/*
function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b;
    } else if (op == "restar") {
        return (a, b) => a - b;
    }
}
let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log( suma(14, 6) );
console.log( resta(14, 6) );
*/



/*
function porCadaUno(arr, fn) {
    for (const iteracion of arr) {
        fn(iteracion);
    }
    if (fn == acumular) console.log(total);
}

let total = 0;
const numeros = [1, 2, 3, 4];
function escribirEnConsola(param) {
    console.log(param);
}
function acumular (num) {
    total += num;
}

porCadaUno(numeros, escribirEnConsola);
porCadaUno(numeros, acumular);
*/


/*
function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el);
    }
}
const numeros = [1, 2, 3, 4];
const duplicado = [];

porCadaUno(numeros, (el) => { duplicado.push(el * 2) } );
console.log(duplicado) // [2, 4, 6, 8]
*/

/*
const numeros = [1, 42, 23, 24, 53, 64];
numeros.forEach( num => {
    console.log(num);
} );
*/


/*
const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
]

const resultado = cursos.find( el => el.nombre === "ReactJS" );
resultado.precio -= 2000;

const resultado2 = cursos.find( el => el.precio === 15000 );

console.log(resultado);
console.log(resultado2);
*/


/*
const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
]
const resultado = cursos.filter( el => el.nombre.includes('JS') );
const resultado2 = cursos.filter( el => el.precio < 20000 );

console.log(resultado);
console.log(resultado2);
*/

/*
const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
]
console.log( cursos.some((el) => el.nombre == "Desarrollo Web"));
console.log( cursos.some((el) => el.nombre == "VueJS"));
console.log( cursos.some((el) => el.precio == 22000));
*/


/*
const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'Cocina', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
]
const nombres1 = cursos.map( (el) => el.nombre );
const nombres2 = cursos.map( (el) => el.precio * 1.21 );
console.log(nombres1);
console.log(nombres2);

const actualizado = cursos.map( (el) => {
    return {
        nombre: "CoderHouse " + el.nombre,
        precio: el.precio * 1.21
    }
} );
console.log(actualizado);
*/

/*
const numeros = [1, 2, 3, 4, 5, 6];
const total = numeros.reduce( (acumulador, elemento) => acumulador + elemento, 0 );
console.log(total) // 21
*/

/*
let cupon = -5000;
const miCompra = [
    { nombre: 'Desarrollo Web', precio: 10000 },
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 10000 }
]
const total = miCompra.reduce( (acc, el) => acc + el.precio, cupon )
console.log(total); // 66250
*/


/*
const numeros = [ 40, 1, 5, 200 ];
numeros.sort();
console.log(numeros);
numeros.sort( (a, b) => a - b );  // [ 1, 5, 40, 200 ]
console.log(numeros);
numeros.sort( (a, b) => b - a );  // [ 1, 5, 40, 200 ]
console.log(numeros);
*/


/*
// ordenar alfabéticamente
const items = [
    { name: 'Zharmander', price: 37 },
    { name: 'Pxdgey', price: 45 },
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Aharmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Padgey', price: 45 },
    { name: 'Squirtle', price: 60 }
]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});
console.log(items);
*/


/*
const productos = [
    { id: 1, nombre: "Arroz", precio: 125 },
    { id: 2, nombre: "Fideos", precio: 70 },
    { id: 3, nombre: "Pan" , precio: 50},
    { id: 4, nombre: "Flan" , precio: 100}
]

// find // {id: 3, producto: "Pan", precio: 50}
const buscado = productos.find( producto => producto.id === 3 );
console.log(buscado);

// some? // false
const existe = productos.some( producto => producto.nombre === "Harina");
console.log(existe);

// filter // [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]
const baratos = productos.filter( producto => producto.precio <= 100 );
console.log(baratos);

// map // [“Arroz”, “Fideo”, “Pan”, “Flan”]
const listaNombres = productos.map( producto => producto.nombre );
console.log(listaNombres.toString());
*/

/*
// math
console.log("Math");
console.log( Math.E ) // 2.718281828459045
console.log( Math.PI ) // 3.141592653589793

console.log( Math.max(55, 13.443, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25

console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
console.log( Math.min(55, -Infinity, 0, -25, 93, 4) ) // -Infinity
*/


/*
const pi = Math.PI // 3.141592653589793
// redondeo
// const pi = 3.59;
// CEIL: devuelve el entero mayor o igual más próximo // 4
console.log( Math.ceil(pi) );
// FLOOR: devuelve el entero más cercano redondeado hacia abajo // 3
console.log( Math.floor(pi) );
// ROUND: retorna el valor de un número redondeado al entero más cercano // 3
console.log( Math.round(pi) );
*/

/*
// sqrt
console.log( Math.sqrt(9) ); // 3
console.log( Math.sqrt(2) ); // 1.414213562373095
console.log( Math.sqrt(1) ); // 1
console.log( Math.sqrt(0) ); // 0
console.log( Math.sqrt(-1) ); // NaN
*/

/*
// random
console.log( Math.random() ); // 0.6609867980868442
console.log( Math.random() ); // 0.09291446900104305
console.log( Math.random() ); // 0.6597817047013095
*/

/*
// números entre 0 y 10
console.log( Math.round(Math.random() * 10));
// números entre 0 y 50
console.log( Math.random() * 50);
// números entre 20 y 50
console.log( Math.random() * 30 + 20 );
*/

/*
// random
generadorNumero = (total) => {
    return Math.round( Math.random() * total ) // de 0 a 100 inclusive
    // return Math.ceil( Math.random() * total ) // del 1 a 100
    // return Math.floor( Math.random() * total ) // de 0 a 99e
}
console.log( generadorNumero(20) );
*/

/*
console.log( new Date() );
// date
// Fri Dec 17 2021 11:35:08 GMT-0300

console.log( new Date(2022, 1, 15) );
// Sat Feb 15 202 00:00:00 GMT-0300

const casiNavidad = new Date(2022, 11, 24, 23, 59, 59);
console.log(casiNavidad);
// Sat Dec 24 2022 23:59:59 GMT-0300

const casiNavidad2 = new Date("Julio 24, 2022 23:59:59");
console.log(casiNavidad2);
// Sat Dec 24 2022 23:59:59 GMT-0300
*/

/*
// hoy
const hoy = new Date( "July 26, 2022" );
console.log(hoy);

const meses = ["ENE",
                "FEB",
                "MAR",
                "ABR",
                "MAY",
                "JUN",
                "JUL",
                "AGO",
                "SET",
                "OCT",
                "NOV",
                "DIC",
                ];
const dias = ["lunes",
                "martes",
                "miércoles",
                "jueves",
                "viernes",
                "sábado",
                "domingo"
                ];

let obtenerMes = function(numero){
    console.log(meses[numero])
}
let obtenerDia = function(numero){
    console.log(dias[numero-1])
}
*/

/*
console.log( hoy.getFullYear() ); // 2022
obtenerMes(hoy.getMonth()) // 11 (diciembre)
obtenerDia(hoy.getDay()); // 5 (viernes)

console.log( hoy.toDateString() ); // Fri Dec 17 2022
console.log( hoy.toLocaleString() ); // 17/12/2022 00:00:00
console.log( hoy.toLocaleDateString() ); // 17/12/2022
console.log( hoy.toTimeString() ); // 00:00:00 GMT-0300
*/



/*
const hoy = new Date( "July 26, 2022" );
const navidad = new Date("December 25, 2022");
console.log( navidad - hoy ); // 13132800000
const milisegundosPorDia = 86400000;
console.log( (navidad - hoy ) / milisegundosPorDia); // 8
*/



/*
const inicio = new Date();
for ( let i = 0; i < 2000; i++ ) {
    console.log("haciendo tiempo");
}
const final = new Date();

console.log("El proceso tardó: " + (final - inicio) + " milisegundos" )
// El proceso tardó: 396 milisegundos
*/



/*
console.log(document);
console.log(document.body);

console.log(document.getElementById("parrafo1"));
console.log(document.getElementById("parrafo1").innerHTML);

console.log(document.getElementsByClassName("paises")[2]);

console.log(document.getElementsByTagName("div")[3].innerHTML);
*/


/*
let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML); console.log(parrafo.innerHTML);
*/


/*
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);
console.log(paises[3].innerHTML);
*/




/*
// console.log(document);
console.dir(document);
console.dir(document.head);
console.dir(document.body);

let parrafo1 = document.getElementById("parrafo1");
console.log(parrafo1);
console.log(parrafo1.innerHTML);

let paises = document.getElementsByClassName("paises");
let paises2 = document.querySelectorAll(".paises");
console.log(paises);
console.log("kbzzzzz:", paises2);
console.log(paises[0]);
console.log(paises2[0]);
console.log(paises[0].innerHTML);
console.log(paises2[0].innerHTML);


let divisores = document.getElementsByTagName("div");
console.log(divisores[3].innerHTML);
*/
