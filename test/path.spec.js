const {
  isPath, isAbsolute, convertToAbsolutePath, isDirectory, readDirectory, isFile, isMd,
} = require('../src/path.js');

describe('validate path exists', () => {
  test('is a function', () => {
    expect(typeof isPath).toBe('function');
  });
  test('the given path exists and is valid', () => {
    expect(isPath('.\\test\\path.spec.js')).toBe(true);
    expect(isPath(Buffer.from('.\\test\\path.spec.js', 'utf-8'))).toBe(true);
  });
  test('the given path is invalid or does not exist', () => {
    expect(isPath('C:\\BOOTCAMP')).toBe(false);
    expect(isPath('')).toBe(false);
  });
});

describe('validate absolute path', () => {
  test('it is a function', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  test('the given path is absolute', () => {
    expect(isAbsolute('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md')).toBe(true);
  });
  test('the given path is not absolute', () => {
    expect(isAbsolute('.\\README.md')).toBe(false);
  });
});

describe('convert to absolute path', () => {
  test('it is a function', () => {
    expect(typeof convertToAbsolutePath).toBe('function');
  });
  test('the given path is relative and is converted to absolute', () => {
    expect(convertToAbsolutePath('.\\README.md')).toBe('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md');
  });
});

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
    expect(readDirectory('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test')).toEqual(['path.spec.js']);
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
