# Betfair-JS Login  

Travis CI
[![Build Status](https://travis-ci.org/betfair/login.svg?branch=master)](https://travis-ci.org/betfair/login)  

This is a really simple node module to allow you to login into betfair and get a session token.  

Install:  
```shell
npm install betfair-js-login --save
```  

Usage:
```js
var bfJsLogin = require('betfair-js-login');

var loginClient = new bfJsLogin.Login('USERNAME', 'PASSWORD', 'APPKEY');

loginClient.login().then((token) => {
    console.log(token);
});

```

Development:
1) Clone this repo yout development machine
2) Install packages `npm install`
3) Create a `.env` file in the root folder that looks like this:
    
    ```shell
    BFUSERNAME=<YOUR_USERNAME>
    BFPASSWORD=<YOUR_PASSWORD>
    BFAPPKEY=<YOUR_APPKEY>
    ```

4) Run tests to make sure everything is working `npm run test`
