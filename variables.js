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
debugger
listadoFrutas.innerHTML =""
    for (const producto of productos){
 listadoFrutas.innerHTML += "<li class= fruta >" + producto + "</li>"
}
}

function agregarFruta(){
    productos.push(prompt("que fruta quiere agregar?"))
}