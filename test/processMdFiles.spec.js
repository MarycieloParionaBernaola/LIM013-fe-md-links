const {
  isDirectory, readDirectory, isFile, isMd,
} = require('../src/processMdFiles.js');

describe('validate directory path', () => {
  test('it is a function', () => {
    expect(typeof isDirectory).toBe('function');
  });
  test('the given path points to a directory', () => {
    expect(isDirectory('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test')).toBe(true);
    expect(isDirectory('.\\test')).toBe(true);
  });
  test('the given path is absolute and does not point a directory', () => {
    expect(isDirectory('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md')).toBe(false);
  });
});

describe('read directory', () => {
  test('it is a function', () => {
    expect(typeof readDirectory).toBe('function');
  });
  test('it returns a files array', () => {
    expect(readDirectory('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test')).toEqual(['processMdFiles.spec.js', 'validatePath.spec.js']);
  });
});

describe('validate file path', () => {
  test('it is a function', () => {
    expect(typeof isFile).toBe('function');
  });
  test('the given path points to a file', () => {
    expect(isFile('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md')).toBe(true);
    expect(isFile('.\\README.md')).toBe(true);
  });
  test('the given path does not point a file', () => {
    expect(isFile('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test')).toBe(false);
  });
});

describe('validate .md file', () => {
  test('it is a function', () => {
    expect(typeof isMd).toBe('function');
  });
  test('the given path points to a file that has a .md extension', () => {
    expect(isMd('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md')).toBe(true);
    expect(isMd('.\\README.md')).toBe(true);
  });
  test('the given path does point to a file that has not a .md extension', () => {
    expect(isMd('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\package.json')).toBe(false);
    expect(isMd('.\\package.json')).toBe(false);
  });
});
