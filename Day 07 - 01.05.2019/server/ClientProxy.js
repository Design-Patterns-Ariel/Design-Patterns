var ClientProxy = /** @class */ (function () {
    function ClientProxy() {
    }
    ClientProxy.prototype.getBestCountry = function () {
        fetch("http://localhost:4000/read").
            then(function (res) { return res.json(); })
            .then(function (x) { return console.log(x); });
        return "done";
    };
    ClientProxy.prototype.setBestCountry = function (x) {
        fetch("http://localhost:4000/set/" + x).
            then(function (res) { return res.json(); })
            .then(function (x) { return console.log(x); });
    };
    return ClientProxy;
}());
