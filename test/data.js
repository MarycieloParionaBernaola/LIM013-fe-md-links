const chalk = require('chalk');
const path = require('path');

const cwd = process.cwd();
const bufferPath = Buffer.from('.\\test-files\\test-links-1.md', 'utf-8');
const absolutePathDoesNotExist = 'C:\\absolute-path';
const relativePathDoesNotExist = '.\\relative-path';
const relativeDirectory = '.\\test-files';
const relativeMdFile1 = '.\\test-files\\test-links-1.md';
const relativeNoMdFile = '\\test-files\\test-js-1.0.js';
const absoluteDirectory = path.join(cwd, '\\test-files');
const absoluteMdFile1 = path.join(cwd, '\\test-files\\test-links-1.md');
const absoluteMdFile2 = path.join(cwd, '\\test-files\\test-links-2.md');
const absoluteMdFile3 = path.join(cwd, '\\test-files\\test-links-3.md');
const absoluteMdFile4 = path.join(cwd, '\\test-files\\test-links-4.md');
const absoluteEmptyMdFile = path.join(cwd, '\\test-files\\test-empty.md');
const absoluteNoMdFile = path.join(cwd, '\\test-files\\more-test-files\\test-js-1.js');

const filesArr = [
  'more-test-files',
  'test-empty.md',
  'test-links-1.md',
  'test-links-2.md',
  'test-links-3.md',
  'test-links-4.md',
];

const mdFilesArr = [
  `${absoluteEmptyMdFile}`,
  `${absoluteMdFile1}`,
  `${absoluteMdFile2}`,
  `${absoluteMdFile3}`,
  `${absoluteMdFile4}`,
];

const allMdFileLinksArr = [
  {
    href: 'https://github.com/maredjs/marked',
    text: 'Marked',
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

const allMdFolderLinksArr = [
  {
    href: 'https://github.com/maredjs/marked',
    text: 'Marked',
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
  {
    href: 'https://github.com/merunga/pildora-recursion',
    text: 'Recursion',
    path: `${absoluteMdFile3}`,
  },
  {
    href: 'https://javscript.info/promise-basics',
    text: 'Promise',
    path: `${absoluteMdFile4}`,
  },
];

const allMdFolderValidatedArr = [
  {
    href: 'https://github.com/maredjs/marked',
    path: `${absoluteMdFile1}`,
    status: 404,
    statusText: 'NOT FOUND',
    text: 'Marked',
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
  {
    href: 'https://github.com/merunga/pildora-recursion',
    path: `${absoluteMdFile3}`,
    status: 200,
    statusText: 'OK',
    text: 'Recursion',
  },
  {
    href: 'https://javscript.info/promise-basics',
    path: `${absoluteMdFile4}`,
    status: 'Error',
    statusText: 'FAIL',
    text: 'Promise',
  },
];

const mdLinkOk = [
  {
    href: 'https://github.com/merunga/pildora-recursion',
    text: 'Recursion',
    path: `${absoluteMdFile3}`,
  },
];

const mdLinkValidatedOk = [
  {
    href: 'https://github.com/merunga/pildora-recursion',
    path: `${absoluteMdFile3}`,
    status: 200,
    statusText: 'OK',
    text: 'Recursion',
  },
];

const mdLinkFail = [
  {
    href: 'https://javscript.info/promise-basics',
    text: 'Promise',
    path: `${absoluteMdFile4}`,
  },
];

const mdLinkValidatedFail = [
  {
    href: 'https://javscript.info/promise-basics',
    path: `${absoluteMdFile4}`,
    status: 'Error',
    statusText: 'FAIL',
    text: 'Promise',
  },
];

const totalAndUniqueLinks = chalk.bold.bgHex('403233').rgb(171, 237, 198)`│ Total: ${chalk.bold.rgb(255, 255, 95)(10)} │ Unique: ${chalk.bold.rgb(241, 154, 62)(9)} `;

const plusBrokenLinks = chalk.bold.bgHex('403233').rgb(171, 237, 198)`│ Total: ${chalk.bold.rgb(255, 255, 95)(10)} │ Unique: ${chalk.bold.rgb(241, 154, 62)(9)} │ Broken: ${chalk.bold.rgb(255, 0, 40)(3)} `;

module.exports = {
  bufferPath,
  absolutePathDoesNotExist,
  relativePathDoesNotExist,
  relativeDirectory,
  relativeMdFile1,
  relativeNoMdFile,
  absoluteMdFile1,
  absoluteMdFile2,
  absoluteMdFile3,
  absoluteMdFile4,
  absoluteNoMdFile,
  absoluteEmptyMdFile,
  absoluteDirectory,
  filesArr,
  mdFilesArr,
  allMdFileLinksArr,
  allMdFolderLinksArr,
  allMdFolderValidatedArr,
  mdLinkOk,
  mdLinkValidatedOk,
  mdLinkFail,
  mdLinkValidatedFail,
  totalAndUniqueLinks,
  plusBrokenLinks,
};
