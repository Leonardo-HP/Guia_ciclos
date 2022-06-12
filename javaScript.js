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

// //CLASES

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
// RESUMEN OBJETOS 
// -Los objetos tienen propiedades y metodos
// -El metodo constructor de un objeto sirve para crear el mismo y asignarle sus propiedades, permite crear varios objetos usando el mismo constructor
// -Las fucniones de js son generalmente de acceso global y lo smetodos son unicamente utilizados para ser invocados por los objetos que lo contienen
// -Las clases son otra forma de crear objetos personalizados en JS
//      */

// ARRAYS 