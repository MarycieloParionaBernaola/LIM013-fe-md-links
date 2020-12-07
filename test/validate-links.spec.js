const path = require('path');
const { validateLinks } = require('../src/validate-links');

const cwd = process.cwd();
const absoluteMdFile1 = path.join(cwd, '\\test-files\\test-links-1.md');
const absoluteMdFile2 = path.join(cwd, '\\test-files\\test-links-2.md');

const linkStatus200 = [
  {
    href: 'https://www.npmjs.com/',
    path: `${absoluteMdFile2}`,
    text: 'npm',
  }];

const linkStatus300 = [
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    path: `${absoluteMdFile1}`,
    text: 'Npm scripts',
  }];

const linkStatus400 = [
  {
    href: 'https://es.wikipedia.org/wi/Markdown',
    path: `${absoluteMdFile1}`,
    text: 'Markdown',
  }];

const linkStatus500 = [
  {
    href: 'https://develoers.google.com/v8/',
    path: `${absoluteMdFile1}`,
    text: 'Motor v8',
  }];

describe('validate all .md links', () => {
  test('it is a function', () => {
    expect(typeof validateLinks).toBe('function');
  });
  test('it returns status 200', (done) => {
    validateLinks(linkStatus200)
      .then(((e) => {
        expect(e[0].status).toBe(200);
        done();
      }));
  });
  test('it returns status 300', (done) => {
    validateLinks(linkStatus300)
      .then(((e) => {
        expect(e[0].status).toBe(301);
        done();
      }));
  });
  test('it returns status 400', (done) => {
    validateLinks(linkStatus400)
      .then(((e) => {
        expect(e[0].status).toBe(404);
        done();
      }));
  });
  test('it returns status 500', (done) => {
    validateLinks(linkStatus500)
      .then(((e) => {
        expect(e[0].status).toBe('Error');
        done();
      }));
  });
});
