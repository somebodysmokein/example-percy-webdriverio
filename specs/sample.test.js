const percySnapshot = require('@percy/webdriverio');

describe('example page', function () {
  
  const TEST_URL = `https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3169517585/Upgrading+Bahmni+on+CentOS+to+Bahmni+Standard+or+Lite+on+Docker`;

  it('Loads the app', async function () {
    await browser.url(TEST_URL);

    expect(await browser.getTitle()).toEqual('Upgrading Bahmni on CentOS to Bahmni Standard (or Lite) on Docker - Bahmni Wiki - Confluence');
    await percySnapshot(browser, 'loads the app');
  });   
});
