// USE PATH AND FS MODULES
const path = require('path');
// Use path module to work with file and directory paths
const fs = require('fs');
// Use fs module to work with the file system

// VALIDATE PATH EXISTS
const isPath = (givenPath) => fs.existsSync(givenPath);
// Use existsSync(path) to verify if the path exists, path can be: string, buffer, url
// It returns true if the path exists, false otherwise
console.log(isPath(Buffer.from('.\\test\\path.spec.js', 'utf-8')));

// VALIDATE ABSOLUTE PATH
const isAbsolute = (givenPath) => path.isAbsolute(givenPath);
// Use path.isAbsolute() method to determinate if given path is an absolute path
// It returns a boolean so if the given path is a zero-length string, false will be returned
// A TypeError is thrown if path is not a string

// CONVERT TO ABSOLUTE PATH
const convertToAbsolutePath = (givenPath) => path.resolve(givenPath);
// Use path.resolve() method to resolve sequence of paths/path segments into an absolute path

// VALIDATE DIRECTORY PATH
const isDirectory = (givenPath) => fs.statSync(givenPath).isDirectory();
// Use fs.statSync().isDirectory() method to verify if the given path points to a directory
// It returns a boolean

// READ DIRECTORY
const readDirectory = (givenPath) => fs.readdirSync(givenPath);
// Use fs.readdirSync() method to read the content of a directory
// It returns a strings array with the file names

// VALIDATE FILE PATH
const isFile = (givenPath) => fs.statSync(givenPath).isFile();
// Use fs.statSync().isFile() method to verify if the given path points to a file
// It returns a boolean

// VALIDATE .MD FILE
const isMd = (givenPath) => path.parse(givenPath).ext === '.md';
// Use the path.parse() method, it will return an object
// Its properties represent significant elements of the path: dir, root, base, name and ext
// Use property ext to verify if the file is .md
// Trailing directory separators are ignored
// A TypeError is thrown if path is not a string.

module.exports = {
  isPath,
  isAbsolute,
  convertToAbsolutePath,
  isDirectory,
  readDirectory,
  isFile,
  isMd,
};
