const productos = ["Arandanos","Grosellas","Banana","Manzana","Pera","Papaya"];
const carrito = [];

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")
const listadoFrutas = document.getElementById("listadoFrutas")
const listadoCarrito =document.getElementById("listadoCarrito")

const li = document.getElementsByClassName("fruta")

const div = document.getElementsByTagName("div")

titulo.innerText = "www.frutas.com"

slogan.innerText = "Tus frutas, aqui"


function cargarProductos(){

listadoFrutas.innerHTML =""
    for (const producto of productos){
        const li = document.createElement("li")
            li.className = "fruta"
            li.innerText = producto
            li.id = producto + "prod"
            li.addEventListener("click", ()=> {
                agregarAlCarrito(`${producto}`)
            })
            listadoFrutas.append(li)


}
function agregarAlCarrito(prod){
    //Agregamos al carrito
    carrito.push(prod)
    //creamos el elemento tipo li
    const li = document.createElement("li")
    //se le genera la clase difernete y correspondiente al carrito
    li.className = "frutaEnCarrito"
    //se le asigna un nombre a travez de la propiedad innertext
    li.innerText = prod
    //definimos el id dinamico
    li.id = prod + "enCarrito"
    //se le agrega un escuchador de eventos
    li.addEventListener("dblclick", ()=> {
        removerDelCarrito(`${li.id}`)
    })
    listadoCarrito.append(li)


}
function removerDelCarrito(prod){

    const productoARemover = document.getElementById(`${prod}`)
        productoARemover.remove()
}
}

function agregarFruta(){
    productos.push(prompt("que fruta quiere agregar?"))
}

cargarProductos()

// const  imagen = document.querySelector("img") 
// // imagen.onclick = () =>{
// // alert("detecatendo el evento Click")
// // }

//                                 //el segundo parametro podemos
//                                 //llamar a la funcion o agregar 
//                                 //arrow function       
// imagen.addEventListener("click", ()=>{
//     agregarFruta(), alert("detecatendo el evento Click")
// })
                            



