const {
  readFile, getMdLinksArr, getAllMdLinksArr,
} = require('../../src/get-md-links/get-md-links');
const {
  absoluteNoMdFile, absoluteMdFile1, absoluteDirectory, allMdFolderLinksArr, allMdFileLinksArr,
} = require('../data');

describe('read file', () => {
  test('it is a function', () => {
    expect(typeof readFile).toBe('function');
  });
  test('it returns a string', () => {
    expect(readFile(absoluteNoMdFile)).toBe('console.log(\'I am not a markdown file\');');
  });
});

describe('get .md links array from a file', () => {
  test('it is a function', () => {
    expect(typeof getMdLinksArr).toBe('function');
  });
  test('it returns a .md links array from a file', () => {
    expect(getMdLinksArr(absoluteMdFile1)).toEqual(allMdFileLinksArr);
  });
});

describe('get all .md links array from a file or directory', () => {
  test('it is a function', () => {
    expect(typeof getAllMdLinksArr).toBe('function');
  });
  test('it returns all .md links array from a file', () => {
    expect(getAllMdLinksArr(absoluteMdFile1)).toEqual(allMdFileLinksArr);
  });
  test('it returns all .md links array from a directory', () => {
    expect(getAllMdLinksArr(absoluteDirectory)).toEqual(allMdFolderLinksArr);
  });
});
