var wd = require("wd");

module.exports = function () {

    function tap(button, callback) {
        this.driver
            .elementByAccessibilityId(button)
            .should.eventually.exist
            .tap()
            .should.eventually.notify(callback);
    }
    
    this.When(/^I am on the main page$/, function (callback) {
        this.driver
            .elementByAccessibilityId('mainPage')
            .should.eventually.exist
            .and.notify(callback);
    });

    this.Given(/^I open the sidedrawer$/, function (callback) {
        tap.call(this, 'toggleSideDrawerButton', callback);
    });

    this.Given(/^I open the subSideDrawer "(.*)"$/, function (button, callback) {
        tap.call(this, button + 'Button', callback);
    });

    this.Given(/^Platform is "(.*)"$/, function (platformName, callback) {
        console.log(this.platformName);
        if (this.platformName !== platformName){
             callback(null, 'pending');
        } else {
             callback();
        }
        
    });

    this.Given(/^I can see "(.*)"$/, function (element, callback) {
        this.driver
            .elementByAccessibilityId(element)
            .should.eventually.exist
            .and.notify(callback);
    });

    this.When(/^I Select the button "(.*)"$/, function (button, callback) {
        tap.call(this, button, callback);
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

    this.When(/^I wait "(.*)"$/, function (duration, callback) {
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