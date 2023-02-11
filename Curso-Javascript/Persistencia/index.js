localStorage.setItem("nombre", "Luis")

//console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({nombre: "Luis", edad: 26}))

//console.log(JSON.parse(localStorage.getItem("persona")))

//JSON Stringify --> Convierte un objeto/ array en string

//JSON parse --> COnvierte un objeto/array convertido a stringify en un objeto de JS

localStorage.removeItem("nombre")

//Session Storage

sessionStorage.setItem("nombre-sesion", "Luis")

//Es todo igual a Local Storage

console.log(document.cookie)

//Crear cookie

document.cookie = "nombreCookie=LuisCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2024/0/01).toUTCString()

console.log(document.cookie)

//Expires para colocar fecha de vencimiento