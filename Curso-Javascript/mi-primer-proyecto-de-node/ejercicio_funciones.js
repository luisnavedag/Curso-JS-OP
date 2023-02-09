//Funcion que regresa "true"

function devuelveTrue(){
    return true;
}

console.log(devuelveTrue())

//Funcion asincrona

async function SoyPromesa(){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
 
//Funcion generadora de indices pares automaticos
function* pares(){
    let id = 0
    while(true){
        yield id +=2
    }
}

const genera = pares()

console.log(genera.next().value)
console.log(genera.next().value)
console.log(genera.next().value)
console.log(genera.next().value)
console.log(genera.next().value)


