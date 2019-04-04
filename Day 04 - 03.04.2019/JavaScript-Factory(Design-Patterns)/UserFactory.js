"use strict";
exports.__esModule = true;
var Cashier_1 = require("./Cashier");
var Admin_1 = require("./Admin");
var Client_1 = require("./Client");
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.login = function (name, password) {
        if (Admin_1.Admin.isValid(name, password))
            return new Admin_1.Admin();
        if (Cashier_1.Cashier.isValid(name, password))
            return new Cashier_1.Cashier();
        if (Client_1.Client.isValid(name, password))
            return new Client_1.Client();
        return null;
    };
    return UserFactory;
}());
exports.UserFactory = UserFactory;
