const boton = document.querySelector("#btn")
console.log(boton)

boton.addEventListener("click", ()=>{
    //alert("Has hecho click")
    //confirm("¿Estas de acuerdo?") && console.log("OK")
    confirm("¿Estás de acuerdo?") ? console.log("OK")
    : console.log("NO")
})

const botonInfo = document.querySelector("#info")

botonInfo.addEventListener("click", ()=>{
    const nombre = prompt("Cual es tu nombre?")
    if(nombre){
        console.log("Tu nombre es " + nombre)
    } else {
        console.log("No has escrito nada")
    }
})

const lista = [
    {
    nombre: "Luis",
    edad: 26
},
{
    nombre: "Pedro",
    edad: 25},
{
    nombre: "Emi", 
    edad: 23}]

    console.table(lista) //Para expresar objetos mejor en la consola