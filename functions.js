const fs = require('fs');
const path = require('path');

// determina si la ruta existe
const pathExist = (route) => fs.existsSync(route)

// determina si es una ruta absoluta 
const pathAbsolute = (absoluteRoute) => path.isAbsolute(absoluteRoute)

// Para obtener la ruta absoluta si es relativa
const getAbsolute = (route) => (pathAbsolute(route) ? routePath : path.resolve(route))

// Averiguar si es un archivo
const pathIsFile = (route) => fs.statSync(route).isFile();

// Saber si es un archivo .md
const isMdFile = (route) => (path.extname(route) === '.md');

// Saber si es un directorio
const isADirectory = (route) => fs.statSync(route).isDirectory()

// Leer un directorio
const readDirectory = (route) => fs.readdirSync(route)
