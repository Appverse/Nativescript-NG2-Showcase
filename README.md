# Nativescript Showcase

## Introduction
The _Nativescript Showcase_ is a native crossplatform demo app implemented in NativeScript and Angular 2.


## Plugins

The showcase uses these NativesScript Plugins:
* [nativescript-accelerometer](https://github.com/vakrilov/native-script-accelerometer)
* [nativescript-barcodescanner](https://github.com/EddyVerbruggen/nativescript-barcodescanner)
* [nativescript-drawingpad](https://github.com/bradmartin/nativescript-drawingpad)
* [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation)
* [nativescript-master-technology](https://github.com/NathanaelA/nativescript-master-technology)
* [nativescript-sqlite](https://github.com/NathanaelA/nativescript-sqlite)
* [nativescript-telerik-ui-pro](http://www.telerik.com/nativescript-ui)
* [nativescript-themes](NathanaelA/nativescript-themes)

## Development plugins

The showcase uses these NativesScript dev-plugins:
* [nativescript-dev-typescript](https://github.com/NativeScript/nativescript-dev-typescript)
* [nativescript-dev-sass](https://github.com/toddanglin/nativescript-dev-sass)
* [nativescript-dev-cucumber](https://github.com/marcbuils/nativescript-dev-cucumber)


## Content

### UI Components

A set of pages showing common UI components and style variations

+ Buttons
+ Text
+ Lists
+ Pickers
+ Layouts
+ Selectors
+ Indicators
+ Images
+ Views
+ Dialogs

### Hardware

+ Location (Works on iOS and Android devices and iOS simulator)
+ Camera (Works on iOS and Android devices)
+ Accelerometer (Works on iOS and Android devices and Android emulator)

### Examples

+ __Login__: a login/registration page with email validation
+ __Table__: a table-like layout 
+ __Contacts__: a contacts list with a modal showing a detail view
+ __CodeScanner__: a demo of the barcode scanner plugin
+ __Database__: a demo of the sqlite plugin
+ __SignaturePad__: a demo of the drawingpad plugin
+ __Charts__: a demo of the charts from telerik-ui plugin
+ __Animations__: a demo of animations 
+ __Tasks__: a small todo list with CRUD functionalities

### Other features
+ App uses SASS themes
+ Unit tests in Karma + Jasmine: ```tns test ios``` or ```tns test android```
+ Functional tests in Cucumber: ```npm run cucumber-ios-simulator``` or ```npm run cucumber-android```