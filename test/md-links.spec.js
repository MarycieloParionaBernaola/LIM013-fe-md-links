const { mdLinks } = require('../src/md-links');
const {
  relativePathDoesNotExist, absoluteEmptyMdFile, absoluteNoMdFile,
  relativeDirectory, allMdFolderLinksArr, allMdFolderValidatedArr,
} = require('./data');

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
    mdLinks(absoluteEmptyMdFile)
      .catch((err) => {
        expect(err.message).toBe('No .md link found. Try another path.');
        done();
      });
  });
  test('it returns error if the path does not have a .md file', (done) => {
    mdLinks(absoluteNoMdFile)
      .catch((err) => {
        expect(err.message).toBe('No .md file found. Try another path.');
        done();
      });
  });
  test('it returns all .md links when no option is entered', (done) => {
    mdLinks(relativeDirectory)
      .then((res) => {
        expect(res).toEqual(allMdFolderLinksArr);
        done();
      });
  });
  test('it returns all .md links when option { validate: false } is entered', (done) => {
    mdLinks(relativeDirectory, { validate: false })
      .then((res) => {
        expect(res).toEqual(allMdFolderLinksArr);
        done();
      });
  });
  test('it returns all .md links validated when option { validate: true } is entered', (done) => {
    mdLinks(relativeDirectory, { validate: true })
      .then((res) => {
        expect(res).toEqual(allMdFolderValidatedArr);
        done();
      });
  }, 60000);
  test('it returns error when option { validate: \'\' } is entered', (done) => {
    mdLinks(relativeDirectory, { validate: '' })
      .catch((err) => {
        expect(err.message).toBe('Validate should have a boolean value');
        done();
      });
  });
});
