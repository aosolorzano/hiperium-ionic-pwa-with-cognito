# Hiperium Project: Amplify Cognito App for IonicFramework with Angular

This application is purely an Amplify demo on the Ionic Framework with Angular. We added AWS Cognito support to login before navigate to the main web page.


## Table of Contents
- [Getting Started](#getting-started)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the NodeJS installer](https://nodejs.org/) for Node.js 6 or greater. 
* Install the ionic CLI globally: `sudo npm install -g ionic`.
* Install the Angular CLI globally: `sudo npm install -g @angular/cli`.
* Install Amplify CLI globally: `sudo npm install -g @aws-amplify/cli`.
* Configure your AWS account in Amplify: `amplify configure`.
* Install a local HTTP server `sudo npm install -g http-server`.
* Clone this repository: `git clone https://github.com/aosolorzano/hiperium-ionic-pwa-with-cognito.git`.
* Navigate to project folder: `cd hiperium-ionic-pwa-with-cognito`.
* Add Amplify support: `amplify init`.
* Add Cognito support: `amplify add auth`. Uses default configuration preferably.
* Change file extension `src/aws-exports.js` to `src/aws-exports.ts`.
* Run `npm install` to install all dependencies.
* Build the project for production `ionic build --prod`.
* Run `http-server ./www -p 8100` to visualize the app in your browser.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to S3 for static web hosting.

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
