const { mdLinks } = require('../src/index.js');
mdLinks('/noexiste/').then(()=>{})
.catch((error) => {
    console.log(error)
});