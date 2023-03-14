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

// Leer contenido del archivo se lee en cli
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

const getLinkStatus = (urls) => Promise.all(urls.map((link) => axios.get(link.href)
  // utiliza la librería Axios para hacer una petición HTTP a cada una de las URLs que se le pasan como argumento
  // axios.get devuelve una promesa que resuelve a un objeto con información de la respuesta HTTP, incluyendo el status code
  .then((respuesta) => ({ ...link, status: respuesta.status, message: 'ok' })) // si es exitosa, con el spread operator, crea una nueva version del objeto con estas propiedades


  .catch((error) => {
    let errorStatus;
    if (error.response) {
      errorStatus = error.response.status;
    } else if (error.request) {
      errorStatus = 500;
    } else {
      errorStatus = 400;
    }
    // console.log('errorStatus', errorStatus);
    return {...link, status: errorStatus, message: 'fail' };
  })));


// Esta función recibe un array de objetos que representan los links encontrados en los archivos markdown
const linksStats = (array) => `${array.length}`;

// Esta función recibe el mismo array de objetos de la función anterior y utiliza un Set para eliminar los links duplicados. Retorna la cantidad de links únicos encontrados.
const uniqueLinks = (array) => {
  const unique = new Set(array.map((link) => link.href));
  return `${unique.size}`;
};

// Esta función recibe el mismo array de objetos de la función anterior y filtra aquellos links que tienen un status de 'Fail' o que estén fuera del rango de 199 a 400. Retorna la cantidad de links rotos encontrados.
const brokenLinks = (array) => { // los códigos de estado HTTP entre 200 y 399 indican que una solicitud HTTP fue procesada correctamente y se recibió una respuesta satisfactoria del servidor
  const broken = array.filter((link) => link.status === 'Fail' || link.status >= 400 || link.status <= 199);
  return `${broken.length}`;
};

    module.exports = {
        pathExist,
        toAbsolute,
        mdFile,
        readFile,
        getLinks,
        getLinkStatus,
        linksStats,
        uniqueLinks,
        brokenLinks,

    };