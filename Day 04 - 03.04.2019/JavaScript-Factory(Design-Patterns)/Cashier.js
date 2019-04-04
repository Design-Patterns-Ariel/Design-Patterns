"use strict";
exports.__esModule = true;
var Cashier = /** @class */ (function () {
    function Cashier() {
    }
    Cashier.isValid = function (name, password) {
        return name == ("cash") && password == ("1234");
    };
    Cashier.prototype.getInfo = function () {
        return "I am a Cashier";
    };
    return Cashier;
}());
exports.Cashier = Cashier;
