"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var download_1 = require("./electron-dl-with-stats/download");
var net_1 = require("net");
var http = require("http");
var Store = require("electron-store");
var electron_1 = require("electron");
var logger_1 = require("./logger");
var semaphore_1 = require("./semaphore");
var settings = require('electron-settings');
var AdmZip = require('adm-zip');
var fs = require('fs-extra');
var childProcess = require('child_process');
var is_running = require('is-running');
var os = require('os');
var request = require('request');
var path = require('path');
var launcherTarget = require('./target.json').target;
var dialog = electron_1.remote.dialog;
var screen = electron_1.remote.screen;
// in preload scripts, we have access to node.js and electron APIs
// the remote web app will not, so this is safe
// https://github.com/electron/electron/issues/2984
var _setImmediate = setImmediate;
process.once('loaded', function () {
    global.setImmediate = _setImmediate;
});
var Bridge = /** @class */ (function () {
    function Bridge() {
        this.logger = new logger_1.Logger();
        this.store = new Store();
        this.appsModalExisting$ = new rxjs_1.BehaviorSubject(false);
        this.displayMetricsChange$ = new rxjs_1.Subject();
        this.isInGame$ = new rxjs_1.BehaviorSubject(false);
        this.protocolRedirect$ = new rxjs_1.BehaviorSubject(null);
        this.watchForDisplayChanges();
        this.watchInGameStatus();
        this.checkAdditionalArgs();
        this.watchForAppsModal();
        this.watchProtocolRedirect();
    }

    /**
     * After someone navigates to imtbl://, protocol-redirect event is fired.
     */
    Bridge.prototype.watchProtocolRedirect = function () {
        var _this = this;
        electron_1.ipcRenderer.on('protocol-redirect', function (evt, url) {
            console.log('protocol-redirect receieved', url);
            _this.protocolRedirect$.next({url: url});
        });
    };
    Bridge.prototype.cancelDownload = function () {
        console.log('Preload->cancelDownload()');
        if (this.gameDownload) {
            this.gameDownload.cancel();
        }
    };
    Bridge.prototype.pauseDownload = function () {
        console.log('Preload->pauseDownload()');
        if (this.gameDownload) {
            this.gameDownload.pause();
        }
    };
    Bridge.prototype.resumeDownload = function () {
        console.log('Preload->resumeDownload()');
        if (this.gameDownload) {
            this.gameDownload.resume();
        }
    };
    Bridge.prototype.openDialog = function (options, callback) {
        if (dialog) {
            dialog.showOpenDialog(options, callback);
        } else {
            console.log('no dialog');
        }
    };
    Bridge.prototype.isRunning = function (pid) {
        return is_running(pid);
    };
    Bridge.prototype.extract = function (from, to, callback) {
        console.log('Preload->extract(from: string, to: string', from, to);
        var zip = new AdmZip(from);
        zip.extractAllToAsync(to, true, function (err) {
            return callback(err);
        });
    };
    Bridge.prototype.download = function (url, location, filename, authToken) {
        var _this = this;
        console.log('Preload->download(urlr, location, filename)', url, location, filename);
        this.gameDownload = new download_1.Download(url, location, filename);
        this.progress = new rxjs_1.Subject();
        return rxjs_1.from(this.gameDownload.download({
            authToken: authToken,
            onStart: function (stats) {
                console.log('Preload->download()->onStart', stats);
            },
            onProgress: function (stats) {
                // send every 300th update
                if (window != null) {
                    // console.log('Preload->download()->onProgress', stats);
                    _this.progress.next(stats);
                }
            },
            onEnd: function (stats) {
                // console.log('Preload->download()->onEnd', stats);
                _this.progress.complete();
            }
        }));
    };
    //@TODO to be removed - keeping it for backward compatibiity
    Bridge.prototype.downloadAssets = function (assets, assetsPath) {
        console.log('Preload->downloadAssets(WithOutSempahore)', assets);
        var assetsDownloads = [];
        assetsDownloads = assets.map(function (asset, index) {
            return new download_1.Download(asset.url, assetsPath + asset.location, asset.file_name);
        });
        return assetsDownloads;
    };
    Bridge.prototype.downloadAssetsWithSempahore = function (assets, assetsPath, progresses, authToken, maxDownloadConnections) {
        console.log('Preload->downloadAssetsWithSempahore()', assets);
        var sema = new semaphore_1.Semaphore(maxDownloadConnections);
        var assetsDownloads = assets.map(function (asset, index) {
            var options = {
                authToken: authToken,
                onStart: function (stats) {
                },
                onProgress: function (stats) {
                    progresses[index].next(stats);
                },
                onEnd: function (stats) {
                    progresses[index].complete();
                }
            };
            console.log(asset.url, assetsPath + asset.location, asset.file_name);
            var downloadObj = new download_1.Download(asset.url, assetsPath + asset.location, asset.file_name);
            var downloadFunc = downloadObj.download.bind(downloadObj, options);
            return rxjs_1.from(sema.callFunction(downloadFunc, options));
        });
        return assetsDownloads;
    };
    Bridge.prototype.onQuit = function (f) {
        console.log('on quit registered');
        electron_1.ipcRenderer.on('quit', function (arg) {
            console.log('on quit called');
            f();
        });
    };
    Bridge.prototype.focus = function () {
        console.log('Preload->focus()');
        electron_1.ipcRenderer.send('focus');
    };
    // TODO: this will eventually need to be generalised to more than GU
    Bridge.prototype.getAssetsLocation = function () {
        var platform = this.platform();
        var homeDirectory = this.homeDirectory();
        switch (platform) {
            case 'win32': // windows
                return homeDirectory + '\\Documents\\My Games\\GodsUnchained\\Assets';
            default:
                // osx
                return homeDirectory + '/Library/GodsUnchained/Assets';
        }
    };
    Bridge.prototype.clearDirectory = function (path, callback) {
        if (this.exists(path)) {
            fs.remove(path, callback);
        }
    };
    Bridge.prototype.clearGUAssets = function (callback) {
        console.log('Preload->clearGUAssets()');
        var location = this.getAssetsLocation();
        this.clearDirectory(location, callback);
    };
    // ! CAREFUL ! this allows a user to delete any/all files: need to validate
    Bridge.prototype.deleteFile = function (path) {
        console.log('Preload->deleteFile(path)', path);
        fs.unlinkSync(path);
    };
    // ! CAREFUL ! this allows a user to change the permissions on any/all files: need to validate
    Bridge.prototype.chmod = function (path, callback) {
        console.log('Preload->chmod(path)', path);
        fs.chmod(path, '0777', function (err) {
            return callback(err);
        });
    };
    // ! CAREFUL ! this allows a user to execute any/all files: need to validate
    Bridge.prototype.execute = function (path, callback) {
        console.log('Preload->execute(path)', path);
        switch (os.platform()) {
            case 'win32':
                return childProcess.execFile(path, function (data, err) {
                    return callback(data, err);
                });
            default:
                return childProcess.execFile('open', [path], function (data, err) {
                    return callback(data, err);
                });
        }
    };
    Bridge.prototype.executeArgs = function (path, args, callback) {
        console.log('Preload->executeArgs(path)', path, args);
        switch (os.platform()) {
            case 'win32':
                return childProcess.execFile(path, args, function (data, err) {
                    return callback(data, err);
                });
            default:
                return childProcess.execFile('open', [path, '--args'].concat(args), function (data, err) {
                    return callback(data, err);
                });
        }
    };
    Bridge.prototype.clearCache = function () {
        console.log('Preload->clearCache()');
        electron_1.ipcRenderer.send('clear-cache');
    };
    Bridge.prototype.exists = function (path) {
        var exists = fs.existsSync(path);
        console.log('Preload->exists()', path, exists);
        return exists;
    };
    Bridge.prototype.homeDirectory = function () {
        return os.homedir();
    };
    Bridge.prototype.platform = function () {
        var platform = os.platform();
        console.log('Preload->platform()', platform);
        return platform;
    };
    Bridge.prototype.createServer = function (port, responder) {
        console.log('Preload->createServer(port)', port);
        this.sessionServer = http
            .createServer(function (req, res) {
                res.writeHead(200, {'Content-type': 'application/json'});
                var result = responder(req, res);
                res.write(JSON.stringify(result));
                res.end();
            })
            .listen(port);
    };
    Bridge.prototype.serverActive = function () {
        return this.sessionServer && this.sessionServer.listening;
    };
    Bridge.prototype.closeServer = function () {
        if (this.sessionServer) {
            this.sessionServer.close();
        }
    };
    Bridge.prototype.set = function (keys, value) {
        return this.store.set(keys.join('.'), value);
    };
    Bridge.prototype.get = function (keys) {
        return this.store.get(keys.join('.'));
    };
    Bridge.prototype["delete"] = function (keys) {
        return this.store["delete"](keys.join('.'));
    };
    //* window sizing
    Bridge.prototype.minimizeWindow = function () {
        electron_1.ipcRenderer.send('minimize-window');
    };
    Bridge.prototype.maximizeWindow = function () {
        electron_1.ipcRenderer.send('maximize-window');
    };
    Bridge.prototype.closeWindow = function () {
        electron_1.ipcRenderer.send('close-window');
    };
    Bridge.prototype.setFullscreen = function (fullscreen) {
        electron_1.ipcRenderer.send('fullscreen', fullscreen);
    };
    Bridge.prototype.getDisplaySize = function () {
        return screen.getPrimaryDisplay().size;
    };
    Bridge.prototype.setClientSize = function (width, height, animateResize, center) {
        if (animateResize === void 0) {
            animateResize = false;
        }
        if (center === void 0) {
            center = false;
        }
        electron_1.ipcRenderer.send('resize', {
            width: width,
            height: height,
            animateResize: animateResize,
            center: center
        });
    };
    Bridge.prototype.watchForDisplayChanges = function () {
        var _this = this;
        screen.on('display-metrics-changed', function (ev, display, changedMetrics) {
            _this.displayMetricsChange$.next(_this.getDisplaySize());
        });
    };
    Bridge.prototype.watchInGameStatus = function () {
        this.isInGame$.subscribe(function (isInGame) {
            electron_1.ipcRenderer.send('is-in-game', isInGame);
        });
    };
    Bridge.prototype.watchForAppsModal = function () {
        var _this = this;
        electron_1.ipcRenderer.on('creating-apps-modal', function () {
            console.log('APPS MODAL creating-apps-modal');
            _this.appsModalExisting$.next(true);
        });
        electron_1.ipcRenderer.on('destroying-apps-modal', function () {
            _this.appsModalExisting$.next(false);
        });
    };
    Bridge.prototype.setInGameStatus = function (isInGame) {
        this.isInGame$.next(isInGame);
    };
    Bridge.prototype.checkAdditionalArgs = function () {
        var argMap = process.argv
            .map(function (arg) {
                return arg.split('=');
            })
            .reduce(function (map, _a) {
                var key = _a[0], value = _a[1];
                map[key] = value;
                return map;
            }, {});
        // ? auth
        if (argMap['--auth-id'] && argMap['--auth-access']) {
            this.authId = +argMap['--auth-id'];
            this.authAccess = argMap['--auth-access'];
        }
        // ? session ticket
        if (argMap['--session-ticket']) {
            this.sessionTicket = argMap['--session-ticket'];
        }
        // ? vw/vh
        if (argMap['--vw'] && argMap['--vh']) {
            this.vw = argMap['--vw'];
            this.vh = argMap['--vh'];
        }
    };
    Bridge.prototype.updateAuthPair = function (authPair) {
        this.authId = +authPair.id;
        this.authAccess = authPair.access;
        electron_1.ipcRenderer.send('auth-pair-update', authPair);
    };
    Bridge.prototype.updateSession = function (sessionTicket) {
        this.sessionTicket = sessionTicket;
        electron_1.ipcRenderer.send('session-ticket-update', sessionTicket);
    };
    Bridge.prototype.updateViewportUnits = function (vu) {
        this.vw = vu.vw;
        this.vh = vu.vh;
        electron_1.ipcRenderer.send('viewport-units-update', vu);
    };
    Bridge.prototype.setClientPosition = function (x, y, animate) {
        if (animate === void 0) {
            animate = false;
        }
        electron_1.ipcRenderer.send('position', {x: x, y: y, animate: animate});
    };
    Bridge.prototype.toggleFullscreen = function () {
        electron_1.ipcRenderer.send('toggle-fullscreen');
    };
    Bridge.prototype.createClient = function (host, port) {
        console.log('Preload->createClient(host, port)', host, port);
        return new ProtocolClient(host, port);
    };
    Bridge.prototype.join = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        return path.join.apply(path, paths);
    };
    Bridge.prototype.version = function () {
        return electron_1.remote.app.getVersion();
    };
    Bridge.prototype.launcherTarget = function () {
        return launcherTarget || 'PROD';
    };
    Bridge.prototype.httpGet = function (path) {
        return rxjs_1.Observable.create(function (observer) {
            request({
                url: path,
                json: true
            }, function (error, response, body) {
                if (error) {
                    observer.error(error);
                } else {
                    observer.next(body);
                }
            });
        });
    };
    Bridge.prototype.httpPost = function (path, json) {
        return rxjs_1.Observable.create(function (observer) {
            request({
                url: path,
                method: 'POST',
                json: json
            }, function (error, response, body) {
                if (error) {
                    observer.error(error);
                } else {
                    observer.next(body);
                }
            });
        });
    };
    return Bridge;
}());
exports.Bridge = Bridge;
var ProtocolClient = /** @class */ (function () {
    function ProtocolClient(host, port) {
        this.retryCount = 0;
        this.maxRetryCount = 1000;
        this.socketConnected = false;
        this.host = host;
        this.port = port;
        if (this.port != 0) {
            this.socket = new net_1.Socket();
            this.connect();
        }
    }

    ProtocolClient.prototype.destroy = function () {
        this.socket.removeAllListeners();
        this.socket.destroy();
        this.socket = null;
        this.socketConnected = false;
    };
    ProtocolClient.prototype.process = function (data) {
        var progress = 0;
        while (progress < data.length) {
            // structure: first 2 bytes are size, third byte is msg type, rest is data
            var lengthArray = new Uint16Array(data.slice(progress, progress + 2));
            var length_1 = lengthArray[0] + lengthArray[1] * Math.pow(2, 8);
            console.log('preload->process()', length_1);
            var mt = data[progress + 2];
            // ! rec
            var msg = data.slice(progress + 3, length_1 + progress);
            var handler = this.handlers[mt];
            if (handler) {
                handler(msg);
            }
            progress += length_1;
        }
    };
    ProtocolClient.prototype.connect = function () {
        var _this = this;
        console.log("Preload->ProtocolClient->connect() Connecting to master server at " + this.host + ":" + this.port);
        this.socket.on('connect', function (listener) {
            console.log("Preload->ProtocolClient->connect()->socket.on('connect') at " + _this.socket.localAddress + ":" + _this.socket.localPort);
            _this.socketConnected = true;
        });
        this.socket.connect(this.port, this.host);
        this.socket.on('data', function (data) {
            _this.retryCount = 0;
            if (!data || data.length == 0) {
                return;
            }
            _this.process(data);
        });
        this.socket.on('close', function () {
            console.log("Preload->ProtocolClient->connect()->socket.on('close')");
            _this.handleClose();
        });
        this.socket.on('error', function (error) {
            console.error("Preload->ProtocolClient->connect()->socket.on('error')", error);
            _this.handleClose();
        });
    };
    ProtocolClient.prototype.handleClose = function () {
        var _this = this;
        console.log('Preload->ProtocolClient->handleClose()');
        this.socket.removeAllListeners();
        this.socketConnected = false;
        if (this.retryCount < this.maxRetryCount) {
            this.retryCount++;
            this.socket.setTimeout(10000, function () {
                return _this.connect();
            });
        } else {
            console.error('Preload->ProtocolClient->handleClose() reconnect retry reached limit');
        }
    };
    ProtocolClient.prototype.on = function (msgType, handler) {
        if (!this.handlers) {
            this.handlers = new Map();
        }
        this.handlers[msgType] = handler;
    };
    ProtocolClient.prototype.send = function (msgType, msg) {
        console.log("Preload->ProtocolClient->send()", msgType, msg);
        var encoded = this.encode(msgType, msg);
        this.socket.write(encoded);
    };
    ProtocolClient.prototype.encode = function (msgType, msg) {
        var jmsg = JSON.stringify(msg);
        var encoded = Buffer.from(jmsg);
        var array = new Uint8Array(encoded.length + 3);
        for (var i = 0; i < encoded.length; i++) {
            array[i + 3] = encoded[i];
        }
        var length = array.length;
        // length is a uint16
        array[0] = length & 0xff;
        array[1] = length >> 8;
        array[2] = msgType;
        return array;
    };
    return ProtocolClient;
}());
exports.ProtocolClient = ProtocolClient;
window.bridge = new Bridge();
