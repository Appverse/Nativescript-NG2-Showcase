Feature: Login test
  As a user of the mobile application
  I should be able to sign up and login succesfully
  #GO TO LOGIN

  Scenario: Open login page
    Given I wait "5000"
      And I am on the main page
    When I Select the button "toggleSDButton"
      And I Select the button "ExamplesButton"
      And I Select the button "loginButton"
    Then I should read "LOGIN" in "title"

  Scenario: Sign in
    Given I can see "loginModal"
    When I Select the button "signInButton"
      And I type "sample@mail.com" in "emailField"
      And I type "mypassword" in "passField"
      And I type "mypassword" in "passCheckField"
      And I Select the button "signInButton"
      And I tap back button
      And I Select the button "goBackButton"
    Then I should read "LOG IN" in "modalTitle"

  Scenario: Log in
    Given I can see "loginModal"
    When I Select the button "loginButton"
      And I tap back button
    Then I should read "LOG IN" in "modalTitle"

