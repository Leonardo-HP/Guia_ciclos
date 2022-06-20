/* 
debugger

let username = prompt("ingrese su nombre de usuario: ")

if (username == "Coderhouse") {
console.log("Bienvenido", username)
}

else
{
    console.warn("no se reconoce el usuario.")
}
 */



// Ejemplo de ciclo for, para contador hasta 10 
// for (let i=0; i<=10;i++){
//     alert(i);
// }



// // Algoritmo para calcular la tabla de multiplicar de un numero

// /* Solicitamos un valor al usuario */

// let ingresarNumero = parseInt(prompt("Ingresar un numero"));

//  for (let i =1 , 1<=10; 1++){

//  /*En cada repeticion , calculamos el numero ingresado x el numero de repeticion (i) */

//    let resultado = ingresarNumero * 1
//     alert(ingresarNumero+" X " + 1 + " = " + resultado)
//  }


// debugger


// for(let i=1; i <= 5 ; i++ ){


// let ingresarNombre = prompt('Ingresar Nombre');

//     console.log('turno No. ' + i + ' Nombre: ' + ingresarNombre );
   
// }

// debugger

// // conteo desde 0 a21



//  for (let i=0; i<22; i++){
//      alert("conteo nro.",i )
//  }

/* 

debugger

let i = 0;
while
 (i < 10) {
  console.log(i);
  i++
}


let limite = prompt(" ingrese un numero  ?")
limite = parseFloat(segundos)

    for (let i = 0; i < limite ; i++){
if else (i== (limite / 2)){
    alert("estas a medio camino")
else{

}

}

    console.log( " conteo de calorias ",i)
}
 */



// el break nos sirve para detener las itiraciones

// debugger

// let limite = prompt("ingrese un numero de 2 cifras")
//     limite = parseFloat(limite)

//     for (let i = 0; i < limite ; i++){
// if (i==5){
// break
// }


//     console.log( "conteo  Nro. ",i)
// }


// el Continue nos sirve para saltar detener las itiraciones
// en el ejemplo se saltaria el numero 5 pero seguiria contando y ejecutandose
// debugger

// let limite = prompt("ingrese un numero de 2 cifras")
//     limite = parseFloat(limite)

//     for (let i = 0; i < limite ; i++){
// if (i==5){
// continue
// 

//     console.log( "conteo  Nro. ",i)
// }


// ejemplo aplicado while: esc 

// ALGORITMO QUE SOLICITA UNA ENTRADA AL USUARIO HASTA QUE INGRESA"esc"

// let entrada = prompt("Ingresar un dato");

// while(entrada != "ESC"){

//     alert("El usuario ingreso " + entrada);

//     entrada = prompt("Ingresar otro dato");


// }


//While




// debugger

// let repetir = true;

// while( repetir ){

//     let nro = parseInt(prompt("Ingrese un numero mayor a 21 : "))

//     if ( nro >= 21){

//         repetir = false 
//         console.log("Al fin!!", nro)  
//     }
// }

//ALGORITMO QUE SOLICUTA UNA ENTRADA Y SE DETIENE CUANDO NO ES UN NUMERO

// debugger

// let numero = 0;

// do{
// numero = prompt("ingresar numero");

// console.log (numero);

// }
// while( parseInt(numero));



//SWITCH

// Tienda de ropa

// debugger



// let color = prompt("Elija un color de prenda: ")

// switch  (color) {
//     case "white":
//     console.log("tenemos en stock el color", color)
//     break;

//     case "black":
//     console.log("tenemos en stock el color", color)
//     break;

//     case "red":
//     console.log("tenemos en stock el color", color)
//     break;
        
//     case "yellow":
//     console.log("tenemos en stock el color", color)
//     break;
//     default:
//         console.warn("No trabajamos ese color.")
//         break;
// }


// switch con un while y tambien es indiferente a mayusculas o minusculas

// debugger

// let x = prompt("Ingresar un nombre");


// while (x != "ESC") {

//     var y=x.toUpperCase();

//     switch(y){
            
// case "ANA":
//     alert("HOLA", y );
//     break

// case "JUAN":
//         alert("HOLA",y);
// break

//        default:
//            ("quien eres?")
//            break; 
//     }

//     x = prompt("ingresar un nombre");
// }

