var wd = require("wd");

module.exports = function () {

  function openSideDrawer(driver){
      return new Promise((resolve, reject) => {
        driver
            .elementByAccessibilityId("toggleSDButton")
            .should.eventually.exist
            .tap()
            .then(()=>{
                resolve(r);
            })
        });
  }

  function openSubSideDrawer(driver, buttonID){
    return new Promise((resolve, reject) => {
        driver
            .elementByAccessibilityId("sideDrawer")
            .should.eventually.exist
            .elementByAccessibilityId(buttonID)
            .should.eventually.exist
            .tap()
            .then(driver=>{
                resolve(driver);
            })
        });
  }

  function tapButton(driver, buttonID){
    return new Promise((resolve, reject) => {
        driver
            .elementByAccessibilityId(buttonID)
            .should.eventually.exist
            .tap()
            .then(()=>{
                resolve();
            })
        });
  }

  this.Given(/^I am on the main page$/, function (callback) {
    this.driver
      .elementByAccessibilityId('router')
      .should.eventually.exist
      .and.notify(callback);
  });

  this.Given(/^I can see "(.*)"$/, function (element,callback) {
    this.driver
      .elementByAccessibilityId(element)
      .should.eventually.exist
      .and.notify(callback);
  });

  this.When(/^I Select the button "(.*)"$/, function (button, callback) {
    this.driver
      .elementByAccessibilityId(button)
      .should.eventually.exist
      .tap()
      .should.eventually.notify(callback);
  });

  this.When(/^I type "(.*)" in "(.*)"$/, function (text, field, callback) {
    this.driver
      .elementByAccessibilityId(field)
      .should.eventually.exist
      .sendKeys(text)
      .should.eventually.notify(callback);
  });

  this.When(/^I tap back button$/, function (callback) {
    this.driver
      .back()
      .should.eventually.notify(callback);
  });

  this.When(/^I hide keyboard$/, function (callback) {
    this.driver
      .hideKeyboard('Return')
      .should.eventually.notify(callback);
  });

  this.When(/^I wait "(.*)"$/, function (duration,callback) {
    this.driver
      .sleep(duration)
      .should.eventually.notify(callback);
  });

  this.Then(/^I should read "(.*)" in "(.*)"$/, function (text, element, callback) {
    this.driver
      .elementByAccessibilityId(element)
      .text().should.eventually.equal(text)
      .and.notify(callback);
  });

  this.Then(/^I should see "(.*)"$/, function (element, callback) {
    this.driver
      .elementByAccessibilityId(element)
      .should.eventually.exist
      .and.notify(callback);
  });
};