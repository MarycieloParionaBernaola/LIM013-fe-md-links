const path = require('path');
const {
  isDirectory, readDirectory, isFile, isMd, getMdFiles,
} = require('../src/get-md-links/get-md-files');

const cwd = process.cwd();
const relativeDirectory = '.\\test-files';
const relativeMdFile = '.\\test-files\\test-links-1.md';
const absoluteDirectory = path.join(cwd, '\\test-files');
const absoluteMdFile = path.join(cwd, '\\test-files\\test-links-1.md');
const absoluteNoMdFile = path.join(cwd, '\\test-files\\test-js-1.js');
const relativeNoMdFile = '\\test-files\\test-js-1.0.js';

describe('validate directory path', () => {
  test('it is a function', () => {
    expect(typeof isDirectory).toBe('function');
  });
  test('the given path points to a directory', () => {
    expect(isDirectory(absoluteDirectory)).toBe(true);
    expect(isDirectory(relativeDirectory)).toBe(true);
  });
  test('the given path is absolute and does not point a directory', () => {
    expect(isDirectory(absoluteMdFile)).toBe(false);
    expect(isDirectory(relativeMdFile)).toBe(false);
  });
});

describe('read directory', () => {
  test('it is a function', () => {
    expect(typeof readDirectory).toBe('function');
  });
  test('it returns a files array', () => {
    expect(readDirectory(absoluteDirectory)).toEqual([
      'more-test-files',
      'test-empty.md',
      'test-links-1.md',
      'test-links-2.md']);
  });
});

describe('validate file path', () => {
  test('it is a function', () => {
    expect(typeof isFile).toBe('function');
  });
  test('the given path points to a file', () => {
    expect(isFile(absoluteMdFile)).toBe(true);
    expect(isFile(relativeMdFile)).toBe(true);
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
    expect(isMd(absoluteMdFile)).toBe(true);
    expect(isMd(relativeMdFile)).toBe(true);
  });
  test('the given path does point to a file that has not a .md extension', () => {
    expect(isMd(absoluteNoMdFile)).toBe(false);
    expect(isMd(relativeNoMdFile)).toBe(false);
  });
});

describe('get .md files', () => {
  test('it is a function', () => {
    expect(typeof getMdFiles).toBe('function');
  });
  test('it returns a .md files array', () => {
    expect(getMdFiles(absoluteDirectory)).toEqual([
      `${path.join(cwd, '\\test-files\\test-empty.md')}`,
      `${path.join(cwd, '\\test-files\\test-links-1.md')}`,
      `${path.join(cwd, '\\test-files\\test-links-2.md')}`,
    ]);
  });
});
