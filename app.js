const fs = require('fs'); // file system
// const path = require('path');

// const pathTexto = path.join(__dirname, "./haiku.txt");


// const texto = fs.readFileSync(pathTexto, "utf-8");
// console.log(texto);

// Leer archivos 
fs.readFile('./pruebas/prueba 2/prueba 3/sureThing.txt', 'utf-8', (error,data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log('Error: ${error}');
  }
  });


































// const path = require('path');
// // const promises = require('node:fs/promises');

// // 1.- Funcion para  saber si existe una ruta
// const pathExist = (filePath) => fs.existsSync(filePath);

// // 2.- Funcion para identificar una ruta absoluta
// const pathAbsolute = (filePath) => (
//   path.isAbsolute(filePath) ? filePath : path.resolve(filePath)
// );
// // console.log(pathAbsolute('jemplo2'));

// // 3.- Identificar si es un archivo formato md en caso de ser directorio error
// const fileExt = (filePath) => path.extname(filePath) === '.md';
// console.log(fileExt('prueba/ejemplo2.txt'));

// module.exports = {
//     pathExist,
//     pathAbsolute,
//     fileExt,
//     // leer,
  
//   };