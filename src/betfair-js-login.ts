const https = require('https');

var username = 'XXXXXXXXX';
var password = 'YYYYYYYYYY';
var appkey = 'ZZZZZZZZZZZZ';


const options = {
    hostname: 'identitysso.betfair.com',
    port: 443,
    path: '/api/login?username=' + username + '&password=' + password,
    method: 'POST',
    headers: {
        'X-Application': appkey,
        "Accept": "application/json"
    }
};

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end();
