var wd = require("wd");
module.exports = function () {
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