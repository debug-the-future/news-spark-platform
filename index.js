var ngrok = require('ngrok');

ngrok.connect({
    proto: 'http', // http|tcp|tls
    addr: 3000, // port or network address
    // auth: 'user:pwd', // http basic authentication for tunnel
    // subdomain: 'alex', // reserved tunnel name https://alex.ngrok.io
    authtoken: process.env.NGROK_API_KEY, // your authtoken from ngrok.com
    // region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us
}, function (err, url) {
    console.log(url);
});
