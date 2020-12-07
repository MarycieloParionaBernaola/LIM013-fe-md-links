const chalk = require('chalk');

const statsLinks = (linksArr, validate) => {
  let allStatsLinks = [];
  const uniqueLinks = [...new Set(linksArr.map((e) => e.href))].length;
  const totalLinks = linksArr.length;
  allStatsLinks = `│ Total: ${chalk.bold.rgb(255, 255, 95)(totalLinks)} │ Unique: ${chalk.bold.rgb(241, 154, 62)(uniqueLinks)} `;
  if (validate) {
    const brokenLinks = linksArr.filter((e) => e.statusText !== 'OK').length;
    allStatsLinks += `│ Broken: ${chalk.bold.rgb(255, 0, 40)(brokenLinks)} `;
  }
  return (chalk.bold.bgHex('403233').rgb(171, 237, 198)(allStatsLinks));
};

module.exports = {
  statsLinks,
};
