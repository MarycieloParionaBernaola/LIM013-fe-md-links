const {
  isPath, isAbsolute, convertToAbsolutePath, validatePath,
} = require('../src/validatePath.js');

describe('validate path exists', () => {
  test('is a function', () => {
    expect(typeof isPath).toBe('function');
  });
  test('the given path exists and is valid', () => {
    expect(isPath('.\\test\\validatePath.spec.js')).toBe(true);
    expect(isPath(Buffer.from('.\\test\\validatePath.spec.js', 'utf-8'))).toBe(true);
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
    expect(isAbsolute(process.cwd())).toBe(true);
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

describe('validate path', () => {
  test('is is a function', () => {
    expect(typeof validatePath).toBe('function');
  });
  test('the given path is absolute', () => {
    expect(validatePath(process.cwd())).toBe(process.cwd());
  });
  test('the given path is relative and is converted to absolute', () => {
    expect(validatePath('.\\README.md')).toBe('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\README.md');
  });
});
