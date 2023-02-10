// Creando clase Estudiante
class Estudiante {
    nombre = "Luis";
    asignaturas = ["Javascript", "HTML", "CSS"];
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}




// Nueva instancia de estudiante

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos())