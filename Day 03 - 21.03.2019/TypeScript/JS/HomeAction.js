"use strict";
exports.__esModule = true;
var HomeAction = /** @class */ (function () {
    function HomeAction() {
    }
    HomeAction.prototype.CloseTheDoor = function (action) {
        if (action)
            return "The door is Closed";
        else
            return "The door is Open";
    };
    HomeAction.prototype.CloseTheAir = function (action) {
        if (action)
            return "The air is Closed";
        else
            return "The air is Open";
    };
    HomeAction.prototype.CloseTheLight = function (action) {
        if (action)
            return "The light is Closed";
        else
            return "The light is Open";
    };
    HomeAction.prototype.TeethBrushing = function (action) {
        if (action)
            return "I brushed my teeth";
        else
            return "I did not brush my teeth";
    };
    HomeAction.prototype.OrganizationToExit = function (action) {
        if (action)
            return "An organized case";
        else
            return "An unorganized file";
    };
    return HomeAction;
}());
exports.HomeAction = HomeAction;
