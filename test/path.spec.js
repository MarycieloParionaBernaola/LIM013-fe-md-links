const { validatePath, validateAbsolutePath } = require('../src/path.js');

const relativePath = '.\\README.md';
const absolutePath = 'E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links';
const relativePathConverted = 'E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md';
const invalidPath = 'C:\\BOOTCAMP';

describe('validate path', () => {
  test('is a function', () => {
    expect(typeof validatePath).toBe('function');
  });
  test('the given path is valid', () => {
    expect(validatePath(relativePath)).toBe(true);
  });
  test('the given path is invalid or does not exist', () => {
    expect(validatePath(invalidPath)).toBe(false);
  });
});

describe('validate absolute path', () => {
  test('is a function', () => {
    expect(typeof validateAbsolutePath).toBe('function');
  });
  test('the given path is absolute', () => {
    expect(validateAbsolutePath(absolutePath)).toBe(absolutePath);
  });
  test('the given path is relative and is converted to absolute', () => {
    expect(validateAbsolutePath(relativePath)).toBe(relativePathConverted);
  });
});
