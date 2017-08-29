"use strict";
exports.__esModule = true;
var https = require("https");
var username = 'XXXXXXXXX';
var password = 'YYYYYYYYYY';
var appkey = 'ZZZZZZZZZZZZ';
var options = {
    hostname: 'identitysso.betfair.com',
    port: 443,
    path: '/api/login?username=' + username + '&password=' + password,
    method: 'POST',
    headers: {
        'X-Application': appkey,
        "Accept": "application/json"
    }
};
var req = https.request(options, function (res) {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.on('data', function (d) {
        process.stdout.write(d);
    });
});
req.on('error', function (e) {
    console.error(e);
});
req.end();
