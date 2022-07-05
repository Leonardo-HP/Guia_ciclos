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

// const objeto1 = {id: 1, producto: "arrosz"};
// const array = [objeto1, {id:2, producto: "Fideo"}];
// array.push({id: 3, producto: "Pan"})



// //! HIGH ORDER FUNCTIONS

//     // let total = 0
//     // for (let i = 1; i<= 10 ; 1++) {

//     // total +=1
//     // }

//     // console.log(total)

// /////////////////////////////////////////////////

// // console.log( sumarRango (1,10))

// // solo como anotacion tanto el algoritmo como la llamada de la funcion dan el mismo resultado
// // lo cualse conoce como abstracccion

// // las funciones de orden superior es aquella que retorna una funcion o recibe una funcion por parametro

// //este tipo de funciones nos permiten abstraernos sobre aacciones y no solo valores

// //! RETORNAR FUNCIONES 

// //UNa funcion que retorna una funcion:

// // function mayorQue(n){
// //     return(m) => m > n
// // }

// // let mayorQueDiez = mayorQue(10)

// // console.log ( mayorQueDiez(12))  //true
// // console.log (mayorQueDiez(8))  //false

// // En ese caso mayorQue(n) retorna una funcion que compara un valor contra n y retorna true or false (por que es el resultado de la comparacion)
// //en mayorQueDiez se termina asignando la funcion que retorna el llamado mayorQue(10) Al ser llamada con el valor de 10 
// //la asgnacion se resuelve de la siguiente manera
// // let mayorQueDiez = (m) => m > 10



// // En este ejemplo, segun el parametro op se termina asignand un return de funcion u otro a las variables declaradas
// function asignarOperacion(op){
// if   (op == "sumar") {
//     return (a,b) => a+b
// }
// else if (op == "restar") {
//     return (a,b) => a-b
// }
// }

// let suma = asignarOperacion("sumar")
// let resta = asignarOperacion("restar")

// console.log(suma(4,6))
// console.log(resta(5,3))

// //!RECIBIR FUNCIONES POR PARAMETRO

// // escribir funciones que puedan recibir funciones por parametro

// // necesitamos recorrer un array y hacer algo con cada elemento

// // todo    CON ESTO FORMARE LA FUNCION PARA MOSTRAR EL INVENTARIO

// // esta funcion recibe un array por primer parametro y una funcion por el segundo.
// // recorre el array y por cada elemento

// function porCadaUno(arr,fn){
//     for ( const el of arr) {
//         fn(el)
//     }
// }


// // en esta funcion se recibe un array por primer parametro y la funcion console.log por el segundo recorre el array y por cada elemento
// //hace un llamado a la funcion mencionado enviando el elemento por parametro

// const numeros1 = [ 1,2,3,4,5]
// porCadaUno(numeros1, console.log)



// // console.log

// //enviando console.log por parametro , se ejecuta esa funcion con cada elemento del array

// //podemos enviar funciones diferentes en distintos llamados y ejecutar distintas acciones sobre los elementos del array
// // usando la misma funcion 



// let total = 0 
// function acumular(num){
// total += num
// }

// porCadaUno(numeros, acumular)
// console.log(total)

// //! ARROS FUNCTION
// //Es usual definir la funcion directamente sobre el parametro como la funcion anonima, aprovechando la sintaxis de arrow function
// //esto permite definir acciones mas dinamicas

// const duplicado = []

// porCadaUno(numeros, (el) =>{
//         duplicado.push(el *2)
// })

// console.log(duplicado)

// //! METODOS DE BUSQUEDA Y TANSFORMACION 
// // forEach()
// // find()
// // filter()
// // some()
// // Map()
// // reduce()
// // sort()

// // cada imp de estos metodos estan pensados para solucionar problemas recurrentes con los arrays

// // //!FOREACH
// // es similar al ejemplo "porCadaUno"

// //todo CON ESTE PODEMOS IMPRIMIR LOS OBJETOS EN HTML
// // itera sobre el array y por cada elemento ejecuta la funcion que enviemos por parametro,
// // la cual recibe a su vez el elemento del array que se esta recorriendo:
// const numeros = [1,2,3,4,5,6]

// numeros.forEach( (num)=>{
// console.log(num)
// })

// // por cada numero hace un console.log

// //? Ejemplo en linea 71 de arrayproductos.js 



