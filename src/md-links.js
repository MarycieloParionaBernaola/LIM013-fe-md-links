const { isPathStr } = require('./md-links-list/validate-path');
const { mdLinksList } = require('./md-links-list/md-links-list');

const mdLinks = (givenPath, options) => new Promise((resolve, reject) => {
  let result = [];
  if (isPathStr(givenPath) && options === undefined) {
    result = mdLinksList(givenPath);
    resolve(result);
  } else {
    const err = 'The given path is not a string path or does not exist';
    reject(err);
  }
});

module.exports = {
  mdLinks,
};
