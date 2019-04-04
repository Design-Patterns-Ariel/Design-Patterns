"use strict";
exports.__esModule = true;
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.isValid = function (name, password) {
        return name == ("client") && password == ("1234");
    };
    Client.prototype.getInfo = function () {
        return "I am a Client";
    };
    return Client;
}());
exports.Client = Client;
