const {
  isPath, isAbsolute, convertToAbsolutePath, isPathStr, validatePath,
} = require('../../src/get-md-links/validate-path');
const {
  bufferPath, relativeMdFile1, absoluteMdFile1, absolutePathDoesNotExist,
  relativePathDoesNotExist,
} = require('../data');

describe('validate path exists', () => {
  test('is a function', () => {
    expect(typeof isPath).toBe('function');
  });
  test('the given path exists and is valid', () => {
    expect(isPath(relativeMdFile1)).toBe(true);
    expect(isPath(bufferPath)).toBe(true);
  });
  test('the given path is invalid or does not exist', () => {
    expect(isPath(relativePathDoesNotExist)).toBe(false);
    expect(isPath('')).toBe(false);
  });
});

describe('validate absolute path', () => {
  test('it is a function', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  test('the given path is absolute', () => {
    expect(isAbsolute(absoluteMdFile1)).toBe(true);
    expect(isAbsolute(absolutePathDoesNotExist)).toBe(true);
  });
  test('the given path is not absolute', () => {
    expect(isAbsolute(relativeMdFile1)).toBe(false);
    expect(isAbsolute(relativePathDoesNotExist)).toBe(false);
  });
});

describe('convert to absolute path', () => {
  test('it is a function', () => {
    expect(typeof convertToAbsolutePath).toBe('function');
  });
  test('the given path is relative and is converted to absolute', () => {
    expect(convertToAbsolutePath(relativeMdFile1)).toBe(absoluteMdFile1);
  });
});

describe('validate path exists and is a string', () => {
  test('it is a function', () => {
    expect(typeof isPathStr).toBe('function');
  });
  test('the given path exists and is a string', () => {
    expect(isPathStr(relativeMdFile1)).toBe(true);
    expect(isPathStr(absoluteMdFile1)).toBe(true);
  });
  test('the given path exists but is not a string', () => {
    expect(isPathStr(bufferPath)).toBe(false);
  });
  test('the given path is invalid or does not exist', () => {
    expect(isPathStr(relativePathDoesNotExist)).toBe(false);
    expect(isPathStr('')).toBe(false);
  });
});
describe('validate path', () => {
  test('is is a function', () => {
    expect(typeof validatePath).toBe('function');
  });
  test('the given path is absolute', () => {
    expect(validatePath(absoluteMdFile1)).toBe(absoluteMdFile1);
  });
  test('the given path is relative and is converted to absolute', () => {
    expect(validatePath(relativeMdFile1)).toBe(absoluteMdFile1);
  });
});
