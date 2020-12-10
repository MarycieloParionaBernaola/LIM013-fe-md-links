const { statsLinks } = require('../src/stats-links');
const {
  allMdFolderLinksArr, allMdFolderValidatedArr,
  totalAndUniqueLinks, plusBrokenLinks,
} = require('./data');

describe('stats links', () => {
  test('it is a function', () => {
    expect(typeof statsLinks).toBe('function');
  });
  test('it returns total and unique links', () => {
    expect(statsLinks(allMdFolderLinksArr)).toBe(totalAndUniqueLinks);
  });
  test('it returns total, unique and broken links when true argument is entered', () => {
    expect(statsLinks(allMdFolderValidatedArr, true))
      .toBe(plusBrokenLinks);
  });
});