// //!FIND
// // El metodo find() recibe una funcion de comparacion por parametro.
// // captira el elemento que se esta recorriendo y retorna troue o false segun la comparacion ejecutada
// // el metodo retorna el primer elemento que cumpla con esa condicion

// const cursos = [
//     {nombre: "JavaScript", precio: 15000},
//     {nombre: "ReactJs", precio: 22000},
// ]

// //teniendo un array de objetos find nos permite hacer una busqueda de un objeto puntual
// // y lo buscamos por la propiedad que mas nos convenga 

// const resultado = cursos.find((el)  => el.nombre === "ReacJs")
// const resultado2 = cursos.find((el)=> el.nombre === "DW")

// console.log(resultado)
// console.log(resultado2)

// //NOTESE que el finf() retorna el primer elemento del array que cumpla con la condicione enviada
// //de ahi que podemos almacenarlo en una variable o usarlo de referencia para otro proceso
// //si no hay ninguna coincidencia en el array el metodo find retorna undifined
// //? Ejemplo practico en linea 87 de arrayproductos.js


// //! FILTER
// // El metodo filter() recibe, al igual que find(), una funcion comparadora por parametro , y retorna un nuevo array con todos los elementos que cumplan esa condicion.

// // si no tiene coincidencias retornara un array vacio

// const cursos2 = [
//     {nombre: "JavaScript", precio:15000},
//     {nombre: "ReactJS", precio: 22000},
//     {nombre: "AngularJS", precio: 22000},
//     {nombre: "desarollo web", precio: 16000}
// ]

// const resultado3 = cursos.filter((el) => el.nombre.includes("JS"))
// const resultado4 =cursos.filter ((el ) => el.precio < 17000)

// console.log(resultado)
// // [
// //     {nombre: "ReactJS", precio: 22000},
// //     {nombre: "AngularJS", precio: 22000},
// // ]

// //? Ejemplo practico en linea 127 de arrayproductos.js 


// //!SOME

// // El metodo some() funciona igual que el find() recibiendo una funcion de busquedad. En vez de retornar el elemento encontrado, some() retorna true
// // o false segun el resultado de la iteracion de busqueda
// console.log(cursos.some ((el)=>  el.nombre =="Desarollo Web"))

// //true

// console.log (cursos.some((el) => el.nombre =="VueJS"))

// // false

// //? Ejemplo practico en linea 146 de arrayproductos.js 

// //! MAP

// // EL metodo MAP() crea un nuevo array con todos los elementos del original transformados segun las operaciones
// //de la nueva funcion enviada por parametro, tiene la misma cantidad de elementos
// // pero los almacenados son el return de la funcion:

// const cursos3 = [
//     {nombre: "JavaScript", precio:15000},
//     {nombre: "ReactJS", precio: 22000},
//     {nombre: "AngularJS", precio: 22000},
//     {nombre: "desarollo web", precio: 16000}
// ]

// const nombres = cursos3.map((el)=> el.nombre)

// console.log(nombres)
// // ["javascript","ReactJS","angular",DesarolloWeb]

// const actualizado = cursos.map((el)=>{
//     return {
//         nombre: el.nombre,
//         precio: el.precio *1.23
//     }
// })

// console.log(actualizado)
// //la funcion retorna la propiedad precio multiplicada por 1.23


// //? Ejemplo practico en linea 162 de arrayproductos.js 

// //! REDUCE ()

// // EL metodo reduce() nos permite obtener un unico valor tras iterar sobre el array
// //funciona como un metodo que resume el array a un  unico valor de retorno

// //? Ejemplo practico en linea 178 de arrayproductos.js 

// //! SORT

// // El metodo sort() nos permite reordenar un array segun un criterio que definamos 
// // recibe una funcion de comparacion por parametro que , a la vez recibe dos elementos del array
// //la funcion retorna  un valor numerico (1,-1,0) que indica que elemento se posiciona antes o despues

// // ESTE METODO ES DESTRUCTIVO ES DECIR MODIFICA EL ARRAY SOBRE EL CUAL SE LLAMA

// const otrosnumeros = [4,1,5,200] ;
// numeros.sort((a,b)=> a-b ); //[1,5,40,200] 
// numeros.sort((a,b)=> b-a ); // [200,40,5,1]
// // para ordenar numeros, basta con restar uno al otro y el orden indica si sera ordenado de forma ascendente o descendente


