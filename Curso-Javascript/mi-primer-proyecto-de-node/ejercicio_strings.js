const nombre = "Luis"
const apellido = "Naveda"
const estudiante = nombre + " " + apellido
const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()
const cant = estudiante.length
const primeraLetra = nombre.charAt(0)
const ultimaLetra = apellido.charAt(5)
const eliminaresp = estudiante.replace(/ /g, "")
const estaNombre = estudiante.includes(nombre)


console.log(estudiante) 
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(cant)
console.log(primeraLetra)
console.log(ultimaLetra)
console.log(eliminaresp)
console.log(estaNombre)