// funcion

//  debugger
// let nombreIngresado = prompt("Ingresar nombre")
// alert("el nombre ingresado es " + nombreIngresado


// Porcion de una calculadora

// FUNCION SIMPLE
// debugger
// function calcular () {
//     let primerNro = prompt("ingresa el primer numero:")
//     let segundoNro= prompt("ingresa el segundo numero:")
//     let resultado = parseFloat (primerNro) + parseFloat (segundoNro)
// console.log("Resultado de la operacion:", resultado)
// }

// calcular()


// FUNCION CON PARAMETROS
// debugger
// function calcular(parametro1, parametro2){
// console.log("Resultado:", parseFloat(parametro1)+ parseFloat(parametro2))
// }

// function pedirNumeros(){
//     debugger
//     let primerNro = prompt("ingresa el primer numero:")
//     let segundoNro = prompt("ingresa el segundo numero:")
//         calcular(primerNro, segundoNro)
// }

// pedirNumeros()

// FUNCION CON PARAMETROS MAS RETORNO

// function calcular(){
//     debugger

//     let primerNro = prompt("ingresa el primer numero:")
//     let segundoNro = prompt("ingresa el segundo numero:")
    
//     console.log(realizarCalculo(primerNro, segundoNro))
// }

// function realizarCalculo(param1, param2){
//     let resultado = parseFloat(param1) + parseFloat(param2)
//     return resultado
// }


// FUNCION CON PARAMETROS MAS RETORNO SIMPLIFICADO return regresa el resultado de la funcion dentro de ella
// function calcular(){
//     debugger

//     let primerNro = prompt("ingresa el primer numero:")
//     let segundoNro = prompt("ingresa el segundo numero:")
    
//     console.log(realizarCalculo(primerNro, segundoNro))
// }

// function realizarCalculo(param1, param2){
//     return parseFloat(param1) + parseFloat(param2)
// }

// FUNCION CALCULAR CON OPERADORES 

// function calcular(){
//     debugger
    
//     let primerNro = prompt("Ingrese el primer numero:")
//     let segundoNro = prompt("Ingrese el segundo numero:")
//     let operador = prompt("Selecciona la operacion:( + - * /")
//     console.log("resultado", realizarCalculo(primerNro, segundoNro, operador))
// }

// function realizarCalculo(parametro1, parametro2, parametro3){
// switch(parametro3){
//     case "+":
//         return parseInt(parametro1) + parseInt(parametro2)
// // cuando hay un return no tiene caso usar un break por que termina el switch con un resultado
//      case "-":
//         return parseInt(parametro1) - parseInt(parametro2) 

//     case "*":
//         return parseInt(parametro1) * parseInt(parametro2)

//     case "/":
//         return parseInt(parametro1) / parseInt(parametro2)
//     default:
//         return "Error en el operador aritmetico"

//     }
// }



//OBJETOS

// const nombre = " Jason Bourne "
// const edad = 38
// const pais = "USA"

// // un objeto se define con :

// const empleado1 = {
//     nombre: "Joe McMillan",
//     cargo: "Salesman",
//     empresa: "Mutiny"
// }

// const empleado2 = {
//     nombre: "Cameron Howe",
//     cargo: "Salesman",
//     empresa: "Mutiny"
// }

// const empleado3 = {
//     nombre: "Gordon Clark",
//     cargo: "IT",
//     empresa: "Mutiny"
// }

// const producto1 ={
//     nombre: "Macbook Pro 13",
//     stock: 20,
//     precio: 799
// }

// // const personal = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"}
// function saludar (){
//     console.log("Hola", empleado4.nombre)
// }

// function cambiarNombre(){
// let nn = prompt("Ingrese el nuevo nombre: ")
// empleado1.nombre = nn
// empleado1.nombre = prompt("Ingrese el nuemvo nombre:")

// }

//OBJETO FUNCION CONSTRUCTOR

// const empleado1 = {
//     nombre: "Joe McMillan",
//     cargo: "Salesman",
//     empresa: "Mutiny"
// }

// function Empleado(nombre,cargo){
//     this.nombre = nombre
//     this.cargo = cargo
//     this.empresa = "Mutiny"
// }

