"use strict";
exports.__esModule = true;
var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.isValid = function (name, password) {
        return name == ("admin") && password == ("1234");
    };
    Admin.prototype.getInfo = function () {
        return "I am an Admin";
    };
    return Admin;
}());
exports.Admin = Admin;
