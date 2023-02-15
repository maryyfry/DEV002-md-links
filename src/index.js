const fs = require('fs');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // identifica si la ruta existe
    if (fs.existsSync(path)) {
    // checar o convertir en ruta absoluta
    // ¿la ruta absoluta es un archivo o un directorio?
    // si es un directorio, filtrar archivos .md
    } else {
      //si la ruta no existe, la promesa se rechaza
        reject('Path does not exist')
    }
  })
}

module.exports = {
  mdLinks
};
