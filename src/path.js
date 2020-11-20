// Use path and fs modules
const path = require('path');
// Use path module to work with file and directory paths
const fs = require('fs');
// Use fs module to work with the file system

// Validate absolute path
const validateAbsolutePath = (givenPath) => {
  let absolutePathValidated;
  // Validate if the path exist
  if (fs.existsSync(givenPath)) {
    // Use existsSync(path) to verify if the path exists, path can be: string, buffer, url
    // It returns true if the path exists, false otherwise
    // Validate absolute path
    if (path.isAbsolute(givenPath)) {
      // Use path.isAbsolute() method to determinate if given path is an absolute path
      // It returns a boolen so if the given path is a zero-length string, false will be returned
      // A TypeError is thrown if path is not a string.
      absolutePathValidated = givenPath;
    } else {
      // Convert to absolute path
      absolutePathValidated = path.resolve(givenPath);
      // Use path.resolve() method to resolve sequence of paths/path segments into an absolute path
    }
  } else {
    console.log('There is no a path');
  }
  return absolutePathValidated;
};

module.exports = {
  validateAbsolutePath,
};
