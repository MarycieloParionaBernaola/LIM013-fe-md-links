const path = require('path');
const {
  isPath, isAbsolute, convertToAbsolutePath, isPathStr, validatePath,
} = require('../src/get-md-links/validate-path');

const cwd = process.cwd();
const bufferPath = Buffer.from('.\\test-files\\test-links-1.md', 'utf-8');
const relativePath = '.\\test-files\\test-links-1.md';
const absolutePath = path.join(cwd, relativePath);
const absolutePathDoesNottExist = 'C:\\absolute-path';
const relativePathDoesNotExist = '.\\relative-path';

describe('validate path exists', () => {
  test('is a function', () => {
    expect(typeof isPath).toBe('function');
  });
  test('the given path exists and is valid', () => {
    expect(isPath(relativePath)).toBe(true);
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
    expect(isAbsolute(absolutePath)).toBe(true);
    expect(isAbsolute(absolutePathDoesNottExist)).toBe(true);
  });
  test('the given path is not absolute', () => {
    expect(isAbsolute(relativePath)).toBe(false);
    expect(isAbsolute(relativePathDoesNotExist)).toBe(false);
  });
});

describe('convert to absolute path', () => {
  test('it is a function', () => {
    expect(typeof convertToAbsolutePath).toBe('function');
  });
  test('the given path is relative and is converted to absolute', () => {
    expect(convertToAbsolutePath(relativePath)).toBe(absolutePath);
  });
});

describe('validate path exists and is a string', () => {
  test('it is a function', () => {
    expect(typeof isPathStr).toBe('function');
  });
  test('the given path exists and is a string', () => {
    expect(isPathStr(relativePath)).toBe(true);
    expect(isPathStr(absolutePath)).toBe(true);
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
    expect(validatePath(absolutePath)).toBe(absolutePath);
  });
  test('the given path is relative and is converted to absolute', () => {
    expect(validatePath(relativePath)).toBe(absolutePath);
  });
});
