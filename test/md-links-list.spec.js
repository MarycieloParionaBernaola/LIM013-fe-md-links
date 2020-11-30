const path = require('path');
const {
  readFile, getMdLinksArr, getAllMdLinksArr, mdLinksList,
} = require('../src/md-links-list/md-links-list');

const cwd = process.cwd();
const absoluteMdFile1 = path.join(cwd, '\\test-files\\test-links-1.md');
const absoluteMdFile2 = path.join(cwd, '\\test-files\\test-links-2.md');
const absoluteNoMdFile = path.join(cwd, '\\test-files\\more-test-files\\test-js-1.js');
const absoluteDirectory = path.join(cwd, '\\test-files');
const noMdFile = path.join(cwd, '\\test-files\\more-test-files');
const noMdLink = path.join(cwd, '\\test-files\\test-empty.md');
const directoryResult = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    path: `${absoluteMdFile1}`,
    text: 'Markdown',
  },
  {
    href: 'https://nodejs.org/',
    path: `${absoluteMdFile1}`,
    text: 'Node.js',
  },
  {
    href: 'https://nodejs.org/es/',
    path: `${absoluteMdFile1}`,
    text: 'Node.js',
  },
  {
    href: 'https://developers.google.com/v8/',
    path: `${absoluteMdFile1}`,
    text: 'motor de JavaScript V8 de Chrome',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    path: `${absoluteMdFile2}`,
    text: 'fs',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    path: `${absoluteMdFile2}`,
    text: 'path',
  },
  {
    href: 'https://www.npmjs.com/',
    path: `${absoluteMdFile2}`,
    text: 'npm',
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    path: `${absoluteMdFile2}`,
    text: '(CommonJS)',
  },
  {
    href: 'https://docs.npmjs.com/files/package.json',
    path: `${absoluteMdFile2}`,
    text: 'Configuración de package.json.',
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    path: `${absoluteMdFile2}`,
    text: 'Configuración de npm-scripts',
  },
];

const fileResult1 = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    path: `${absoluteMdFile1}`,
    text: 'Markdown',
  },
  {
    href: 'https://nodejs.org/',
    path: `${absoluteMdFile1}`,
    text: 'Node.js',
  },
  {
    href: 'https://nodejs.org/es/',
    path: `${absoluteMdFile1}`,
    text: 'Node.js',
  },
  {
    href: 'https://developers.google.com/v8/',
    path: `${absoluteMdFile1}`,
    text: 'motor de JavaScript V8 de Chrome',
  },
];

describe('read file', () => {
  test('it is a function', () => {
    expect(typeof readFile).toBe('function');
  });
  test('it returns a string', () => {
    expect(readFile(absoluteNoMdFile)).toBe('console.log(\'I am not a markdown file\');');
  });
});

describe('get .md links array', () => {
  test('it is a function', () => {
    expect(typeof getMdLinksArr).toBe('function');
  });
  test('it returns a .md links array', () => {
    expect(getMdLinksArr(absoluteMdFile1)).toEqual(fileResult1);
  });
});

describe('get all .md links array', () => {
  test('it is a function', () => {
    expect(typeof getAllMdLinksArr).toBe('function');
  });
  test('it returns all .md links array', () => {
    expect(getAllMdLinksArr(absoluteDirectory)).toEqual(directoryResult);
  });
});

describe('list .md links array', () => {
  test('it is a function', () => {
    expect(typeof mdLinksList).toBe('function');
  });
  test('it returns all .md links array', () => {
    expect(mdLinksList(absoluteDirectory)).toEqual(directoryResult);
  });
  test('it returns .md file not found', () => {
    expect(mdLinksList(noMdFile)).toBe('.md file not found');
  });
  test('it returns .md link not found', () => {
    expect(mdLinksList(noMdLink)).toBe('.md link not found');
  });
});