// const empleado1 = new Empleado("Joe McMillan","Salesman")
// const empleado2 = new Empleado("Cameron How","Programmer")
// const empleado3 = new Empleado("Gordon Clark","IT")
// const empleado4 = new Empleado("Donna Clark","SEO")

// para imprimirlo ponemos empleado1.nombre


//  // this cumple el rol de un sinonimo de lo que es nuestra funcion
//  function Producto( nombre, stock, precio){
//     this.nombre = nombre
//     this.stock = stock
//     this.precio= precio
//     this.iva = 1.21
// //Esta es una funcion con METODO "precioConIva"
//     this.precioConIVA = function(){
// // Agregamos pf (precio final) 
// //METODOS PERSONALIZADOS
//         let pf = this.precio * this.iva
// // el metodo .toFixed es un metodo propio de las variables number que ajusta a una cantidad determinada los posibles decimales
//         return pf.toFixed(2)

//     }
//  }

// // Para imprimir el resultado de la funcion con METODO en consola usamos: producto1.precioConIVA()


//  const producto1 = new Producto("MacBook Pro 13",40, 799.4899)
//  const producto2 = new Producto("MacBook Pro 13",40, 799)
//  const producto3 = new Producto("MacBook Pro 13",40, 799)
// //1.01 objetos

// //METODOS 
// //Los metodos de los objetos son funciones que se limitan a poder ser ejecutadas
// //dentro del mismo objeto

// //FUNCION
// //generalmente retornar un valor y son de acceso global
// function f1(){
//     return this;
// }
// //METODO
// //Se requiere un objeto y puede no retornar un valor.
// function Persona( nombre, edad, calle){
// this.nombre = nombre;
// this.edad = edad;
// this.calle = calle;
// }


// //METODO EN JSO

// let cadena = "Hola Coder";

// //Propiedad de objeto String; Largo de cadena.
// console.log(cadena.length);

// //Metodo de objeto String: pasar a minuscula
// console.log(cadena.toLocaleLowerCase());

// //Metodo de objeto String: Pasar a mayuscula.
// console.log(cadena.toLocaleUpperCase())

// //!CLASES

// //En la declaracio de la clase la funcion constructora es reemplazada por el metodo CONSTRUCTOR
// // los metodos en las clases no referencian a  propiedads, se declaran dentro del bloque sin la palabra function
//   // utilizando el mismo ejemplo de la clase constructora pero convirtiendolo en clase
//  class Producto {
// //dentro del constructor ponemos los parametros
//     constructor(nombre, stock, precio) {
// //aqui ponemos los parametros
//         this.nombre = nombre
//         this.stock = stock
//         this.precio = precio
//         this.iva = 1.21
//         }
//  //los metodos se declaran por afuera de las llaves       
//         precioConIVA  () { 
//             let pf = this.precio * this.iva
//             return pf.toFixed(2)
//     }
// // para agregar un metodo mas, hacemos uno que descuente 
// //la cantidad despues de venderla en el stock de la siguiente manera
// // cant (cantidad)
//     descontarStock(cant){
//         // this.stock = this.stock - cant
//     // simplificandolo
//         this.stock -= cant
// }
//  }
//  const producto1 = new Producto("MacBook Pro 13",40, 799.4899)
//  const producto2 = new Producto("MacBook Pro 13",40, 799)
//  const producto3 = new Producto("MacBook Pro 13",40, 799)

//  // IN y FOR ...IN

// //  IN
//  // Podemos usar una valoracion booleana para determinar si existe una propiedad dentro de un objeto
// // declaramos a existe, como nombre de la constante a evaluar
// // y preguntamos si la propiedad "unidadMinima" existe dentro de nuestro objeto

//  const existe = "unidadMinima" in producto1 
// //podemos imprimirla en la consola simplemente escribiendo existe

// // FOR...IN
// // Podemos enlistar las propiedades que contiene el objeto
// // creamos una constante "propiedad" para que enliste las existentes en el objeto
// for (const propiedad in producto1){
//     console.log(propiedad)
// }

// /* 
// !RESUMEN OBJETOS 
// -Los objetos tienen propiedades y metodos
// -El metodo constructor de un objeto sirve para crear el mismo y asignarle sus propiedades, permite crear varios objetos usando el mismo constructor
// -Las fucniones de js son generalmente de acceso global y lo smetodos son unicamente utilizados para ser invocados por los objetos que lo contienen
// -Las clases son otra forma de crear objetos personalizados en JS
//      */

