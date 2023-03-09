const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Identificar si existe la ruta
const pathExist = (route) => fs.existsSync(route);

// Identificar si la ruta es absoluta
const toAbsolute = (route) => {
    if (!path.isAbsolute(route)) {
        return path.resolve(route)
    } else {
        return route
    }
};

// Es un archivo md?
const mdFile = (absolutePath) => {
    if (path.extname(absolutePath) === '.md') {
        return true
    } else {
        return false
    }
}

// Leer contenido del archivo
const readFile = (mdFile) => new Promise((resolve, reject) => {
    fs.readFile(mdFile, 'utf-8', (error, file) => {
        if (error) {
            reject(error);
        } else {
            resolve(file);// devuelve una promesa que se resuelve con el contenido del archivo.
        }
    });
});

// Obtener links, retorna un array de objetos
const getLinks = (mdFile) => new Promise((resolve, reject) => {
    const arrayLinks = [];
    readFile(mdFile) // Llama a la función readFile
        .then((file) => {
            const links = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g; // busca coincidencias de enlaces en el contenido del archivo
            let match = links.exec(file); // devuelve el texto que coincide si se encuentra una coincidencia, de lo contrario, devuelve un valor nulo.
            while (match !== null) { //bucle
                arrayLinks.push({
                    href: match[2], //URL encontrada
                    text: match[1], //texto encontrado
                    file: mdFile, //nombre del archivo
                });
                match = links.exec(file)//se ejecuta nuevamente la expresión regular 
            }
            resolve(arrayLinks);
        })
        .catch((error) => {
            reject(error);
        })
});