// //! EJEMPLO DE METODOS DE ORDEN SUPERIOR

// const productos2 =[{ id: 1, producto: "Arroz",precio: 125},
//                    { id: 2, producto: "Fideo",precio: 70},
//                    { id: 3, producto: "Pan",precio: 50},
//                    { id: 4, producto: "Flan",precio: 100},
// ]

// const buscado = productos2.find(producto => producto.id === 3)
// console.log(buscado)   // { id: 3, producto: "Pan",precio: 50}

// const existe = productos2.some(producto =>producto.nombre === "Harina")
// console.log(existe) // false

// const baratos = productos2.some(producto => producto.precio <3)
// console.log(baratos)
// // [{  id: 2, producto: "Fideo",precio: 70}, {id: 3, producto: "Pan",precio: 50} }]

// const listaNombres = productos2.map(producto => producto.nombre)
// console.log(listaNombres)
// //[ "Arroz", "Fideo", "Pan", "Flan"]


//! DOM 
// Document Object Model 
//El modelo de objetos del documento (DOM)es una estructura de objetos generada por el navegador , la cual representa la pagina HTML actual

//Con JavaScript la empleamos para acceder y modificar de forma dinamica elementos de la interfaz 

//Es decir que , por ejemplo, desde JavaScript podemos modificar el texto contenido de una equiqueta < h1>

//!! COMO FUNCIONA?
// la estructura de un documento html son las etiquetas

// En el model de Objetos del Dcoument (DOM), cada etiqueta HTML es un objeto, al que podemos llamar nodo

//las etiquetas anidadas son llamas "nodosHijos" de la etiquta "nodo padre" que las contiene


// todos estos objetos son accesibles empleando JavaScript mediante el objeto global  document 
//po ejemplo: document.body es el nodo que represnta la eququeta < body> 

//* <p>Esta pagina es <strong> muy sencilla </strong> </p> */
//la etiqueta < P> se transforma en los siguientes nodos del DOM :

//                      #text-7
//                      "Esta pagina es "
//                   / 
//        p deriva a                 
//                   \
//                     STRONG--------#text-8
//                                   "muy sencilla"


// TOD o ESTO PODEMOS REVISARLO DESDE "ELEMENTS" EN LA HERRAMIENTA DE DESALLORADOR DE CHROME

//! TIPOS DE NODOS
// La especificacion completa de DOM define 12 tipos de nodos, los mas usados son:

//DOCUMENT: Nodo raiz del que derivan todos los demas nodods del arbol
//ELEMENT: Representa cada una de las etiquetas XHTML. Puede contener atributos y derivar otros nodos de el
//ATTR: Se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir uno por cada par atributo = valor
//TXT:Nodo que contiene el texto encerrado por una etiqueta HTML
//COMMENT: Representa los comentarios incluidos en la pagina HTML 


//! ACCEDER A LOS NODOS
// Existen distintos metodos para acceder a los elementos del DOM empleando la clase DOCUMENT

// los mas comunes son:
// getElementById()
// getElementsByClassName()
// getElementsByTagName()

//! getElementById()
//El metodo getElementById() sirve para acceder a un elemento de la estructura HTML
// utilizando su atributo ID como identificacion.

//? Ejemplos en variables.js linea 1 y html 

//! getElementsByClassName()
// sirve para acceder a un conunto de elementos de la estructura HTML, utilizando el atributo class como identificacion

//! getElementsByTagName()
//sirve para acceder al conjunto de elmentos de la estructura HTML, utilizando su nnomre de etiqueta como identificacion

//!    INNER TEXT 
//la propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder y/o modificar el contenido textual
//de algun elemento del DOM 


//!   INNER HTML 
 //todo este es el que necesito no inner text
// permite definir el codigo html interno del elemento seleccionado 
// el navegador lo interpreta como codigo html y no como contenido de texto 
// permitiendo desde un string crear una nueva estructura de etiquetas y contenido


//Codigo html de referencia

/* <div id= "contenedor "></div>

//codigo JS

let container = document.getElementById("contenedor")

// cambio el codigo HTML interno 

container.innerHTML = "<h2> "Hola mundo" </h2><p>Lorem Impsum</p>"


//Resultado en el DOM 

<div id= "contenedor">
<h2>Hola Mundo!</h2>
<p>Lorem Impsum</p>
</div>

1.1042 clase DOM


// //! CLASSNAME 
// A traves de la propiedad clasName de algun nodo seleccionado
//  podemos acceder al atriputo class del mismo y definir cuales van a ser sus clases
titulo.className
console.log("")
titulo.className = "red-text" 


 */