// ARRAYS 

 //Es un tipo de dato que sirve para almacenar valores en forma de lista
 // Se de clara como una variable con corchetes [] dentro definimos los valores separados por comas
 // lo mejor es definir un array con CONST no con let


//  //Un array vacio
// const arrayA = [] ;
// //Un array con numeros
// const arrayB = [1,2] ;
// //un array con strings
// const arrayC = ["C1","C2","C3"] ;
// //un array con booleanos
// const arrayD = [true,false,true,false] ;
// //declaracion de array mixto
// const arrayE = [ 1, false,"C4"] ;


// const IVA = 1.21 
// const paises = ["Argentina" , "Uruguay", "Chile", "colombia" , "Venezuela" , "Mexico"]
// //                   0            1         2          3            4           5
// // Los array empiezan siempre con 0


// // esta funcion itera el array hasta imprimir todos los elementos del array
// // function recorrerArray(){ 
// // debugger
// //      for (let i=0; i < 6; i++){
// //          console.log(paises [i])
// //  }
// // }

// // para imprimirlos en consola a manera de tabla usamoes el console.tab
// // function recorrerArray(){ 
// //     console.table(paises)
// //      }
// // es mas facil de leer pero tambien podemos simplemente escribir el nombre del array en consola

// function listarPaises(){
// console.table(paises)
// }


//! METODOS DE ARRAY 
//     //lenght
// // El metodo lenght identifica cuantos elementos tiene un Array
// console.log(arrayE.length) //imprime 3

// // con el ejemplo anterior podemos integrar lenght a nuestro ciclo for en contador para que siempr sea exacto al contenido del array

// function recorrerArray(){ 
// for (let i=0; i < paises.length; i++){
//     console.log(paises [i])
// }
// }
  
//     //push
// //con el metodo push podemos agregar un valor o una variable a nuestro array, siempre se agrega en la ultima posicion del array 
// paises.push("Cuba")

// // una funcion para agregar el pais en un prompt
// // function agregarPais() {
// //     let nuevoPais=prompt("Ingresa un nuevo pais al final:")
// //     paises.push(nuevoPais)
// //     console.clear()
// //     listarPaises()
// // }

//     //unshift

// // El metodo unshift nos permite agregar elementos del array al principio de este.

// function agregarPaisAlInicio() {
//     let nuevoPais=prompt("Ingresa un nuevo pais al principio:")
//     paises.unshift(nuevoPais)
//     console.clear()
//     listarPaises()
// }

//! //shift

// // De igual manera como funcionan push, tenemos shift para quitar el primer elemento del array


// function quitarPaisAlInicio() {
//     let pais = paises.shift()
//     console.clear()
//     listarPaises()
//     alert("se ha eliminado el pais:" + pais)
    
// }


//! //pop

// // y pop para quitar el ultimo elemento del array


// function quitarPaisAlFinal() {
//     let pais = paises.pop()
//     console.clear()
//     listarPaises()
//     alert("se ha eliminado el pais:" + pais)
// }


//! //splice

// // El metodo splice() permite eliminar uno o varios elementos de un array
// //en cualquier posicion , funciona con 2 parametros

// function quitarPaisEnPosicion() {

//      let queIndice=prompt("Ingresa el numero de pais:")
//      let cuantosPaises =prompt("Cuantos paisese mas desde el que ingresaste:")
//      let paisesQuitados=paises.splice(queIndice,cuantosPaises)
//      console.clear()
//     alert("Se quitaron los paises: ",paisesQuitados)
//     listarPaises()
// }

//! //join

// // El metodo join nos permite generar un string con todos los elementos del array, separados por el valo rque pasamos por parametro:

// function imprimirPaises (){
//     alert(paises.join(" , "))
// }

//! //concat

// // El metodo concat nos permite juntar 2 arrays en una

// arrayPerros = ["chichuahua","Gran", "DataTransfer", "Dalmata"]
// arrayGatos = ["gato negro", "Gato Blanco", "Gato pelon"]

// function juntarAnimale(){
// let animales = arrayPerros.concat(arrayGatos)
// alert(animales)
// }

