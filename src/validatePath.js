// USE PATH AND FS MODULES
const path = require('path');
// Use path module to work with file and directory paths
const fs = require('fs');
// Use fs module to work with the file system

// VALIDATE PATH EXISTS
const isPath = (givenPath) => fs.existsSync(givenPath);
// Use existsSync(path) to verify if the path exists, path can be: string, buffer, url
// It returns true if the path exists, false otherwise

// VALIDATE ABSOLUTE PATH
const isAbsolute = (pathStr) => path.isAbsolute(pathStr);
// Use path.isAbsolute() method to determinate if given path is an absolute path
// It returns a boolean so if the given path is a zero-length string, false will be returned
// A TypeError is thrown if path is not a string

// CONVERT TO ABSOLUTE PATH
const convertToAbsolutePath = (pathStr) => path.resolve(pathStr);
// Use path.resolve() method to resolve sequence of paths/path segments into an absolute path

// VALIDATE PATH
const validatePath = (pathStr) => {
  let validPath;
  if (isAbsolute(pathStr)) {
    validPath = pathStr;
  } else {
    validPath = convertToAbsolutePath(pathStr);
  }
  return validPath;
};

module.exports = {
  isPath,
  isAbsolute,
  convertToAbsolutePath,
  validatePath,
};
