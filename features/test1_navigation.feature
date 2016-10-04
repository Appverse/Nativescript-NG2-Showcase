Feature: Router navigation
  As a user of the mobile application
  I should be able to navigate through the application

# HOME PAGE TEST
  Scenario: Initializing
    Given I wait "10000"
    When I am on the main page
    Then I should see "toggleSideDrawerButton"
  
  Scenario: Open side drawer
    When I Select the button "toggleSideDrawerButton"
    Then I should see "sideDrawer"

  Scenario: Page Home
    Given I can see "sideDrawer"
    When I Select the button "HomeButton"
    Then I should read "Welcome to GFT's NativeScript Showcase" in "welcomeMessage"

# BUTTONS PAGE TEST
  Scenario: Page "buttons"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "buttonsButton"
    Then I should read "BUTTONS" in "title"

# TEXT PAGE TEST
  Scenario: Page "text"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "textButton"
    Then I should read "TEXT" in "title"

# LISTS PAGE TEST
  Scenario: Page "lists"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "listsButton"
    Then I should read "LISTS" in "title"

# PICKERS PAGE TEST
  Scenario: Page "pickers"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "pickersButton"
    Then I should read "PICKERS" in "title"

# LAYOUTS PAGE TEST
  Scenario: Page "layouts"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "layoutsButton"
    Then I should read "LAYOUTS" in "title"

# SELECTORS PAGE TEST
  Scenario: Page "selectors"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "selectorsButton"
    Then I should read "SELECTORS" in "title"

# INDICATORS PAGE TEST
  Scenario: Page "indicators"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "indicatorsButton"
    Then I should read "INDICATORS" in "title"

# IMAGES PAGE TEST
  Scenario: Page "images"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "imagesButton"
    Then I should read "IMAGES" in "title"

# VIEWS PAGE TEST
  Scenario: Page "views"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "viewsButton"
    Then I should read "VIEWS" in "title"

# DIALOGS PAGE TEST
  Scenario: Page "dialogs"
    Given I open the sidedrawer
      And I open the subSideDrawer "Components"
    When I Select the button "dialogsButton"
    Then I should read "DIALOGS" in "title"

# CAMERA PAGE TEST
  Scenario: Page "camera"
    Given I open the sidedrawer
      And I open the subSideDrawer "Hardware"
    When I Select the button "cameraButton"
    Then I should read "CAMERA" in "title"

# ACCELEROMETER PAGE TEST
  Scenario: Page "accelerometer"
    Given I open the sidedrawer
      And I open the subSideDrawer "Hardware"
    When I Select the button "accelerometerButton"
    Then I should read "ACCELEROMETER" in "title"

# LOCATION PAGE TEST
  Scenario: Page "location"
    Given I open the sidedrawer
      And I open the subSideDrawer "Hardware"
    When I Select the button "locationButton"
    Then I should read "LOCATION" in "title"

# LOGIN PAGE TEST
  Scenario: Page "login"
    Given I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "loginButton"
    Then I should read "LOGIN" in "title"

# TABLE PAGE TEST
  Scenario: Page "table"
    Given I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "tableButton"
    Then I should read "TABLE" in "title"

# CONTACTS PAGE TEST
  Scenario: Page "contacts"
    Given I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "contactsButton"
    Then I should read "CONTACTS" in "title"

# CODESCANNER PAGE TEST
  Scenario: Page "codescanner"
    Given I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "codescannerButton"
    Then I should read "BARCODE SCANNER" in "title"

# DATABASE PAGE TEST
  Scenario: Page "database"
    Given I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "databaseButton"
    Then I should read "DATABASE" in "title"

# ANIMATIONS PAGE TEST
  Scenario: Page "animations"
    Given I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "animationsButton"
    Then I should read "ANIMATIONS" in "title"


# TASKS PAGE TEST
  Scenario: Page "tasks"
    Given I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "tasksButton"
    Then I should read "TASKS" in "title"


# SIGNATURE PAD PAGE TEST
  Scenario: Page "signaturepad"
    Given I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "signaturepadButton"
    Then I should read "SIGNATURE" in "title"

# CHARTS PAGE TEST
  Scenario: Page "charts"
    Given Platform is "Android"
      And I open the sidedrawer
      And I open the subSideDrawer "Examples"
    When I Select the button "chartsButton"
      And I wait "3000"
      And I tap back button
    Then I should read "CHARTS" in "title"

# SETTINGS PAGE TEST
  Scenario: Page after menu button tap
    Given I open the sidedrawer
    When I Select the button "SettingsButton"
    Then I should read "SETTINGS" in "title"
