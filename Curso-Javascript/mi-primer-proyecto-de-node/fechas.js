//Fecha de hoy
const fechaHoy = new Date()
console.log(fechaHoy)

//Fecha de nacimiento
const fechaNac = new Date(1996, 10, 08)
console.log(fechaNac)

//Más tarde que mi fecha de nacimiento
const comparacion = fechaHoy > fechaNac
console.log(comparacion)

//Dia de mi nacimiento
const dia = fechaNac.getDate()
console.log(dia)

//Mes de mi nacimiento
const mes = fechaNac.getMonth() + 1
console.log(mes)

//Año de nacimiento
const anyo = fechaNac.getFullYear()
console.log(anyo)