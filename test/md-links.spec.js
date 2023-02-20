const { mdLinks } = require('../src/index.js');

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });
 // it("deberia devolver una promesa",()=>{
  //  expect(mdLinks("./prueba","--validate")).toBe(typeof Promise);
  //});
  it('should reject path if it does not exist', () => {
    return mdLinks('desktop/lab/doesnotexist.md').catch((error) => {
      expect(error).toBe("Path does not exist");
    })
    });
});