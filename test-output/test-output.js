const path = require('path');

const cwd = process.cwd();
const absoluteMdFile1 = path.join(cwd, '\\test-files\\test-links-1.md');
const absoluteMdFile2 = path.join(cwd, '\\test-files\\test-links-2.md');

const allMdFileArr = [
  {
    href: 'https://es.wikipedia.org/wi/Markdown',
    text: 'Markdown',
    path: `${absoluteMdFile1}`,
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: `${absoluteMdFile1}`,
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: `${absoluteMdFile1}`,
  },
  {
    href: 'https://develoers.google.com/v8/',
    text: 'Motor v8',
    path: `${absoluteMdFile1}`,
  },
];

const allMdFolderArr = [
  {
    href: 'https://es.wikipedia.org/wi/Markdown',
    text: 'Markdown',
    path: `${absoluteMdFile1}`,
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: `${absoluteMdFile1}`,
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: `${absoluteMdFile1}`,
  },
  {
    href: 'https://develoers.google.com/v8/',
    text: 'Motor v8',
    path: `${absoluteMdFile1}`,
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Fs',
    path: `${absoluteMdFile2}`,
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    path: `${absoluteMdFile2}`,
  },
  {
    href: 'https://www.npmjs.com/',
    text: 'Npm',
    path: `${absoluteMdFile2}`,
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'Npm scripts',
    path: `${absoluteMdFile2}`,
  },
];

const allMdFolderValidatedArr = [
  {
    href: 'https://es.wikipedia.org/wi/Markdown',
    path: `${absoluteMdFile1}`,
    status: 404,
    statusText: 'NOT FOUND',
    text: 'Markdown',
  },
  {
    href: 'https://nodejs.org/',
    path: `${absoluteMdFile1}`,
    status: 302,
    statusText: 'OK',
    text: 'Node.js',
  },
  {
    href: 'https://nodejs.org/',
    path: `${absoluteMdFile1}`,
    status: 302,
    statusText: 'OK',
    text: 'Node.js',
  },
  {
    href: 'https://develoers.google.com/v8/',
    path: `${absoluteMdFile1}`,
    status: 'Error',
    statusText: 'FAIL',
    text: 'Motor v8',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    path: `${absoluteMdFile2}`,
    status: 200,
    statusText: 'OK',
    text: 'Fs',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    path: `${absoluteMdFile2}`,
    status: 200,
    statusText: 'OK',
    text: 'Path',
  },
  {
    href: 'https://www.npmjs.com/',
    path: `${absoluteMdFile2}`,
    status: 200,
    statusText: 'OK',
    text: 'Npm',
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    path: `${absoluteMdFile2}`,
    status: 301,
    statusText: 'OK',
    text: 'Npm scripts',
  },
];

module.exports = {
  allMdFileArr,
  allMdFolderArr,
  allMdFolderValidatedArr,
};
