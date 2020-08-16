const mongoose = require('mongoose')
const dbURI = `${process.env.APP_DB_PROTOCOL}://${process.env.APP_DB_USER ? process.env.APP_DB_USER + ":" + process.env.APP_DB_PASS + "@" : ""}${process.env.APP_DB_URL}${process.env.APP_DB_PORT ? ':' + process.env.APP_DB_PORT : ''}/${process.env.APP_DB_NAME}`;


const connect = function () {
    return new Promise((resolve, reject) => {
        console.log('dbURI :: ', dbURI)
        mongoose.connect(dbURI, { useUnifiedTopology: true, autoIndex: true, autoCreate: true, auto_reconnect: true, useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true });
        mongoose.connection.setMaxListeners(0);
        mongoose.connection.on('connected', function () {
            console.log("Mongoose Connected");
            resolve({ value: true })
        });
        mongoose.connection.on('error', function (error) {
            resolve({ error: { type: 'error', ...error.spread(), location: { file: __filename, function: 'connect' } } })
        });
        mongoose.connection.on('disconnected', function () {
            console.log('Mongoose disconnected');
            // mongoose.connect(dbURI, {auto_reconnect:true, useNewUrlParser: true });
        });
    })
}

module.exports = {
    connect
}