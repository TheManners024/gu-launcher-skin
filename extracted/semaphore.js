"use strict";
exports.__esModule = true;
var Semaphore = /** @class */ (function () {
    function Semaphore(maxConcurrentRequests) {
        if (maxConcurrentRequests === void 0) {
            maxConcurrentRequests = 1;
        }
        this.currentRequests = [];
        this.runningRequests = 0;
        this.maxConcurrentRequests = maxConcurrentRequests;
    }

    Semaphore.prototype.callFunction = function (fnToCall) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // console.log(fnToCall.name, args);
        return new Promise(function (resolve, reject) {
            _this.currentRequests.push({
                resolve: resolve,
                reject: reject,
                fnToCall: fnToCall,
                args: args
            });
            _this.tryNext();
        });
    };
    Semaphore.prototype.tryNext = function () {
        var _this = this;
        if (!this.currentRequests.length) {
            return;
        } else if (this.runningRequests < this.maxConcurrentRequests) {
            var _a = this.currentRequests.shift(), resolve_1 = _a.resolve, reject_1 = _a.reject, fnToCall = _a.fnToCall,
                args = _a.args;
            console.log(fnToCall.name, args);
            this.runningRequests++;
            // setTimeout(() => {
            var req = fnToCall.apply(void 0, args);
            req
                .then(function (res) {
                    return resolve_1(res);
                })["catch"](function (err) {
                return reject_1(err);
            })["finally"](function () {
                _this.runningRequests--;
                _this.tryNext();
            });
            // }, 1000);
        }
    };
    return Semaphore;
}());
exports.Semaphore = Semaphore;