//!! AGREGAR O QUITAR ELEMENTOS 

//para crear elementos se utiliza la funcion document.creatElement(), y se debe indicar el nombre de etiqueta HTML qque representara ese elemento 
//Luego debe agregarse como hijo el  nodo creado con APPEND(), al body
//o a otro nodo del documento actual


// //crear nodo de tipo Elemento, etiqueta p
// let parrafo = document.createElement("p");


// // insertar HTML Interno
// parrafo.innerHTML = "<p>Hola Coder!</p>";


// // añadir el nodo Element como hijo de body
// document.body.append(parrafo);

//Para Eliminar nodos existentes y nuevocs , el metodo remoce()
//permite eliminar un nodo seleccionado del DOM

// let  parrafo = document.getElementById("parrafo1");
// //Eliminando el propio elemento
// parrafo.remove();


// let paises = document.getElementsByClassName("paises");
// // eliminando el primer elemento de la clase paises
// paises[0].remove()


//! OBTENER DATOS DE UNPUTS
// //para obtener o modificar datos de un formulario HTML desde JS
// //podemos hacerlo mediante DOM Accediendo a la propiedad value
// // de cada imput seleccionado

// const inputNombre = document.getElementById("nombre")
// inputNombre.value

// si tenemos un elemento con el ID nombre en la consola, nos devuelve lo que le hayamos asignado 


//Ejmeoplo aplicado

// //obtenemmmos el nodo donde vamos a agregar los nuevos elementos 
// let padre = document.getElementById("personas");

// //Definimos el array con la informacion a agregar 
// let personas = ["HOMERO","MARGE","BART", "LISA", "MAGGIE"];

// //iteramos el array con for ....of

// for( const persona of personas){
//     //creamos un nodo <li> y agregamos al padre den cada ciclo
//     let li = document.createElement("li");
//     li.innerHTML = persona
//     padre.appendChild(li);
// }





// //HTML de referencia
// {/* <input id= "nombre" type = "text">
// <input id= "nombre" type = "text"> */}


// //JS
// document.getElementById("nombre").value = "homero";
// document.getElementById("edad").value = 39;

// //! PLANTILLAS DE TEXTO

//DOM 1.40

//En versiones anteriores a ES6, solia emplearse la concatenacion para incluir valores
//de las variables en cadena de caracteres (string). Esta forma puede ser poco
//lefible ante un gran numero de refrenecias EN JS ES& que solventa la situacion con los
//template strings

// let producto = {id : 1, nombre :"Arroz", precio: 125};
// //concatenado
// let concatenado = "ID: " + producto.id + " - producto: " + producto.nombre + " $ " +producto.precio;

// la comilla invertida se usa Alt+96

// let plantilla =`ID: ${producto.id} - producto: ${producto.nombre} $ ${producto.precio}`;

// // El valor es el identico pero la construccion de la plantilla es mas sencilla

// console.log(plantilla);
// console.log(concatenado);

//!PLANTILLA LITERALES E InnerHTML

//Las plantillas son un medio para incluir variables en la estructura HTML de nodos nuevos o existentes, modificando el innerHTML

// let producto = {id : 1, nombre :"Arroz", precio: 125};
// let contenedor =  document.createElement("div");

// //Definimos el innerHTML del elemento con una plantilla de texto 

// contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                         <p> Producto: ${producto.nombre}</p>
//                         <b>$  ${producto.precio}</b>`;

//                         document.body.appendChild(contenedor);


//EJEMPLO APLICADO : CREANDO ELEMENTOS DESDE OBJETOS

// const productos2= [{id: 1, nombre: "Arroz", precio: 125},
// {id: 2, nombre: "Fideo", precio: 70},
// {id: 3, nombre: "Pan", precio: 50},
// {id: 4, nombre: "Flan", precio: 100}      ];

// for (const producto of productos2) {
//     let contenedor = document.createElement("div");

//     //definimos el innerHTML del elemento con una plantilla de texto 
//     contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
//     <p> Producto: ${producto.nombre}</p>
//     <b>$ ${producto.precio}</b>`
// document.body.appendChild(contenedor);
// }

