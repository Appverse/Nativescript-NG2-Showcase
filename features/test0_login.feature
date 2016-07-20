Feature: Login test
  As a user of the mobile application
  I should be able to sign up and login succesfully
  #GO TO LOGIN

  Scenario: Open login page
    Given I am on the main page
    When I Select the button "toggleSDButton"
      And I Select the button "ExamplesButton"
      And I Select the button "LoginButton"
    Then I should read "LOGIN" in "title"

