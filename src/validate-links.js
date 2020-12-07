const fetch = require('node-fetch');

const validateLinks = (allMdLinksArr) => {
  const allLinksValidated = allMdLinksArr.map((e) => fetch(e.href, { redirect: 'manual' })
    .then((link) => {
      const linksObj = {
        href: e.href,
        text: e.text,
        path: e.path,
        status: link.status,
        statusText: (link.status >= 200 && link.status < 309) ? 'OK' : link.statusText.toUpperCase(),
      };
      return linksObj;
    })
    .catch(() => {
      const linksObj = {
        href: e.href,
        text: e.text,
        path: e.path,
        status: 'Error',
        statusText: 'FAIL',
      };
      return linksObj;
    }));
  return Promise.all(allLinksValidated);
};

module.exports = {
  validateLinks,
};
