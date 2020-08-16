require('dotenv').config();
const DBService = require('./services/db.service')

const express = require('express');
var http = require('http');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Add a method spread in Error Class to return all non-enumerable properties.
Error.prototype.spread = function () {
    const errorProperties = Object.getOwnPropertyNames(this);
    let errorObj = {}
    for (key in errorProperties) {
        errorObj[errorProperties[key] + ''] = this[errorProperties[key]]
    }
    return errorObj
}

Object.defineProperty(global, '_bitcore', {
    get() {
        return undefined
    },
    set() {

    }
})

function initiateServer() {
    const server = http.createServer(app);
    server.listen(process.env.APP_PORT, () => console.log(`Listening on port ${process.env.APP_PORT}`));
    server.timeout = 0
}

(async function () {
    try {
        console.log("Connecting to DB")
        await DBService.connect()
        console.log('DB Connected');
        console.log('Starting Server');

        initiateServer();


    } catch (error) {
        console.log("Failed to start server")
        process.exit(1)
    }

}())


const Router = require('./routes');

app.use('/', Router);
