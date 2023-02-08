//Creando objeto

const objeto = {
    nombre: "Luis",
    apellido: "Naveda",
    edad: 26,
    altura: 171,
    eresDesarrollador: true
}

//Variable que obtenga edad

const miEdad = objeto.edad;
console.log(miEdad)

//Creando objeto con datos personales mas 2 mejores amigos

const lista = [{...objeto},{ 
nombre: "Abraham",
apellido: "Torres",
edad: 25,
altura: 175,
eresDesarrollador: false
},
{
    nombre: "Williams",
    apellido: "Torres",
    edad: 27,
    altura: 165,
    eresDesarrollador: false
    }
];

// Lista ordenada
const listaOrd = lista.sort((a,b)=> b.edad - a.edad)

console.log(listaOrd)