//! QUERY SELECTOR
//El metodo querySelector() nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores CSS

{/* <div id = "contenedor">
    <p class= "texto"></p>
</div> */}

//puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores ;
let parrafo = document.querySelector("#contenedor p")

//seleccionar solo el contenedor por id con #

let contenedor = document.querySelector("#contenedor")

//o por clase:

parrafo = document.querySelector(".texto")

// Lo inteneranter del querySelector es que tambien aplica a pseudo-clases de CSS
//brindando un nivel mas avanzado de precision:

let radioChecked = document.querySelector(".radio:checked")

// suponiendo que etengo elemento html radio button y quiero seleccionr solo 
//aquel que este en checked, esto lo puedo lograr muy facil con querySelector y la pseudo-clase de CSS

//! QUERYSELECTORALL

//query selector retorna el primer elemento que coincida con el parametro de busqueda, o sea un solo elemento .
//si quiero obtener una coleccion de elementos puedo utilizar el metodo querySelectorAll()
//siguiendo el mismo comportamiento.

//! EVENTOS

// Los eventos son la manera que tenemos en javascript de controlar las acciones de los usuarios y definir un comportamiento
//de la pagina o aplicacion cuando se produzcan

//Con JavaScripty es posible definir que sucede cuando se produce un evento, por ejemplo, cuando se realiza
//clic en cierto elemento o se inserta un texto en un determinado campo 

//como funciona?
//javascript permite asignar una funcion a cada uno de lo seventos
// reciben el nombre de event handlers o manejadores e evventos
//asi Ante cada evento Javascript asigna y ejecuta la funcion asociada al mismo

//Hay que entender que los eventos suceden constantemente en el navegador
//Javascript lo que nos permite es escuchar eventos sobre elementos seleccionados 

//Cuando escuchamos el evento que esperamos se ejecuta la funcion que definimos en respuesta

//a esta escucha se le denomina event listener


 //! Opcion 3: Sintaxis

 // Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML

// la denominacion del atributo es identica al de la propieda de la opcion 2 (prefijo ON)

/* <input type="button" value= "CLICK2" onclick="alert("Respuesta 3") ;"> */

//la funcion puede declararse entre las comillas o bien tomarse una referencia existente en el scrpit

//! Opcion 2

//Eplear una propiedad del nodo para definir la respuesta al evento. Las propiedades se identifican con el nombre del evento y el prefijo ON

//Tambien es posible emplear funciones anonimas para definir los manejadores de eventos

// </html>
//     <head>
//         <title>Mi primer APP</title>
//     </head>
// </html>
// <body>
//     <h2>Coder House</h2>

//     <button  id="btnPrincipal">CLICK</button>


// <script>
//     let boton = 
//     document.getElementById("btnPrincipal")
//     boton.onclick = () => (console.log("Respuesta 2"))
// </script>
// </body>
// </html>

//! Opcion 1

// El metodo addEventListener() permite definir que evento se escucha sobre cualquier elemento seleccionado

//El primer parametro corresponde al nombre del evento y el segundo a la funcion de respuesta

// <html>
//     <head>
//         <title>Mi primer APP</title>
//     </head>

// <body>
//     <h2>Coder House</h2>
//     <button  id="btnPrincipal">CLICK</button>


// <script>
//     let boton = 
//     document.getElementById("btnPrincipal")
//     boton.addEventListener("click", respuestaClick)
//     function respuestaClick (){
// console.log("Respuesta evento");
//     }
// </script>


// </html>
// </body>

// las opciones 1y2 
// son las mas recomendades
// si bien se pueden presentar casos de aplicacion especificos
// (por ejemplo, en la opcion1 el nombre del evento puede venir de una variable a 
// usar la propiedad, y esto no puede hacerse en la 2),
//se identifican como formas de definicion de eventos equivalentes

 // La opcion 3, auqnue es de facil implementacion, no es recomendad
 //para proyectos de produccion

 // no se considera buena practica declarar funciones y codigo JavaScript dentro del HTML

 //! Eventos mas comunes

 //mouse 
 //teclado
 //change
 //input
 //submit


 //!Evento del MOUSE
//Se producen por la interaccion del usuario con el mouse
//Entre ellos se destacan los que se encuentran a continuacion

