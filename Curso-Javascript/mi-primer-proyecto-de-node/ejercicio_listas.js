//Creando lista de compra
const listaCompra = ["Leche", "Huevos", "Pan", "Harina", "Yogur", "Mantequilla"];


//Añadiendo Aceite
console.log(listaCompra.push("Aceite de Girasol"))
console.log(listaCompra)

//Elimnando Aceite
console.log(listaCompra.pop())
console.log(listaCompra)

//Creando lista de peliculas (objetos)
const listaPeliculas = [
    {titulo: "Harry Potter 1", director: "Chris Columbus", fecha: new Date(2001, 10, 29)},
    {titulo: "Harry Potter 2", director: "Chris Columbus", fecha: new Date(2002, 10, 28)},
    {titulo: "Harry Potter 3", director: "Chris Columbus", fecha: new Date(2004, 05, 3)}
]

//Nueva lista usando filter()
const nuevaLista = listaPeliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
console.log(nuevaLista)

//Lista con directores de la lista original

const listaDirectores = listaPeliculas.map(pelicula => pelicula.director)
console.log(listaDirectores)

// Lista con titulos
const listaTitulos = listaPeliculas.map(pelicula => pelicula.titulo)
console.log(listaTitulos)

//Lista concatenada de directores y titulos
const listaDirTit = listaDirectores.concat(listaTitulos)
console.log(listaDirTit)

//Factor de propagación
const listaProp = [...listaDirectores,...listaTitulos]
console.log(listaProp)
