const { mdLinks } = require('../index.js');


describe('mdLinks', () => {

  it('should be a function', () => {
    console.log('FIX ME!');
  });

  it('should return a promise', () => {
    expect((mdLinks()).toBe(typeof Promise))
  });

  it('should reject when path doesnt exist', () => {
    return mdLinks('/desktop/laboratoria/unexistingpath.md').catch((error) =>{
      expect(error).toBe('Path does not exist');
    })
  });
});