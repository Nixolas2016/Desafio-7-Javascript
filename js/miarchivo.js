Swal.fire({
    title: "¡Bienvenido a Nixo Games!"
})

class Producto {
    constructor(id, nombre, precio, desarrollador, img = "") {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.desarrollador = desarrollador
        this.img = img
    }
}



//USO DE DESESTRUCTURACIÓN + ALIAS

const item = {
    item_id: 4,
    product_name: "Grand Theft Auto V",
    price_per_unit: 314
}

const {
    item_id: id,
    product_name: nombre,
    price_per_unit: precio
} = item

console.log(id, nombre, precio)


let baseDatos = []
baseDatos.push(new Producto(0,"Among Us",67.99,"Innersloth",))
baseDatos.push(new Producto(1,"PAYDAY 2",149.99,"OVERKILL-a Starbreeze Studio"))
baseDatos.push(new Producto(2,"Fallout 4",799.00, "Bethesda Game Studios"))
baseDatos.push(new Producto(3,"Mafia: Edición Definitiva",2559.00, "Hangar 13"))
baseDatos.push(new Producto(4,"Grand Theft Auto V",314.00,"Rockstar North"))
baseDatos.push(new Producto(5,"Dead by Daylight",999.00,"Behaviour Interactive Inc."))




let section = document.getElementById("seccion-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")


    baseDatos.forEach((producto)=> {
        let cardClonada = card.cloneNode(true)
        section.appendChild(cardClonada)


        cardClonada.children[0].innerText = producto.nombre


        cardClonada.children[1].innerText = producto.precio


        cardClonada.children[2].innerText = producto.desarrollador

        //producto.nombre === "Mafia: Edición Definitiva" ? console.log("El juego esta disponible") : console.log("El juego no esta disponible")

    })


let contador = 0;

const parrafo = document.querySelector(".cantidad");

const botonsumar = document.getElementById("mas");

botonsumar.addEventListener("click", () => {

//APLICADO OPERADOR TERNARIO

    contador == 10 ? contador == 10 : contador++; parrafo.textContent = contador;

});

const botonrestar = document.getElementById("menos")

botonrestar.addEventListener("click", () => {

//APLICADO OPERADOR TERNARIO

    contador == 0 ? contador == 0 : contador--; parrafo.textContent = contador;

});

const bloque = document.querySelector(".product-card")

bloque.addEventListener("mouseenter", () => {
    bloque.style.backgroundColor = "red";
})

bloque.addEventListener("mouseleave", () => {
    bloque.style.backgroundColor = "rgb(151, 16, 16)";
})

const baseDatosEnvio = JSON.stringify(baseDatos)

localStorage.setItem("Juegos", baseDatosEnvio)

const baseDatosRecibo = localStorage.getItem("Juegos")

//USO DE SPREAD DE ARRAYS

const juegosArray = JSON.parse(localStorage.getItem("Juegos"))
console.log(...juegosArray)

const boton = document.querySelector("#myBtn")

boton.addEventListener("click", () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: false,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: '¡Añadido al carrito con exito!'
    })
})

const confirm = document.querySelector("#cassss")

confirm.addEventListener("click", () => {

Swal.fire({
    title: 'Good job!',
    text: 'You clicked the button!',
    icon: 'success',
    showConfirmButton: "cool"
})
})

