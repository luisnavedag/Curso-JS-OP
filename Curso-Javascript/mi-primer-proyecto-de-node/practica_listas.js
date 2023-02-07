const lista = ["Hola", 1, 2, 3, true, {nombre: "Luis", apellido: "Naveda"}]

for (let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

const listadeobjetos = [
{nombre: "Luis", edad: 26}, 
{nombre: "Edgar", edad: 30}, 
{nombre: "Pedro", edad: 23}]

const objetos = listadeobjetos.find(o => o.nombre === "Edgar")

const { edad } = listadeobjetos.find(o => o.nombre === "Edgar") 
console.log(objetos.edad)

