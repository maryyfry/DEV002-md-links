const {
  pathExist,
  toAbsolute,
  mdFile,
  validateLinks,
  getLinks,
} = require('./functions')


const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // la ruta existe?
    if (!pathExist(path)) {
      reject('la ruta no existe');  // si no existe la ruta rechaza la promesa
    } else {


module.exports = {
  mdLinks
};
