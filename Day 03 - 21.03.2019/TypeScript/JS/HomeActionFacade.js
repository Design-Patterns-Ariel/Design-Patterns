"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var HomeAction_1 = require("./HomeAction");
var HomeActionFacade = /** @class */ (function (_super) {
    __extends(HomeActionFacade, _super);
    function HomeActionFacade() {
        return _super.call(this) || this;
    }
    HomeActionFacade.getInstance = function () {
        return HomeActionFacade.instance;
    };
    HomeActionFacade.prototype.Sleep = function () {
        console.log("\n\n---------------------------------------");
        console.log("You have selected Sleep mode");
        console.log("---------------------------------------");
        console.log(this.CloseTheLight(true));
        console.log(this.TeethBrushing(true));
        console.log(this.CloseTheDoor(false));
        console.log("---------------------------------------\n\n");
    };
    HomeActionFacade.prototype.ExitTheHouse = function () {
        console.log("---------------------------------------");
        console.log("You have selected Exit mode from home");
        console.log("---------------------------------------");
        console.log(this.CloseTheDoor(false));
        console.log(this.CloseTheAir(true));
        console.log(this.CloseTheLight(false));
        console.log(this.OrganizationToExit(true));
        console.log("---------------------------------------\n\n");
    };
    HomeActionFacade.instance = new HomeActionFacade();
    return HomeActionFacade;
}(HomeAction_1.HomeAction));
exports.HomeActionFacade = HomeActionFacade;
