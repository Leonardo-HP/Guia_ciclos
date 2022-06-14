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

function listarProductos(){
    console.table(productos)
}

function agregarProducto(){
    debugger
    let id= creoID()
    let nombre = prompt("ingresa el nombre del producto:")
    let precio = parseInt(prompt("ingresa el precio"))
    productos.push(new Producto(id, nombre, precio))
}









function creoID() {
    return parseInt(Math.random()* 1000)
}