// //Podemos combinar concat con join para que imprima valores con formato

// function juntarAnimales(){
//     let animales = arrayPerros.concat(arrayGatos)
//     alert(animales.join(" + "))
// }


//!     //slice
// //El metodo slice devuelve una copia de una parte de Array dentro de un nuevo array
// // primero definimos la posicion inicial y hasta donde es el corte del nuevo array

// // function ultimoGatoPrimerPerro(){
// //     console.log(paises.slice(3,4))
// // }

// // es desde donde empieza hasta uno antes del segundo numero

//!     //indexof
// // este metodo nos permide devolver el indice de un elemento en un array, y si no existe nos devuelve -1

// function buscarIndice() {
//     let paiseABuscar = prompt("Que paises estas buscando el indice?: " )
//     alert(paises.indexOf(paiseABuscar))
// }

// //podriamos usar el indice y conbinarlo con splice, para eliminar objetos del array
// // Ejemplo propio 

// function quitarPaisPorNombre() {
//     let paisABorrar = prompt("Que paises quieres borrar?: " )
//     alert("Se quito el pais: "+ paisABorrar)
//     let paisesQuitados=paises.splice(paises.indexOf(paisABorrar),1)
//    console.clear()
//    listarPaises()
// } 
// //Ejemplo profe

// // function quitarPais(){
// //     debugger
// //     let indice = parseInt(prompt("ingresael pais a quitard del array:"))
// //     let resultado = paises.splice(indice, 1)
// //     alert("Se ha elimindado el pais: "+ resultado)
// //     listarPaises()
// // }

//!     //includes
// //el metoo includes permite saber si un elemento que recibe por parametro existe o no dentro de un array
// //retornando valores booleano dependiendo del caso

// // function buscarPaisEnIndice(){
// // paises.includes(prompt("que pais busca"))
// // }

// //aqui combinamos includes con push para no repetir a la hora de usar nuestra funcion agregar paises


// function agregarPais() {
// let   nuevoPais = prompt("Cual es el nuevo pais?:")

// // if (paises.includes(nuevoPais) == true){

// //esta declaracion podria obviar el true pues el if ya lo evalua, entonces simplificamos

// if (paises.includes(nuevoPais)){
//     alert("ese pais ya esta en la lista");
//     agregarPais();
// }

// else {
//     paises.push(nuevoPais)
//     console.clear()
//     listarPaises()
// }
// }

// //la siguiente funcion es un buscador

// function buscarPais() {
//     let paisABuscar = prompt("ingresa el pais a buscar")
//     let resultado = paises.includes(paisABuscar)
//     if (resultado){
//         alert("El pais ya se encuentra cargado ")
//     }
//     else{
//         console.warn("no se encontro el pais ", paisABuscar)}
// }

    //reverse   
// reverse es un metodo destructivo por lo cual modificara el array original
// simplemente podriamos imprimir un array en el orden contrario

//console.log(paises.reverse)

//!RESUMEN DE METODOS
/*
lenght             --- averiguar longitud
push/unshift       --- agregar
shift/pop/splice   --- quitar
join               --- juntar
concat             --- combinar
slice              --- cortar
indexOf            --- obtener indice
includes           --- verificar existencia
reverse            --- revertir el orden del array
*/

    // ARRay de objetos 
// Los array pueden usarse para almacenar objetos personalizados 
//podemos asignar objetos literales o previamente instanciados en la declaracion del array o agregar nuevos objetos usando el metodo push 
//y el constructo

const objeto1 = {id: 1, producto: "arrosz"};
const array = [objeto1, {id:2, producto: "Fideo"}];
array.push({id: 3, producto: "Pan"})



//! HIGH ORDER FUNCTIONS

    // let total = 0
    // for (let i = 1; i<= 10 ; 1++) {

    // total +=1
    // }

    // console.log(total)

/////////////////////////////////////////////////

// console.log( sumarRango (1,10))

// solo como anotacion tanto el algoritmo como la llamada de la funcion dan el mismo resultado
// lo cualse conoce como abstracccion

// las funciones de orden superior es aquella que retorna una funcion o recibe una funcion por parametro

//este tipo de funciones nos permiten abstraernos sobre aacciones y no solo valores

//! RETORNAR FUNCIONES 

