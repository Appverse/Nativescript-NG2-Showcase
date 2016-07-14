Feature: Home Page
  As a user of the mobile application
  I should read welcome message
# HOME PAGE TEST
  Scenario: Text after init
    Given I am on the main page
    Then I should read "Welcome to GFT's NativeScript Showcase" in "welcomeMessage"
 
  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# BUTTONS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ButtonsButton"
    Then I should read "BUTTONS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# TEXT PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "TextButton"
    Then I should read "TEXT" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
       And I hide keyboard
    Then I should see "sideDrawer"
# LISTS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ListsButton"
    Then I should read "LISTS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# PICKERS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "PickersButton"
    Then I should read "PICKERS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# LAYOUTS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "LayoutsButton"
    Then I should read "LAYOUTS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# SELECTORS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "SelectorsButton"
    Then I should read "SELECTORS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# INDICATORS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "IndicatorsButton"
    Then I should read "INDICATORS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# IMAGES PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ImagesButton"
    Then I should read "IMAGES" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# VIEWS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ViewsButton"
    Then I should read "VIEWS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# DIALOGS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "DialogsButton"
    Then I should read "DIALOGS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# # CAMERA PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "CameraButton"
#     Then I should read "CAMERA" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # ACCELEROMETER PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "AccelerometerButton"
#     Then I should read "ACCELEROMETER" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # LOCATION PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "LocationButton"
#     Then I should read "LOCATION" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # LOGIN PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "LoginButton"
#     Then I should read "LOGIN" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # TABLE PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "TableButton"
#     Then I should read "TABLE" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # CONTACTS PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "ContactsButton"
#     Then I should read "CONTACTS" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # CODESCANNER PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "CodeScannerButton"
#     Then I should read "CODESCANNER" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # OCR PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "OCRButton"
#     Then I should read "OPTICAL CHARACTER RECOGNITION" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # DATABASE PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "DatabaseButton"
#     Then I should read "DATABASE" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # ANIMATIONS PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "AnimationsButton"
#     Then I should read "ANIMATIONS" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # CHARTS PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "ChartsButton"
#     Then I should read "CHARTS" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # SIGNATURE PAD PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "SignaturePadButton"
#     Then I should read "SIGNATURE PAD" in "title"

#   Scenario: Open side drawer
#     Given I am on the main page
#     When I Select the button "toggleSDButton"
#     Then I should see "sideDrawer"
# # SETTINGS PAGE TEST
#   Scenario: Page after menu button tap
#     Given I can see "sideDrawer"
#     When I Select the button "SettingsButton"
#     Then I should read "SETTINGS" in "title"
