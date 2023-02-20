const fs = require("fs");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    //Identifica si la ruta existe
    if (fs.existsSync(path)) {
      // Si es un directorio filtrar los archivos md
    } else {
      reject('Path does not exist');
    }
  });
};

module.exports = {
  mdLinks
};