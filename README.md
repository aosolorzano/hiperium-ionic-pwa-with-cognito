# Hiperium Project: Amplify Cognito App for IonicFramework with Angular

This application is purely an Amplify demo on the Ionic Framework with Angular. We added AWS Cognito support to login before navigate to the main web page.


## Table of Contents
- [Getting Started](#getting-started)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)


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

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._


## Deploying

### Progressive Web App

1. Build the project for production `ionic build --prod`.
2. Run `http-server ./www -p 8100` to visualize the app in your browser.
3. Profit. :tada:
4. Push the `www` folder to AWS S3 for static web hosting.
