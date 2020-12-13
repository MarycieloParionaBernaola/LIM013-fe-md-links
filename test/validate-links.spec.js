/* eslint-disable no-undef */
require('jest-fetch-mock').enableMocks();
const { validateLinks } = require('../src/validate-links');
const {
  mdLinkOk, mdLinkValidatedOk, mdLinkFail, mdLinkValidatedFail,
} = require('./data');

beforeEach(() => {
  fetch.resetMocks();
});

describe('validate all .md links', () => {
  test('it returns a link with status 200 OK', () => {
    fetch.mockOnce({ status: 200, statusText: 'OK' });
    validateLinks(mdLinkOk)
      .then(((res) => {
        expect(res).toEqual(mdLinkValidatedOk);
      }));
  });

  test('it returns a link with status Error FAIL', () => {
    fetch.mockRejectOnce(() => validateLinks(mdLinkFail)
      .then((res) => {
        expect(res).toEqual(mdLinkValidatedFail);
      }));
  });
});
