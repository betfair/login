# Betfair-JS Login  

Travis CI
[![Build Status](https://travis-ci.org/betfair-js/login.svg?branch=master)](https://travis-ci.org/betfair-js/login)  

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


