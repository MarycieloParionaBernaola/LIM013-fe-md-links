const {
  isPath, isAbsolute, convertToAbsolutePath, isDirectory, readDirectory, isFile, isMd,
} = require('../src/path.js');

describe('validate path exists', () => {
  test('is a function', () => {
    expect(typeof isPath).toBe('function');
  });
  test('the given path exists and is valid', () => {
    expect(isPath('.\\test\\path.spec.js')).toBe(true);
  });
  test('the given path is invalid or does not exist', () => {
    expect(isPath('C:\\BOOTCAMP')).toBe(false);
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
  test('the given path is a directory', () => {
    expect(isDirectory('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test')).toBe(true);
  });
  test('the given path is not a directory', () => {
    expect(isDirectory('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md')).toBe(false);
    expect(isFile('.\\test')).toBe(false);
  });
});

describe('read directory files array', () => {
  test('it is a function', () => {
    expect(typeof readDirectory).toBe('function');
  });
  test('read directory files array', () => {
    expect(readDirectory('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test')).toEqual(['path.spec.js']);
  });
});

describe('validate file path', () => {
  test('it is a function', () => {
    expect(typeof isFile).toBe('function');
  });
  test('the given path is a file', () => {
    expect(isFile('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md')).toBe(true);
    expect(isFile('.\\README.md')).toBe(true);
  });
  test('the given path is not a file', () => {
    expect(isFile('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test')).toBe(false);
  });
});

describe('validate .md file', () => {
  test('it is a function', () => {
    expect(typeof isMd).toBe('function');
  });
  test('the given path has a .md extension', () => {
    expect(isMd('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md')).toBe(true);
    expect(isMd('.\\README.md')).toBe(true);
  });
  test('the given path does not have a .md extension', () => {
    expect(isMd('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links')).toBe(false);
    expect(isMd('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\package.json')).toBe(false);
    expect(isMd('.\\package.json')).toBe(false);
  });
});
