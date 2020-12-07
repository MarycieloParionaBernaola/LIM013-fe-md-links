const path = require('path');
const {
  readFile, getMdLinksArr, getAllMdLinksArr,
} = require('../src/get-md-links/get-md-links');
const { allMdFolderArr, allMdFileArr } = require('../test-output/test-output');

const cwd = process.cwd();
const absoluteMdFile1 = path.join(cwd, '\\test-files\\test-links-1.md');
const absoluteNoMdFile = path.join(cwd, '\\test-files\\more-test-files\\test-js-1.js');
const absoluteDirectory = path.join(cwd, '\\test-files');

describe('read file', () => {
  test('it is a function', () => {
    expect(typeof readFile).toBe('function');
  });
  test('it returns a string', () => {
    expect(readFile(absoluteNoMdFile)).toBe('console.log(\'I am not a markdown file\');');
  });
});

describe('get .md links array', () => {
  test('it is a function', () => {
    expect(typeof getMdLinksArr).toBe('function');
  });
  test('it returns a .md links array', () => {
    expect(getMdLinksArr(absoluteMdFile1)).toEqual(allMdFileArr);
  });
});

describe('get all .md links array', () => {
  test('it is a function', () => {
    expect(typeof getAllMdLinksArr).toBe('function');
  });
  test('it returns all .md links array', () => {
    expect(getAllMdLinksArr(absoluteDirectory)).toEqual(allMdFolderArr);
  });
});