//UNa funcion que retorna una funcion:

// function mayorQue(n){
//     return(m) => m > n
// }

// let mayorQueDiez = mayorQue(10)

// console.log ( mayorQueDiez(12))  //true
// console.log (mayorQueDiez(8))  //false

// En ese caso mayorQue(n) retorna una funcion que compara un valor contra n y retorna true or false (por que es el resultado de la comparacion)
//en mayorQueDiez se termina asignando la funcion que retorna el llamado mayorQue(10) Al ser llamada con el valor de 10 
//la asgnacion se resuelve de la siguiente manera
// let mayorQueDiez = (m) => m > 10



// En este ejemplo, segun el parametro op se termina asignand un return de funcion u otro a las variables declaradas
function asignarOperacion(op){
if   (op == "sumar") {
    return (a,b) => a+b
}
else if (op == "restar") {
    return (a,b) => a-b
}
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log(suma(4,6))
console.log(resta(5,3))

//!RECIBIR FUNCIONES POR PARAMETRO

// escribir funciones que puedan recibir funciones por parametro

// necesitamos recorrer un array y hacer algo con cada elemento

// todo    CON ESTO FORMARE LA FUNCION PARA MOSTRAR EL INVENTARIO

// esta funcion recibe un array por primer parametro y una funcion por el segundo.
// recorre el array y por cada elemento

function porCadaUno(arr,fn){
    for ( const el of arr) {
        fn(el)
    }
}


// en esta funcion se recibe un array por primer parametro y la funcion console.log por el segundo recorre el array y por cada elemento
//hace un llamado a la funcion mencionado enviando el elemento por parametro

const numeros1 = [ 1,2,3,4,5]
porCadaUno(numeros1, console.log)



// console.log

//enviando console.log por parametro , se ejecuta esa funcion con cada elemento del array

//podemos enviar funciones diferentes en distintos llamados y ejecutar distintas acciones sobre los elementos del array
// usando la misma funcion 



let total = 0 
function acumular(num){
total += num
}

porCadaUno(numeros, acumular)
console.log(total)

//! ARROS FUNCTION
//Es usual definir la funcion directamente sobre el parametro como la funcion anonima, aprovechando la sintaxis de arrow function
//esto permite definir acciones mas dinamicas

const duplicado = []

porCadaUno(numeros, (el) =>{
        duplicado.push(el *2)
})

console.log(duplicado)

//! METODOS DE BUSQUEDA Y TANSFORMACION 
// forEach()
// find()
// filter()
// some()
// Map()
// reduce()
// sort()

// cada imp de estos metodos estan pensados para solucionar problemas recurrentes con los arrays

// //!FOREACH
// es similar al ejemplo "porCadaUno"

//todo CON ESTE PODEMOS IMPRIMIR LOS OBJETOS EN HTML
// itera sobre el array y por cada elemento ejecuta la funcion que enviemos por parametro,
// la cual recibe a su vez el elemento del array que se esta recorriendo:
const numeros = [1,2,3,4,5,6]

numeros.forEach( (num)=>{
console.log(num)
})

// por cada numero hace un console.log

//? Ejemplo en linea 71 de arrayproductos.js 



//!FIND
// El metodo find() recibe una funcion de comparacion por parametro.
// captira el elemento que se esta recorriendo y retorna troue o false segun la comparacion ejecutada
// el metodo retorna el primer elemento que cumpla con esa condicion

const cursos = [
    {nombre: "JavaScript", precio: 15000},
    {nombre: "ReactJs", precio: 22000},
]

//teniendo un array de objetos find nos permite hacer una busqueda de un objeto puntual
// y lo buscamos por la propiedad que mas nos convenga 

const resultado = cursos.find((el)  => el.nombre === "ReacJs")
const resultado2 = cursos.find((el)=> el.nombre === "DW")

console.log(resultado)
console.log(resultado2)

//NOTESE que el finf() retorna el primer elemento del array que cumpla con la condicione enviada
//de ahi que podemos almacenarlo en una variable o usarlo de referencia para otro proceso
//si no hay ninguna coincidencia en el array el metodo find retorna undifined
//? Ejemplo practico en linea 87 de arrayproductos.js


//! FILTER

//? Ejemplo practico en linea 127 de arrayproductos.js 
