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

// Leer archivo
const readFile = (mdFile) => new Promise((resolve, reject) => {
    fs.readFile(mdFile, 'utf-8', (error, file) => {
        if (error) {
            reject(error);
        } else {
            resolve(file);
        }
    });
});