const fs = require("fs");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    //Identifica si la ruta existe
    if (fs.existsSync(path)) {
      //Chequear o convertir a una ruta absoluta
      // Probar si esa ruta absoluta es un archivo o un directorio
      // Si es un directorio filtrar los archivos md
    } else {
      //Si no existe la ruta se rechaza la promesa
      reject("La ruta no existe");
    }
    // if (!pathAbsolute(filePath)) {
    // pathAbsolute(filePath);
    filePath = pathAbsolute(filePath);
    console.log(`${filePath} convertir a absoluta`);
    if (!fileExt(filePath)) {
      console.log('archivo md');
      return reject(`${filePath} La ruta no contiene un archivo md`);
    }
    console.log('fin de recorrido');
    return resolve([]);
  });
};



module.exports = {
  mdLinks
};
