const { isPathStr } = require('./md-links-list/validate-path');
const { mdLinksList } = require('./md-links-list/md-links-list');

const mdLinks = (givenPath, options) => new Promise((resolve) => {
  let result = [];
  if (isPathStr(givenPath) && options === undefined) {
    result = mdLinksList(givenPath);
  } else {
    result = 'The given path is not a string path or does not exist';
  }
  resolve(result);
});

module.exports = {
  mdLinks,
};
