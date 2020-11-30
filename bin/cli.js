#! /usr/bin/env node
const process = require('process');
const { mdLinks } = require('../src/md-links');

const givenPath = process.argv[2];
const options = process.argv[3];

if (givenPath && options === undefined) {
  mdLinks(givenPath)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
console.log(mdLinks('E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test-files\\test-empty.md'));
// 'E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test-files'
// 'E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test-files\\more-test-files'
// 'E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links\\test-files\\test-empty.md'
