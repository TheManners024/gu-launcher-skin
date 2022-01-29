"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
module.exports = function () {
    var a = electron_1.app || electron_1.remote.app;
    var isEnvSet = 'ELECTRON_IS_DEV' in process.env;
    var getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
    return isEnvSet ? getFromEnv : !a.isPackaged;
};
