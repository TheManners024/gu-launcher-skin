"use strict";
exports.__esModule = true;
var fs = require('fs-extra');
var request = require('request');
var FixedArray = require('fixed-array');
var rxjs_1 = require("rxjs");
var Stats = /** @class */ (function () {
    function Stats(totalBytes) {
        this.bpsLog = FixedArray(10);
        this.bytesCompleted = 0;
        this.bytesTotal = totalBytes;
        this.startTime = new Date().getTime();
    }

    Stats.prototype.getBytesRemaining = function () {
        return this.bytesTotal - this.bytesCompleted;
    };
    Stats.prototype.getPercentage = function () {
        return parseFloat((1 - this.getBytesRemaining() / this.bytesTotal).toFixed(10));
    };
    Stats.prototype.update = function (newBytesCompleted) {
        var currentTime = new Date().getTime();
        var bps = ((this.bytesCompleted + newBytesCompleted - this.bytesCompleted) / (currentTime - this.lastUpdateTime)) * 1000;
        this.bpsLog.push(bps);
        this.lastUpdateTime = currentTime;
        this.bytesCompleted += newBytesCompleted;
    };
    Stats.prototype.getBytesPerSecond = function () {
        var mean = this.bpsLog.mean();
        if (mean < 0.0001) {
            return 0;
        }
        return mean;
    };
    Stats.prototype.getTimeRemaining = function () {
        return this.getBytesRemaining() / this.getBytesPerSecond();
    };
    return Stats;
}());
exports.Stats = Stats;
var Options = /** @class */ (function () {
    function Options() {
    }

    return Options;
}());
exports.Options = Options;
var Download = /** @class */ (function () {
    function Download(remote, directory, filename) {
        this.remote = remote;
        this.directory = directory;
        this.filename = filename;
    }

    Download.prototype.start = function () {
        var currentTime = new Date().getTime();
        this.startTime = currentTime;
        this.lastUpdateTime = currentTime;
    };
    Download.prototype.pause = function () {
        this.req.pause();
    };
    Download.prototype.resume = function () {
        this.req.resume();
    };
    Download.prototype.finish = function () {
        this.endTime = new Date().getTime();
    };
    Download.prototype.cancel = function () {
        this.req.abort();
    };
    Download.prototype.buildHeaders = function (authToken) {
        if (!authToken) {
            return {};
        }
        return {
            Origin: 'http://example.com',
            authorization: "Basic " + authToken
        };
    };
    Download.prototype.download = function (options) {
        var _this = this;
        return rxjs_1.from(new Promise(function (resolve, reject) {
            fs.ensureDirSync(_this.directory);
            var out = fs.createWriteStream(_this.directory + '/' + _this.filename);
            var headers = _this.buildHeaders(options.authToken);
            var req = request({
                method: 'GET',
                uri: _this.remote,
                headers: headers
            });
            out.on('finish', function () {
                out.close();
                resolve(_this.filename); // observer.complete();
            });
            req.pipe(out);
            req.on('response', function (res) {
                if (res.statusCode !== 200) {
                    // ! We have an error.
                    console.error({
                        msg: res.statusMessage,
                        code: res.statusCode
                    });
                    reject({
                        msg: res.statusMessage,
                        code: res.statusCode
                    });
                }
                var totalBytes = parseInt(res.headers['content-length']);
                _this.stats = new Stats(totalBytes);
                if (options && options.onStart != null) {
                    options.onStart(_this.stats);
                }
            });
            req.on('data', function (chunk) {
                _this.stats.update(chunk.length);
                if (options && options.onProgress != null) {
                    options.onProgress(_this.stats);
                }
            });
            req.on('end', function (end) {
                if (options && options.onEnd != null) {
                    options.onEnd(_this.stats);
                    // options.onEnd(end);
                }
            });
            req.once('error', function (error) {
                console.error('Track.ts->download() error', error);
                reject(error);
            });
        }));
    };
    return Download;
}());
exports.Download = Download;
