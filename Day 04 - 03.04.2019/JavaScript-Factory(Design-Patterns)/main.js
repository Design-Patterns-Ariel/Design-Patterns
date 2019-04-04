"use strict";
exports.__esModule = true;
var UserFactory_1 = require("./UserFactory");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var names = ["cash", "bob", "client", "admin"];
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var name_1 = names_1[_i];
            var user = void 0;
            user = UserFactory_1.UserFactory.login(name_1, "1234");
            if (user == null) {
                console.log(name_1 + " is not valid");
            }
            else {
                console.log(name_1 + " " + user.getInfo());
            }
        }
    };
    return Main;
}());
