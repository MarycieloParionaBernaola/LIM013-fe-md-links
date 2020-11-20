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
      // It returns a boolean so if the given path is a zero-length string, false will be returned
      // A TypeError is thrown if path is not a string
      absolutePathValidated = givenPath;
      console.log('Given path is absolute!');
    } else {
      // Convert to absolute path
      absolutePathValidated = path.resolve(givenPath);
      console.log('Given path was converted to absolute!');
      // Use path.resolve() method to resolve sequence of paths/path segments into an absolute path
    }
  } else {
    console.log('There is no a path');
  }
  return absolutePathValidated;
};
console.log(validateAbsolutePath('.\\README.md'));
// absolute path: E:\\BOOTCAMP\\PROJECTS\\MD-LINKS\\LIM013-fe-md-links
// Result: Given path is absolute! and (idem path)
// relative path: .\\README.md result: Given path was converted to absolute!
// E:\BOOTCAMP\PROJECTS\MD-LINKS\LIM013-fe-md-links\README.md
// no path: C:\\BOOTCAMP result: there is no path and undefined
module.exports = {
  validateAbsolutePath,
};
