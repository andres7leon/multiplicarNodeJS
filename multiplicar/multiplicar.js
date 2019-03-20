const fs = require('fs');
const colors = require('colors/safe');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i < limite; i++) {
            data += `base: ${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`el archivo tabla- ${base}.txt fue creado `);
        });

    })
}

let listarTabla = function(base, limite) {
    var data = '';
    for (let i = 1; i < limite; i++) {
        data += `base: ${base} x ${i} = ${base*i}\n`;
    }
    console.log('============================='.blue)
    console.log(`tabla de Multiplicar del ${base} hasta el ${limite} \n${colors.red(data)}`);
    console.log('============================='.blue)
}

module.exports = {
    crearArchivo,
    listarTabla
}