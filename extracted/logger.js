"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var electronLog = require('electron-log');
var clientEnv = require('./clientEnv');
var target;
try {
    target = require('./target.json').target;
} catch (_a) {
    target = 'PROD';
}
var logToConsole = clientEnv[target].logToConsole;
var Logger = /** @class */ (function () {
    function Logger() {
        // ! We have to return a function in order to preserve file name/line numbering when using console log.
        this.log = (function () {
            if (logToConsole) {
                return Function.prototype.bind.call(Logger.consoleLog, console);
            } else {
                return Function.prototype.bind.call(electronLog.info, electronLog);
            }
        })();
        this.warn = (function () {
            if (logToConsole) {
                return Function.prototype.bind.call(Logger.consoleWarn, console);
            } else {
                return Function.prototype.bind.call(electronLog.warn, electronLog);
            }
        })();
        this.error = (function () {
            if (logToConsole) {
                return Function.prototype.bind.call(Logger.consoleError, console);
            } else {
                return Function.prototype.bind.call(electronLog.error, electronLog);
            }
        })();
        this.initLogger();
    }

    Logger.prototype.initLogger = function () {
        // ! Overwrite console messaging with custom functions
        console.log = this.log;
        console.warn = this.warn;
        console.error = this.error;
        // ! Get actual object data and pretty print for electron-log messages
        electronLog.hooks.push(function (message, transport) {
            var data;
            try {
                data = [JSON.stringify(message.data, null, 2)];
                var newMsg = __assign({}, message, {data: data});
                return newMsg;
            } catch (err) {
                // ! Error when JSON.stringifying result, don't JSON stringify
                electronLog.error('Logger->initLogger()->hooks Error calling JSON.stringy()', message);
                return message;
            }
        });
    };
    // ! Keep a reference to the original console messaging functions
    Logger.consoleLog = console.log;
    Logger.consoleError = console.error;
    Logger.consoleWarn = console.warn;
    return Logger;
}());
exports.Logger = Logger;
