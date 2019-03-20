const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log("comando", comando)
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear ejecuta');
        crearArchivo(argv.base, argv.limite)
            .then(success => console.log('archivo creado'))
            .catch(error => console.log('error:', error))
        break;
    default:
        console.log('default');
}

//let base = 'abc';

// let argv2 = process.argv;
// let paramentros = argv[2];
// let base = paramentros.split('=')[1]

// console.log(argv.base);
// console.log("limite", argv.limite);