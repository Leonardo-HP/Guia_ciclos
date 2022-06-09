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




