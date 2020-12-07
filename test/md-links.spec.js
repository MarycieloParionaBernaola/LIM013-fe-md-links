const { mdLinks } = require('../src/md-links');
const { allMdFolderArr, allMdFolderValidatedArr } = require('../test-output/test-output');

const relativePathDoesNotExist = '.\\relative-path';
const relativeFolderPath = '.\\test-files';
const noMdLink = ('.\\test-files\\test-empty.md');
const noMdFile = ('.\\test-files\\more-test-files');

describe('md links function', () => {
  test('it is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  test('it returns error if the path is not a string or does not exist', (done) => {
    mdLinks(relativePathDoesNotExist)
      .catch((err) => {
        expect(err.message).toBe('The given path is invalid or does not exist. Please check and enter it again.');
        done();
      });
  });
  test('it returns error if the path does not have a .md link', (done) => {
    mdLinks(noMdLink)
      .catch((err) => {
        expect(err.message).toBe('No .md link found. Try another path.');
        done();
      });
  });
  test('it returns error if the path does not have a .md file', (done) => {
    mdLinks(noMdFile)
      .catch((err) => {
        expect(err.message).toBe('No .md file found. Try another path.');
        done();
      });
  });
  test('it returns all .md links when no option entered', (done) => {
    mdLinks(relativeFolderPath)
      .then((res) => {
        expect(res).toEqual(allMdFolderArr);
        done();
      });
  });
  test('it returns all .md links validated when option { validate: true } is entered', (done) => {
    mdLinks(relativeFolderPath, { validate: true })
      .then((res) => {
        expect(res).toEqual(allMdFolderValidatedArr);
        done();
      });
  });
  test('it returns all .md links when option { validate: false } is entered', (done) => {
    mdLinks(relativeFolderPath, { validate: false })
      .then((res) => {
        expect(res).toEqual(allMdFolderArr);
        done();
      });
  });
});
