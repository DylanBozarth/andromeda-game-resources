"use strict";
exports.__esModule = true;
exports.app = void 0;
/*
take a string and a difficulty parameter
IE: ('cheeseburger', easy)
run that string through a random function of that difficulty.
Return the encrypted string
*/
var express = require('express');
var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
};
exports.app = express();
var port = process.env.PORT || 4000;
exports.app.get('/', function (req, res) {
    res.send('yeah');
});
exports.app.listen(port, function () {
    console.log("port is on: ".concat(port));
});
