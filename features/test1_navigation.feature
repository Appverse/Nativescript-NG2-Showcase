Feature: Router navigation
  As a user of the mobile application
  I should be able to navigate through the application
# HOME PAGE TEST
  Scenario: Text after init
    Given I am on the main page
    Then I should read "Welcome to GFT's NativeScript Showcase" in "welcomeMessage"
 
  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# BUTTONS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "subSideDrawer"
    When I Select the button "ButtonsButton"
    Then I should read "BUTTONS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
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
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# LISTS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ListsButton"
    Then I should read "LISTS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# PICKERS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "PickersButton"
    Then I should read "PICKERS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# LAYOUTS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "LayoutsButton"
    Then I should read "LAYOUTS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# SELECTORS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "SelectorsButton"
    Then I should read "SELECTORS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# INDICATORS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "IndicatorsButton"
    Then I should read "INDICATORS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# IMAGES PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ImagesButton"
    Then I should read "IMAGES" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# VIEWS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ViewsButton"
    Then I should read "VIEWS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open components sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ComponentsButton"
    Then I should see "subSideDrawer"
# DIALOGS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "DialogsButton"
    Then I should read "DIALOGS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open hardware sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "HardwareButton"
    Then I should see "subSideDrawer"
# CAMERA PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "CameraButton"
    Then I should read "CAMERA" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open hardware sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "HardwareButton"
    Then I should see "subSideDrawer"
# ACCELEROMETER PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "AccelerometerButton"
    Then I should read "ACCELEROMETER" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open hardware sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "HardwareButton"
    Then I should see "subSideDrawer"
# LOCATION PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "LocationButton"
    Then I should read "LOCATION" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# LOGIN PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "LoginButton"
    Then I should read "LOGIN" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# TABLE PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "TableButton"
    Then I should read "TABLE" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# CONTACTS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ContactsButton"
    Then I should read "CONTACTS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# CODESCANNER PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "CodeScannerButton"
    Then I should read "BARCODE SCANNER" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# OCR PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "OCRButton"
    Then I should read "OPTICAL CHARACTER RECOGNITION" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# DATABASE PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "DatabaseButton"
    Then I should read "DATABASE" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# ANIMATIONS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "AnimationsButton"
    Then I should read "ANIMATIONS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# CHARTS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "ChartsButton"
      And I tap back button
    Then I should read "CHARTS" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
 
  Scenario: Open examples sub side drawer
    Given I can see "sideDrawer"
    When I Select the button "ExamplesButton"
    Then I should see "subSideDrawer"
# SIGNATURE PAD PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "SignaturePadButton"
    Then I should read "SIGNATURE PAD" in "title"

  Scenario: Open side drawer
    Given I am on the main page
    When I Select the button "toggleSDButton"
    Then I should see "sideDrawer"
# SETTINGS PAGE TEST
  Scenario: Page after menu button tap
    Given I can see "sideDrawer"
    When I Select the button "SettingsButton"
    Then I should read "SETTINGS" in "title"
