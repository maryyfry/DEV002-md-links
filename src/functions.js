const path = require('path');
const fs = require('fs');

const validateLink = (link) => {
  // Implementación de la validación de enlaces
};

const getLinks = (data, route) => {
  // Implementación para obtener los enlaces de un archivo
};

const getFiles = (route, extension) => {
  // Implementación para obtener los archivos de una extensión en una ruta
};

const isAbsolute = (route) => {
  // Implementación para determinar si una ruta es absoluta o no
};

const convertToAbsolute = (route) => {
  // Implementación para convertir una ruta relativa en una absoluta
};

module.exports = {
  validateLink,
  getLinks,
  getFiles,
  isAbsolute,
  convertToAbsolute,
};
