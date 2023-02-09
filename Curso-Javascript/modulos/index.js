//Importando controllers.js e importando chalk
import {suma, multiplica} from './controllers.js'
import chalk from 'chalk'


//Multiplicando suma
console.log(multiplica(suma(1, 2), suma(4, 5)))

//Volviendo el chalk en color verde
console.log(chalk.green((multiplica(suma(1, 2), suma(4, 5)))))