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
                            

// inputs para checkout

const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")

let datosDeInput = ""

// // cuando el input de texto tenga el cursor de escritura se va a aplicar un color 
// inputNombre.addEventListener("focus", ()=>{
//     inputNombre.className="fondo-inputs"
// })
// // cuando hagamos click en otro lado que no sea el input de escritura se
// inputNombre.addEventListener("blur", () => [
//     inputNombre.className=""
// ])

// inputNombre.addEventListener("input", () => {

// console.log(inputNombre.value)

// })

const focoEnCampos = ()=> {
    // funcion para generar escucha de eventos dinamica
    // por si se agregan otros elementos HTML del tipo INPUT
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}


focoEnCampos()


// el objeto global EVENT

document.addEventListener("submit", (e)=> {
//metodo .preventdefault previene que suceda el evento por defecto
    e.preventDefault()
    guardarDatosDeUsr()
    console.warn("Frenamos el evento SUBMIT de HTML")


})


//? ACCESO TIPO OBJETOS
function guardarDatosDeUsr(){
    debugger
    const datosDeUsr = {
    nombre: inputNombre.value,
    telefono: inputTelefono.value,
    email: inputEmail.value
}

//? JSON
let str = JSON.stringify(datosDeUsr)
localStorage.setItem("datosDeUsr", str)
}

function recuperoDatosDeUsr(){
    if (localStorage.getItem("datosDeUsr")){
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
            inputNombre.value = datosDeUsr.nombre
            inputTelefono.value = datosDeUsr.telefono
            inputEmail.value = datosDeUsr.email

}
}

// esto hace que si vuelven al mismo lugar los input ya esten con la informacion
recuperoDatosDeUsr()