//mousedown/mouseup: se oprime/suelta el boton del raton sobre un elemento
//mouseover/mouseout: el puntero del mouse se mueve sobre/sale del elemento
//mousemove: El movimiento del mouse sobre el elemento activa el evento
//click: se activa despues de mousedown o mouse up sobre un elemento valido 

// //CODIGO HTML DE REFERENCIA
// <button id = "btnMain"> CLICK </button>

// //Codigo JS
// let boton = document.querySelector("btnMain")
// boton.onclick = () => {console.log("Click")}
// boton.onmousemove = ()=> {console.log("move")}


//! Eventos del teclado
//S producen por la interaccion del usuario con el teclado 
//Entre ellos destacan los que se encuentra acontinuacion 

// KEYDOWN: Cuando se presiona
// KEYUP:Cuando se suelta una tecla
// KEYPRESS: cuando el ususario esta tecleando algo se escucha el evento keypress

//CODIGO DE REFERENCIA

// <Input id= "nombre" type = "text">
// <Input id= "edad" type = "number">

//Codigo JS

// let input1= document.getElementById("nombre")
// let input2 = document.getElementById("edad")

// input1.onkeyup = () =>{ console.log("KeyUp")}
// input2.onkeydown = () =>{ console.log( "KeyDown")}

// CHANGE: se activa cuando se detecta un cambio en el valor del elemento 
        //por ejemmplo mientras se escribe en un input de texto no hay evento change,
        //pero cuando se pasa a otra seccion de la aplicacion entonces si ocurre

//CODIGO DE REFERENCIA

// <Input id= "nombre" type = "text">
// <Input id= "edad" type = "number">

//Codigo JS

// let input1= document.getElementById("nombre")
// let input2 = document.getElementById("edad")

// input1.onchange = () =>{ console.log("KeyUp")}
// input2.onchange = () =>{ console.log( "KeyDown")}

//! Evento input

//si queremos ejecutar una funcion cada vez que se tipea sobre el campo conviene trabajar
//directamente con elevento input

//codigo HTML de referencia
{/* <input id = "nombre " type = "text"> */}

//codigo JS 

// let input1 = document.getElementById("nombre")
// input1.addEventListener("input", () => {
//     console.log(input1.value)
// })

//! Evento Submit

//El evento submit se activa cuando el formulario es enviado, normalmente se utiliza para validar 
// el formulario antes de ser enviado al servidor o bien para abortar el envio y procesarlo con JavaScript

//CODIGO HTML DE REFERENCIA 
{/* <form id= "formulario">
    < input type="text">
    < input type="number">
    < input type="submit" value ="enviar">
</form> */}

