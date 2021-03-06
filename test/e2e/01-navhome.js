//var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Assert Home Page, navigation': function(browser) {
    browser
      .url('http://localhost:8000/index.html')
      .waitForElementVisible('body')
      .assert.title('App name')
      .pause(1000)
      .saveScreenshot('/tmp/nightwatch/ttb/screenshots/home.png')
      //test links
      .click('#menu a[href="#about"]')
      .assert.visible("#about")
      .click('#about button')
      .pause(500)
      .acceptAlert()
      .click('#menu a[href="#home"]')
      .assert.visible("#home")

      .end();
  }


};
