const {
  isDirectory, readDirectory, isFile, isMd, getAllMdFiles,
} = require('../../src/get-md-links/get-md-files');
const {
  absoluteDirectory, relativeDirectory, absoluteMdFile1, relativeMdFile1,
  absoluteNoMdFile, relativeNoMdFile, filesArr, mdFilesArr,
} = require('../data');

describe('validate directory path', () => {
  test('it is a function', () => {
    expect(typeof isDirectory).toBe('function');
  });
  test('the given path points to a directory', () => {
    expect(isDirectory(absoluteDirectory)).toBe(true);
    expect(isDirectory(relativeDirectory)).toBe(true);
  });
  test('the given path is absolute and does not point a directory', () => {
    expect(isDirectory(absoluteMdFile1)).toBe(false);
    expect(isDirectory(relativeMdFile1)).toBe(false);
  });
});

describe('read directory', () => {
  test('it is a function', () => {
    expect(typeof readDirectory).toBe('function');
  });
  test('it returns a files array', () => {
    expect(readDirectory(absoluteDirectory)).toEqual(filesArr);
  });
});

describe('validate file path', () => {
  test('it is a function', () => {
    expect(typeof isFile).toBe('function');
  });
  test('the given path points to a file', () => {
    expect(isFile(absoluteMdFile1)).toBe(true);
    expect(isFile(relativeMdFile1)).toBe(true);
  });
  test('the given path does not point a file', () => {
    expect(isFile(absoluteDirectory)).toBe(false);
    expect(isFile(relativeDirectory)).toBe(false);
  });
});

describe('validate .md file', () => {
  test('it is a function', () => {
    expect(typeof isMd).toBe('function');
  });
  test('the given path points to a file that has a .md extension', () => {
    expect(isMd(absoluteMdFile1)).toBe(true);
    expect(isMd(relativeMdFile1)).toBe(true);
  });
  test('the given path does point to a file that has not a .md extension', () => {
    expect(isMd(absoluteNoMdFile)).toBe(false);
    expect(isMd(relativeNoMdFile)).toBe(false);
  });
});

describe('get .md files', () => {
  test('it is a function', () => {
    expect(typeof getAllMdFiles).toBe('function');
  });
  test('it returns a .md files array', () => {
    expect(getAllMdFiles(absoluteDirectory)).toEqual(mdFilesArr);
  });
});