//codigo JS

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario (e){

// function validarFormulario(e);
// e.preventDefault();
// console.log("Formulario Enviado")
// }

//! Otros Eventos

//Existen otros eventos que podemos utilizar
//algunos son eventos estandar definidos en las especificaciones oficiaes, mientras que otros son eventos usados internamente
//por navegadores especificos

// btnSubmit.addEventListener("mousemove", ()=>{
//     btnSubmit.title= "te paraste sobre el boton"
// })

//la forma de declararlos es similar a lo abordado en esta clase lo que necesitamos aprender es bajo que condicion se disparan los eventos que buscamos implementar
//en alfunos casos, necesitamos obtener informacion contextual del evento para poder realizar acciones

//por ejemplo, ante el evento submmit necesitamos prevenir el comportamiento por defecto para operar correctamente

// para esto existe en JavaScript el objeto event 
//en todos los navegadores modernos se crea de forma autmoatica un parametro que se pasa a la funcion manejadore, por lo que no es necesario incluirlo en llamada
//Ese parametro puede o no usarse en el handler, pero siempre estara disponible en la llamada.

// Ejemplo aplicado : datos del formulario usando el EVENt

//CODIGO HTML DE REFERENCIA
{/* <form id= "formulario">
    <input type = "text">
    <input type = "text">
    <input type = "text">
<form/> */}


    //CODIGO JS
// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     //cancelamos el comportamiento del evento
//     e.preventDefault();
//     //obtenemos el elemento desde el cual se disparo el evento 
//     let formulario = e.target

//     //Obtenemos el valor del primer hijo <input type="text">
//     console.log(formular.children[0].value);
//     //obtenemos el valor del segunodo hijo <input type="number">
//     console.log(formulario.children[1].value);
// }


// ! STORAGE O ALMACENAMIENTO

// Eo objeto Storage (API de almacenamiento web) permite almacenar datos de maera local en el navegador sin necesidad de realizr ninguna
//cconexcion con el servidor

// de esta manera , cada cliente puede preservar informacion de la aplicacion 

//el navegador nos ofrece varios tipos de storage 

//! STORAGE O ALMACENAMIENT

//las opciones disponibles con Storage API, son:

//?local/sessionStorage
//cookies


//?WebSQL 
// de salida no se esta actualizando

//?indexdb
// muy pesado youtube premium y netflix descarga

//tranajaremos con localStorage y sessionStorage

//cada sitio o aplicacion web genera su cuota de storage (limitada al sitio ) 
//solo si empieza a almacenar datos.

//tanto localStorage como sessionStorage cuantan con cuatro metodos para manejar el almacenamiento de informacion del lado del usuario

//- setitem()
//-getItem()
//-removeItem()
//-clear()

//! LOCALSTORAGE
//los dato s que guardamos en localStorage se almacenan en el navegador de forma indefinidad (o hasta tanto se borren la informacion de navegacion del browser)
//LOS DATOS PERSISTEN ANTE REINICIOS DE NAVEGADOR

//! LocalStorafe : setItem()

// para almacenar informacion se utiliza setItem()

// Metodo-> localStorage.setItem(clave,valor)
// clave = nombre para identifiacar el ELEMENTO 
// valor = valor/ contenido del elemento

localStorage.setItem("Bienvenida","Hola Coder!"),
localStorage.setItem("esValido",true);
localStorage.setItem("unNumero",20)


//CLAVE - VALOR

// la informacion almacenada en el Storafe se fuarda en forma de CLAVE-VALOR

//similar al tratamiento de objetos, definimos claves en el storage donde almacenamos valores.
// Podemos ver el storage en el navegador a traves de la pestaño de application

// en la pestaña aplicacion a la izquierda tenemos storage y dentro de storage podemos navegar a traves
// de los metodos como indexDB webSQL cookies

//session storage se borra cada que cerramos la ventana

//localStorage.setItem("nombre",inputNombre.value)
// para agregar el valor dentro del input del nombre 

//localStorage.setItem("email",inputEmail.value)
//localStorage.setItem("email",inputEmail.value)

//!sessionStorage: setItem()
//la informacion alamacenada en sessionStorage (variable global preexistente) 
//se alamacena en el navegador hasta que el usuario cierre la ventana.

// Solo existe dentro de la pestaña actual del navegador. Otra pestaña con la misma pagina 
//tendra otro sessionStorage distinto, pero se comparte entre iframes en la pestaña ( asumiendo que etengan el mismo origen)

// inputEmail.value = sessionStorage.getItem("nombre")
// sessionStorage.setItem("nombre",inputNombre.value)

// el tratamiento es similar al localStorage:

// Metodo-> sessionlStorage.setItem(clave,valor)
// clave = nombre para identifiacar el ELEMENTO 
// valor = valor/ contenido del elemento

localStorage.setItem("seleccionados",[1,2,3]),
localStorage.setItem("esValido",true);
localStorage.setItem("unNumero","infomail.com")


//? session storage casi no se usa 

//! Recorriendo el storage

//es posible obtener todos los calores almacenados en el localStorage o sessionStorage con un bucle
// pero no podemos usar for...of por queue son objetos iterables, ni for ...in
//por que obtenemos otras propiedades del objeto que no son valores almacenados

//el bucle a emplear es for con el metodo key

//ciclo opara recorrer las claves almacenadas en el objeto localStorage

// for(let i=0; i < localStorage.length; i++){
//     let clave= localStorage.key(i);
// }
// console.log("clave:"+ clave)
// console.log("valor: "+ localStorage.getItem(clave));

//!Eliminar datos del storage

//Podemos eliminar la informacion almacenada en sessionStorage o LocalStorage
//usando el metodo removeItem o clear:

//! JSON

//Si queremos almacenar la informacion de un objeto en un storage 
// hay que tener en cuenta que tanto la clave como el valor se almacenan en strings

//Ante cualquier otro tipo a guardar como un numero o un objeto , se convierte a cadena de texto automaticamente

//! alamcenar objetos en storage

// Entonces al buscar almacenar un objeto sin una transformacion previa, fuardamos [object Object]
//la converson por defecto de objeto a string. para fuardar la informacion correctamente hay que trasformar al objeto en JSON

const productoJson = {id: 2, producto: "Arroz"};

localStorage.setItem("productoJson", productoJson)// se guarda [object Object]


//ACCESO TIPO OBJETO

//Dado que el localStorage y sessionStorage son objetos globales,
//es posible crear y acceder a las claves como si fueran propiedades 
// pero esto no es muy recomendable por que hay eventos asociados a la modificacion del storage cuando se emplea geItem
// o setItem

//Guarda una clave
localStorage.numeroPrueba = 5;

//leer una clave
alert(localStorage.numeroPrueba);

let clave = "toString";  // toString metodo reservado
localStorage [clave] = "6"

//!! todo LO QUE ENTRA EN STORAGE ES CADENA DE TEXTO

//! QUE ES JSJON
// javaScript Object Notation (JSON) es un formato basado en texto plano
// para representar datos estructurados con la sintaxis de objetos de JavaScript
// Es comundmente utilizado para enviar y almacenar datos en aplicaciones web

// Aunque es muy parecido (casi similar) a la sintaxis de JavaScript 
// puede ser utilizado independientemente de JavaScript, y 
// muchos entornos de programacion poseen la capcidad de leer
//(convertir ; parsear) y generar JSON

//JSON ES UN STRING CON UN FORMATO ESPECIFICO

//! CONVERSIONES DE/Hacia JSON

// Cuando sea necesaio enviar un objeto JavScript al servidor o almacenarlo en storage,
//sera necesario convertirlo a un JSON (una cadena) antes de ser enviado
// Para eso usamos los siguientes metodos:

//Stringify acepta un objeto como parametro y devuelve la forma de texto JSON equivalente
//parse recibe un texto JSON como parametro y devuelve el objeto JavaScript correspondiente

//! STRINGIFT 
//con JSON.stringify podemos transformar un objeto JavaScript a un string en formato JSON

// const producto1 = {id: 2,producto: "Arroz"}
// const enJSON = JSON.stringify(producto1);

// console.log(enJSON); // {"id":2, "producto": "Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON); //string

// localStorage.setItem("producto1",enJSON);
//se fuarda {"id":2, "producto": "Arroz"}

//! PARSE
//con JSON.parse p"demos transformar string en formato JSON a objeto JavaScript
// const enJSON = "{"id": 2, "producto" : "Arroz"}";
// const producto1 = JSON.parse(enJSON);

// console.log(typeof enJSON); //string
// console.log(typeof producto1); // object

// console.log(producto1.producto); // {"id":2, "producto": "Arroz"}

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id); // 2


