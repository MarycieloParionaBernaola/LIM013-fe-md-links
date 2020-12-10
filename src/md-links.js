const { isPathStr, validatePath } = require('./get-md-links/validate-path');
const { getAllMdFiles } = require('./get-md-links/get-md-files');
const { getAllMdLinksArr } = require('./get-md-links/get-md-links');
const { validateLinks } = require('./validate-links');

const mdLinks = (givenPath, options) => new Promise((resolve, reject) => {
  const pathStr = isPathStr(givenPath);
  if (!pathStr) {
    reject(new Error('The given path is invalid or does not exist. Please check and enter it again.'));
  }

  const validPathStr = validatePath(givenPath);
  const mdFile = getAllMdFiles(validPathStr).length > 0;
  const mdLink = getAllMdLinksArr(validPathStr).length > 0;

  if (!mdLink && mdFile) {
    reject(new Error('No .md link found. Try another path.'));
  }

  if (!mdFile) {
    reject(new Error('No .md file found. Try another path.'));
  }

  if (!options) {
    resolve(getAllMdLinksArr(validPathStr));
  } else if (options.validate === false) {
    resolve(getAllMdLinksArr(validPathStr));
  } else if (options.validate === true) {
    resolve(validateLinks(getAllMdLinksArr(validPathStr)));
  } else {
    reject(new Error('Validate should have a boolean value'));
  }
});

module.exports = {
  mdLinks,
};
