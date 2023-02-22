const fs = require('fs');
const path = require('path');
// const promises = require('node:fs/promises');

// 1.- Funcion para  saber si existe una ruta
const pathExist = (filePath) => fs.existsSync(filePath);

// 2.- Funcion para identificar una ruta absoluta
const pathAbsolute = (filePath) => (
  path.isAbsolute(filePath) ? filePath : path.resolve(filePath)
);
// console.log(pathAbsolute('jemplo2'));

// 3.- Identificar si es un archivo formato md en caso de ser directorio error
const fileExt = (filePath) => path.extname(filePath) === '.md';
console.log(fileExt('prueba/ejemplo2.txt'));

module.exports = {
    pathExist,
    pathAbsolute,
    fileExt,
    // leer,
  
  };