//!! ejemplo aplicado

const productos = [{id: 1, producto: "Arroz", precio:125},
{id: 1, producto: "Fideo", precio:70},
{id: 1, producto: "Pan", precio:50},
{id: 1, producto: "Flan", precio:100}];

const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};

//Almacenar producto por producto

for(const producto of productos){
    guardarLocal (producto.id, JSON.stringify(producto));
}

// o almacenar array completo
guardarLocal("listaProductos",JSON.stringify(productos));

//! Recuperar datos

//muchas veces usamos el storage para recuperar datos relacionados
//a la ultima navegacion del usuario , por ejemplo, su ultima sesion de login o el ultimo
//estado de su carrito de compras

//para esto, pensamos en inicializar las variabes de la app consulta0
// consultando el Storage en el momento de inicio

let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"))


//si habia algo almacenado, lo recuperamos. si no le pedimos un ingreso

if ( usuarioEnLS) {
    usuario = usuarioEnLS
}
else{
    usuario = prompt("ingrese su nombre de usuario")
}

//!! Puntos a tener en cuenta

//Los datos en formato JSON se pueden almacenar en archivos externos . json Ejemplo: datos.json

//JSON es solo un formato de datos - contiene solo propiedades , no metodos

//una coma o dos puntos mal ubicados pueden producir que un archivo JSOn no funcione 
//se deve se rcuidadeoso para validar cualquier dato que se quiera utilizar
//https://jsonformatter.curiousconcept.com/

//A diferencia del codigo JavaScript en que las propiedades del objeto pueden no estar entre comillas, en JSON 

