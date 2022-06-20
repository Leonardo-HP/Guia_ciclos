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
    productos.push(new Producto(1234,"HAMSTER LOCO ECO E17",15000))
    productos.push(new Producto(1235,"HAMSTER electronico",15000))

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


//?Ejemplo de forEach
// por cada iteracion va a tomar un elemento cada uno de manera individual
//lo va a llevar dentro de la funcion y dentro de ella definimos lo que queremos que haga 
//en este ejemplo vamos a imprimir una tabla con las caracteristicas de cada producto
function listarProductos() {
debugger
productos.forEach((pro)=> {
console.table(pro)

// Si quisieramos solo imprimir el nombre podriamos imprimirlo desde el metodo de lo que queremos ver 
// y enlistarlos
// console.log(producto.nombre)

})
}

//? ejemplo de find

//todo USAR PARA BARALLAS 
function buscarProducto(){
       //    itramos sobre el array de productos, eñ ,metodo find busca un producto el cual tiene que coincidir con el dato que le pasamos por variable
               //y en cuanto lo encuentra empieza a iterar el array de productos
    //tomando cada uno de los elementos, lo pasa como parametro hace la comparacion 
    // y si el dato id es igual a lo que recibomos como parametro (eBuscar del prompt )
    // y nos regresa el objeto en resultado 
    let aBuscar = prompt("ingrese el codigo del producto a buscar:")
    debugger
        let resultado = productos.find((producto) =>producto.id === parseInt(aBuscar))

//Ya que find() retorna undefined si es que no encuentra un match podemos agregarlo como una respuesta booleana
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado )
 
        }
        else {
            console.log("No se ha encontrado")
        }

// En caso de querer buscar un nombre, para que se busque dentro de la lista sin importar como lo escriba(mayus o minus)
//podemo agregarle el metodo .toUpperCase() o .toLowerCase() para que la itereacion sea exacta


    //     let aBuscar = prompt("ingrese el nombre del producto a buscar:").toUpperCase()
    //     debugger

    // y si el usuario solo ingresa parte del nombre podemos agregar el metodo .includes
    //  para que busque en el string si es que tiene coincidencia
    //         let resultado = productos.find((producto) =>producto.nombre.includes(eBuscar))
    //             console.crear()
    //             console.table(resultado )
    // }

          
}

//? ejemplo de FILTER 

//muy parecido al find, el filter recorre los elementos buscando coincidencias con los parametros que introducimos 

function filtrarProductos(){
    let aBuscar = prompt("ingrese el nombre del producto a buscar:").toUpperCase()
debugger
    let resultado = productos.filter((producto) =>producto.nombre.includes(aBuscar))
    if (resultado !== undefined) {
        console.clear()
        console.table(resultado )
    }
    else {
        console.log("No se ha encontrado")
    }

}