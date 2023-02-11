const nombre = "Luis"
const apellido = "Naveda"

const objeto = {
    nombre,
    apellido
}

//Almacenando el objeto en el Session Storage

//sessionStorage.setItem("objeto", JSON.stringify(objeto))

//Almacenando el objeto en el Local Storage 

//localStorage.setItem("objeto", JSON.stringify(objeto))

//Creando cookie
const ahora = new Date
//document.cookie = `objeto=${JSON.stringify(objeto)};expires=${new Date(now.getTime() + 2 * 60000)}`