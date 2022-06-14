const productos =[]
const carrito = []



class Producto{
    
    constructor(id,nombre,importe){
    this.id = id
    this.nombre = nombre
    this.importe = importe
}
precioFinal() {
    return parseFloat((this.importe*IVA).toFixed(2))
}
}

//imprime los productos dentro del array productos

function listarProductos(){
    console.table(productos)
}

//agrega un nuevo producto al array de productos
function agregarProducto(){
    debugger
    let id= creoID()
    let nombre = prompt("ingresa el nombre del producto:")
    let precio = parseInt(prompt("ingresa el precio"))
    productos.push(new Producto(id, nombre, precio))
}


//este es un generador de numeros random que regrea un numero del 0 al 1 por lo que lo 
//multiplicamos por 1000 para que nos genere una id para nuestros productos
//en numeros enteros, por lo cual tambien agregamos el parseint
function creoID() {
    return parseInt(Math.random()* 1000)
}


// en lugar de insertar manualmente ya esta incluidos 2 productos al ejecutarse esta funcion

generadorAutomatico()
function generadorAutomatico(){
    productos.push(new Producto(1234,"notebook ECO E17",15000))
    productos.push(new Producto(1235,"hamster electronico",15000))

}

// la combinacion de objetos + arrays genera estructuras complejas de datos 
//los metodos de arrays y las herramientas para recorrerlos nos permiten acceder 
//y manipular todos estos datos de forma prolija

    // FOR OF
// la sentencia for..of permite recorrer un array ejecutando un bloque de codigo por cada elemento del objeto 
//podemos enlistar nuestros objetos dentro del array con este ciclo
//de esta manera podemos imprimir los elementos que estan en nuestro array

function iterrarArray(){
    for(let producto of productos){
        console.table(producto)
    }
}

// es un iterador que recorre el array de principio a fin y en cada iteracion accedemos al elemento en cuestion a travez
//de la referencia que declaramos 
//por cada iteracion se ejecuta el bloque de codigo que definimos ente llaves



