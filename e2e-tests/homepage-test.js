"use strict";
var nsAppium = require("nativescript-dev-appium");

describe("android simple", function () {
    this.timeout(20000);
    var driver;

    before(function (done) {
        driver = nsAppium.createDriver();
        done();
    });

    after(function () {
        return driver
        .quit()
        .finally(function () {
            console.log("Driver quit successfully");
        });
    });

    function openSideDrawer(driver){
        return driver
            .elementByAccessibilityId("toggleSDButton")
                .should.eventually.exist
            .tap()
            .elementByAccessibilityId("sideDrawer")
                .should.eventually.exist
    }

    function openSubSideDrawer(driver, buttonID){
        return driver
            .elementByAccessibilityId("sideDrawer")
                .should.eventually.exist
            .elementByAccessibilityId(buttonID)
                .should.eventually.exist
            .tap()
            .elementByAccessibilityId("subSideDrawer")
                .should.eventually.exist
    }

    it("should open home page", function () {
        return openSideDrawer(driver)
            .elementByAccessibilityId("HomeButton")
                .should.eventually.exist
            .tap()
            .elementByAccessibilityId("welcomeMessage")
                .should.eventually.exist
    });
});
