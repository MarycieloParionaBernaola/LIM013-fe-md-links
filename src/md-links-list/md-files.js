// USE PATH AND FS MODULES
const path = require('path');
// Use path module to work with file and directory paths
const fs = require('fs');
// Use fs module to work with the file system

// VALIDATE DIRECTORY PATH
const isDirectory = (pathStr) => fs.statSync(pathStr).isDirectory();
// Use fs.statSync().isDirectory() method to verify if the given path points to a directory
// It returns a boolean

// READ DIRECTORY
const readDirectory = (pathStr) => fs.readdirSync(pathStr);
// Use fs.readdirSync() method to read the content of a directory
// It returns a strings array with the file names

// VALIDATE FILE PATH
const isFile = (pathStr) => fs.statSync(pathStr).isFile();
// Use fs.statSync().isFile() method to verify if the given path points to a file
// It returns a boolean

// VALIDATE .MD FILE
const isMd = (pathStr) => path.parse(pathStr).ext === '.md';
// Use the path.parse() method, it will return an object
// Its properties represent significant elements of the path: dir, root, base, name and ext
// Use property ext to verify if the file is .md
// Trailing directory separators are ignored
// A TypeError is thrown if path is not a string.

// GET MD FILES
const getMdFiles = (pathStr) => {
  let mdFilesArr = [];
  if (isDirectory(pathStr)) {
    readDirectory(pathStr).forEach((file) => {
      // readDirectory output is a file/directory array
      // Iterate with each file/directory
      mdFilesArr = mdFilesArr.concat(getMdFiles(path.join(pathStr, file)));
      // Use path.join() to join given path to file/directory
      // This method joins all given path segments together
      // Using the platform-specific separator as a delimiter
      // Then normalizes the resulting path
      // Recursion (apply function and concat)
    });
  } else if (isFile(pathStr) && isMd(pathStr)) {
    mdFilesArr.push(pathStr);
  }
  return mdFilesArr;
};

module.exports = {
  isDirectory,
  readDirectory,
  isFile,
  isMd,
  getMdFiles,
};
