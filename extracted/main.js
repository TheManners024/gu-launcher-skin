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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = {
        label: 0, sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
        }, trys: [], ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;

    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }

    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {value: op[1], done: false};
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
    }
};
var _this = this;
exports.__esModule = true;
var electron_1 = require("electron");
var electron_devtools_installer_1 = require("electron-devtools-installer");
var electron_updater_1 = require("electron-updater");
var clientEnv = require('./clientEnv');
var isDev = require('./isDev');
var settings = require('electron-settings');
var path = require("path");
var logger_1 = require("./logger");
var logger = new logger_1.Logger();
var fs = require('fs');
var Session = /** @class */ (function () {
    function Session() {
    }

    return Session;
}());
// ! Load the build target here
var target;
try {
    target = require('./target.json').target;
    console.log('SUCCESS loading target.json', target);
} catch (_a) {
    target = 'PROD';
    console.error('FAILURE loading target.json, falling back to', target);
}
var logSessionDetails = function () {
    console.log('------------------------ Start logSessionDetails. ------------------------');
    console.log('App Path', electron_1.app.getAppPath());
    console.log('Version', electron_1.app.getVersion());
    console.log('process.platform', process.platform);
    console.log('process.version', process.version);
    console.log("clientEnv[" + target + "]", clientEnv[target]);
    console.log('------------------------ End logSessionDetails. ------------------------');
};
logSessionDetails();
if (!electron_1.app.isDefaultProtocolClient(clientEnv[target].protocol)) {
    // Define custom protocol handler. Deep linking works on packaged versions of the application!
    electron_1.app.setAsDefaultProtocolClient(clientEnv[target].protocol);
}
electron_1.protocol.registerSchemesAsPrivileged([
    {scheme: 'inject', privileges: {bypassCSP: true}},
    {scheme: 'intercept', privileges: {bypassCSP: true}}
]);

var win;
var modal;
var modalShown = false;
var ModalShortcut = 'Shift+Tab';
var authPair;
var sessionTicket;
var viewportUnits;
// Force Single Instance Application
// ! This stops electron from opening a new window on win32 after a browser navs to imtbl://
var gotTheLock = electron_1.app.requestSingleInstanceLock();
if (gotTheLock) {
    electron_1.app.on('second-instance', function (e, argv) {
        // Someone tried to run a second instance, we should focus our window.
        // Protocol handler for win32
        // argv: An array of the second instance’s (command line / deep linked) arguments
        if (process.platform == 'win32') {
            // Keep only command line / deep linked arguments
            var deeplinkingUrl = argv.slice(3)[0];
            sendProtocolRedirect(deeplinkingUrl);
        }
        if (win) {
            if (win.isMinimized())
                win.restore();
            win.focus();
        }
    });
} else {
    electron_1.app.quit();
}
var name = electron_1.app.getName();
var template = [
    {
        label: name,
        submenu: [
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                click: function () {
                    quit();
                }
            },
            {
                label: 'Console',
                accelerator: 'CmdOrCtrl+K',
                click: function () {
                    if (win) {
                        win.webContents.toggleDevTools();
                    }
                }
            },
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:'},
            {label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:'},
            {label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:'},
            {label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:'},
            {label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:'},
            {
                label: 'Select All',
                accelerator: 'CmdOrCtrl+A',
                selector: 'selectAll:'
            },
        ]
    },
];

function registerModalShortcuts() {
    electron_1.globalShortcut.register(ModalShortcut, function () {
        console.log('SHIFT+TAB detected');
        if (modal) {
            if (modalShown) {
                console.log('Hiding modal');
                modal.hide();
                modalShown = false;
            } else {
                console.log('Showing modal');
                modal.show();
                modalShown = true;
            }
        } else {
            createModal();
        }
    });
}

function unregisterModalShortcuts() {
    electron_1.globalShortcut.unregister(ModalShortcut);
}

function createModal() {
    // ?
    win.webContents.send('creating-apps-modal');
    modal = new electron_1.BrowserWindow({
        // parent: win,
        width: 476,
        height: 702,
        show: false,
        frame: false,
        resizable: false,
        fullscreen: false,
        fullscreenable: false,
        transparent: true,
        vibrancy: 'dark',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            additionalArguments: [
                '--auth-id=' + authPair.id,
                '--auth-access=' + authPair.access,
                '--session-ticket=' + sessionTicket,
                '--vw=' + viewportUnits.vw,
                '--vh=' + viewportUnits.vh,
            ],
            nodeIntegration: false,
            contextIsolation: false
        },
        alwaysOnTop: true
    });
    modal.loadURL('http://localhost:4444/overlay');
    modal.once('ready-to-show', function () {
        // console.log('SHOWING MODAL');
        modal.webContents.openDevTools();
        modal.show();
    });
}

function destroyModal() {
    // console.log('Destroying modal');
    win.webContents.send('destroying-apps-modal');
    modal.destroy();
    modal = null;
    modalShown = false;
}

function createWindow(frontEndUrl) {
    console.log('Creating main electron window');
    electron_devtools_installer_1["default"](electron_devtools_installer_1.REDUX_DEVTOOLS)
        .then(function (name) {
            // return console.log("Added Extension:  " + name);
        })["catch"](function (err) {
        return console.log('An error occurred: ', err);
    });
    var fullscreen = settings.get('fullscreen') != null ? settings.get('fullscreen') : true;
    var settingsWS = settings.get('windowSize');
    if (settingsWS == null) {
        settingsWS = getDefaultClientSize();
        settings.set('windowSize', settingsWS);
    }
    win = new electron_1.BrowserWindow({
        frame: false,
        autoHideMenuBar: true,
        backgroundColor: '#0f1b27',
        fullscreen: fullscreen,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            enableRemoteModule: true,
            contextIsolation: false,
            nativeWindowOpen: true
        },
        height: settingsWS.height,
        width: settingsWS.width,
        resizable: false,
        fullscreenable: true,
        show: false,
        darkTheme: true,
        hasShadow: false,
        transparent: true
    });
    // ? APP BAR LOGIC
    // modalHandler(win);
    win.once('ready-to-show', function () {
        // console.log('ready to show');
        win.show();
    });
    // win.webContents.openDevTools();
    // if (electron_1.nativeTheme.shouldUseDarkColors) {
    //     electron_1.systemPreferences.setAppLevelAppearance('dark');
    // }
    win.loadURL(frontEndUrl);

    var handleWindowOpen = function (details) {
        console.log('calling window open');
        if (details?.url && details.url != win.webContents.getURL()) {
            console.log('opening external');

            electron_1.shell.openExternal(details.url);
            return {action: 'deny'};
        }
        return {action: 'allow'};
    };

    win.webContents.setWindowOpenHandler(handleWindowOpen);

    /**
     * Intercept the request to get the starter decks and always return empty array
     */
    electron_1.protocol.registerStringProtocol('intercept', (request, callback) => {
       if (request.url.match(/.*deck\.prod\.prod\.godsunchained\.com\/deck$/) != null) {
           return callback('[]');
       }
    });
    /**
     * Intercept the requests to their assets and provide our own
     */
    electron_1.protocol.registerFileProtocol('inject', (request, callback) => {
        const path = `${request.url.substring(9)}`;
        callback(path);
    });
    // For future reference
    // https://master.desktop.godsunchained.com/main.bf0fbe0b1765632c.js
    // https://master.desktop.godsunchained.com/runtime.dda8f66dbd773a5e.js
    // https://master.desktop.godsunchained.com/polyfills.4ecc533a6c680949.js
    // https://master.desktop.godsunchained.com/vendor.2f5ff66239d95a12.js
    // https://master.desktop.godsunchained.com/900.cdbfa5f7689195d8.js
    electron_1.session.defaultSession.webRequest.onBeforeRequest({
        urls: [
            'https://master.desktop.godsunchained.com/main.*.js',
            'https://master.desktop.godsunchained.com/runtime.*.js',
            'https://master.desktop.godsunchained.com/polyfills.*.js',
            'https://master.desktop.godsunchained.com/vendor.*.js',
            'https://master.desktop.godsunchained.com/900.*.js',
            'https://master.desktop.godsunchained.com/styles.*.css',
            'https://master.desktop.godsunchained.com/gu-assets/images/rank-progress/gu-progress-rank-cracks--*.svg',
            'https://master.desktop.godsunchained.com/gu-assets/images/misc/gu-gmc-snipe.svg',
            'https://master.desktop.godsunchained.com/assets/images/ui-embellishments/ui--divider-complex-2.svg',
            'https://master.desktop.godsunchained.com/new-relic.*.js',
            'https://deck.prod.prod.godsunchained.com/deck',
            'https://www.facebook.com/*',
            'https://connect.facebook.net/*',
            'https://www.googletagmanager.com/*',
            'https://akuma.immutable.com/*'
        ]
    }, (details, callback) => {
        let url = null;
        if (details.url.match(/main[.].+[.]js$/)) {
            url = path.normalize(`${__dirname}/app-main.js`);
        }
        else if (details.url.match(/runtime[.].+[.]js$/)) {
            url = path.normalize(`${__dirname}/source/app-runtime.js`);
        }
        else if (details.url.match(/polyfills[.].+[.]js$/)) {
            url = path.normalize(`${__dirname}/source/app-polyfills.js`);
        }
        else if (details.url.match(/vendor[.].+[.]js$/)) {
            url = path.normalize(`${__dirname}/source/app-vendor.js`);
        }
        else if (details.url.match(/styles[.].*[.]css$/)) {
            url = path.normalize(`${__dirname}/app-styles.css`);
        }
        else if (details.url.match(/900[.].+[.]js$/) != null) {
            url = path.normalize(`${__dirname}/app-chunk.js`);
        }
        else if (details.url.match(/gu-progress-rank-cracks--[\d][.]svg$/) != null) {
            url = path.normalize(`${__dirname}/${details.url.split('.com').pop()}`);
        }
        else if (details.url.endsWith('new-relic.prod.js')) {
            return callback({cancel: true, redirectURL: undefined});
        }
        else if (details.url.endsWith('gu-gmc-snipe.svg')) {
            url = path.normalize(`${__dirname}/${details.url.split('.com').pop()}`);
        }
        else if (details.url.endsWith('ui--divider-complex-2.svg')) {
            url = path.normalize(`${__dirname}/${details.url.split('.com').pop()}`);
        }
        else if (details.url.match(/.*deck\.prod\.prod\.godsunchained\.com\/deck$/) != null) {
            return callback({redirectURL: 'intercept://deck.prod.prod.godsunchained.com/deck'});
        }
        else if (details.url.match(/.*facebook[.].*/i)) { // why is this a thing
            return callback({cancel: true});
        }
        else if (details.url.match(/.*googletagmanager[.].*/i)) {
            return callback({cancel: true});
        }
        else if (details.url.match(/.*akuma[.]immutable[.].*/i)) {
            return callback({cancel: true});
        }

        callback({redirectURL: `inject://${url}`});
    });

    electron_1.Menu.setApplicationMenu(electron_1.Menu.buildFromTemplate(template));
    console.log('Main electron window created', JSON.stringify(win));
}

electron_1.ipcMain.on('clear-cache', function () {
    // console.log("ipcMain.on('clear-cache')");
    if (win) {
        win.webContents.session.clearCache(function () {
            console.log('cache cleared');
        });
    }
});
electron_1.ipcMain.on('auth-pair-update', function (ev, auth) {
    console.log('auth-pair-update :: auth.id', auth.id);
    authPair = auth;
});
electron_1.ipcMain.on('session-ticket-update', function (ev, session) {
    console.log('session-ticket-update', session);
    sessionTicket = session;
});
electron_1.ipcMain.on('viewport-units-update', function (ev, vu) {
    console.log('viewport-units-update', vu);
    viewportUnits = vu;
});
electron_1.ipcMain.on('focus', function () {
    if (win) {
        win.focus();
    }
});
electron_1.ipcMain.on('close-window', function (event, arg) {
    if (win) {
        //ipcMain.emit('quit');
        event.sender.send('quit');
        win.close();
    }
});
electron_1.ipcMain.on('maximize-window', function () {
    if (win) {
        win.maximize();
    }
});
electron_1.ipcMain.on('minimize-window', function () {
    if (win) {
        win.minimize();
    }
});
electron_1.ipcMain.on('toggle-fullscreen', function () {
    if (win) {
        if (win.isFullScreen()) {
            var size = settings.get('windowSize');
            var position = calcCenterPosition(size);
            win.setFullScreen(!win.isFullScreen());
            win.setBounds({
                x: position.x,
                y: position.y,
                width: size.width,
                height: size.height
            }, size.animateResize);
        } else {
            var bounds = electron_1.screen.getPrimaryDisplay().bounds;
            win.setBounds(bounds, true);
            win.setFullScreen(!win.isFullScreen());
        }
        // console.log('toggling fullscreen');
        settings.set('fullscreen', win.isFullScreen());
    }
});
electron_1.ipcMain.on('resize', function (ev, resize) {
    if (win) {
        var position = resize.center ? calcCenterPosition(resize) : {x: 0, y: 0};
        win.setBounds({
            x: position.x,
            y: position.y,
            width: resize.width,
            height: resize.height
        }, resize.animateResize);
        settings.set('windowSize', resize);
    }
});
electron_1.ipcMain.on('position', function (ev, position) {
    if (win) {
        win.setPosition(position.x, position.y, position.animate);
    }
});
electron_1.ipcMain.on('center', function () {
    win.center();
});
electron_1.ipcMain.on('is-in-game', function (event, isInGame) {
    // ? CHAT&FRIENDS
    // if (isInGame) {
    //   registerModalShortcuts();
    // } else {
    //   unregisterModalShortcuts();
    //   if (modal) {
    //     destroyModal();
    //   }
    // }
});
var cspRules = [
    "default-src 'self' https://*.vimeo.com;",
    // `default-src 'none';`,
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.xsolla.net https://*.immutable.com https://*.godsunchained.com https://connect.facebook.net https://www.recaptcha.net https://www.google.com https://www.gstatic.com/recaptcha/ https://*.vimeocdn.com/ https://www.googletagmanager.com https://www.google-analytics.com https://*.vimeo.com https://*.vimeocdn.com https://*.newrelic.com https://*.nr-data.net;",
    "img-src 'self' data: https://cdn.xsolla.net https://secure.xsolla.com https://*.immutable.com http://*.godsunchained.com https://*.godsunchained.com https://www.facebook.com https://*.vimeocdn.com/ https://www.google-analytics.com/ https://stats.g.doubleclick.net/ https://www.google.com.au/ https://www.google.com/ https://*.vimeocdn.com https://vimeo.com;",
    "font-src 'self' data: https://*.immutable.com https://*.godsunchained.com https://fonts.googleapis.com https://fonts.gstatic.com;",
    "style-src 'self' 'unsafe-inline' https://*.immutable.com https://*.godsunchained.com https://fonts.googleapis.com https://*.vimeocdn.com/;",
    "media-src 'self' https://*.immutable.com https://*.godsunchained.com blob:;",
    "connect-src 'self' 'unsafe-eval' https://*.launchdarkly.com https://stats.g.doubleclick.net https://api.rollbar.com https://www.google-analytics.com https://d2kgdofmel8ecp.cloudfront.net ws://localhost:* https://*.godsunchained.com https://*.immutable.com https://*.apollo.gg https://api.coinmarketcap.com wss://*.immutable.com ws://*.immutable.com https://*.infura.io https://vimeo.com/api/ https://*.vimeocdn.com/ https://*.akamaized.net/ https://*.vimeo.com https://bam.nr-data.net;",
    "form-action 'self' https://*.godsunchained.com https://*.immutable.com https://*.apollo.gg;",
    "frame-src 'self' https://www.google.com/ https://player.vimeo.com/ https://*.immutable.com https://*.godsunchained.com https://www.recaptcha.net;",
    "child-src 'self' *.vimeo.com *.vimeocdn.com;",
].join(' ');
electron_1.app.on('ready', function () {
    return __awaiter(_this, void 0, void 0, function () {
        var frontEndUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('app.on(ready)');
                    electron_updater_1.autoUpdater
                        .checkForUpdatesAndNotify()
                        .then(function (res) {
                            console.log('SUCCESS checkForUpdatesAndNotify', res);
                        })["catch"](function (err) {
                        console.error('FAILURE checkForUpdatesAndNotify', err);
                    });
                    console.log('Creating modal');
                    electron_1.session.defaultSession.webRequest.onHeadersReceived(function (details, callback) {
                        callback({
                            responseHeaders: __assign({}, details.responseHeaders, {'Content-Security-Policy': [cspRules]})
                        });
                    });
                    if (!(target === 'QA')) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadUrlSelector()];
                case 1:
                    frontEndUrl = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    frontEndUrl = clientEnv[target].url;
                    _a.label = 3;
                case 3:
                    createWindow(frontEndUrl);
                    return [2 /*return*/];
            }
        });
    });
});

function loadUrlSelector() {
    console.log('Creating loadUrlSelector electron window');
    var fullscreen = settings.get('fullscreen') != null ? settings.get('fullscreen') : true;
    var settingsWS = settings.get('windowSize');
    if (settingsWS == null) {
        settingsWS = getDefaultClientSize();
        settings.set('windowSize', settingsWS);
    }
    var urlWin = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    urlWin.once('ready-to-show', function () {
        console.log('ready to show');
        urlWin.show();
    });
    urlWin.loadFile('urlSelector.html');
    return new Promise(function (resolve, reject) {
        electron_1.ipcMain.on('front-end-url', function (event, data) {
            setTimeout(function () {
                urlWin.close();
            }, 1000);
            resolve(data.frontEndUrl);
        });
    });
}

electron_1.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
electron_1.app.on('window-all-closed', function () {
    console.log('app.on(window-all-closed) ---- calling quit();');
    quit();
});
electron_updater_1.autoUpdater.on('checking-for-update', function (info) {
    console.log("autoUpdater.on('checking-for-update')", info);
});
electron_updater_1.autoUpdater.on('update-available', function (info) {
    console.log("autoUpdater.on('update-available')", info);
});
electron_updater_1.autoUpdater.on('update-not-available', function (info) {
    console.log("autoUpdater.on('update-not-available')", info);
});
electron_updater_1.autoUpdater.on('error', function (err) {
    console.error("autoUpdater.on('error')", err);
});
electron_updater_1.autoUpdater.on('update-downloaded', function (info) {
    console.log("autoUpdater.on('update-downloaded')", info);
    electron_updater_1.autoUpdater.quitAndInstall();
});

function quit() {
    console.log('quit()');
    electron_1.app.quit();
}

// default width for a window is 75%
function getDefaultClientSize() {
    var displayWidth = electron_1.screen.getPrimaryDisplay().size.width;
    var width = Math.floor(displayWidth * 0.75);
    var height = Math.floor((width * 9) / 16);
    // ! Back to hard coding of window dimensions for release
    return {width: 1280, height: 720};
    return {width: width, height: height};
}

function calcCenterPosition(clientSize) {
    var displaySize = electron_1.screen.getPrimaryDisplay().size;
    var x = Math.floor(displaySize.width / 2 - clientSize.width / 2);
    var y = Math.floor(displaySize.height / 2 - clientSize.height / 2);
    return {x: x, y: y};
}

/**
 * Handles navigation to imtbl:// from a browser and notifies the web app.
 * URL can be called with an encoded JSON payload as a query string.
 * ? i.e imtbl://?payload=${encodeURIComponent(JSON.stringify(${object}))}
 */
electron_1.app.on('will-finish-launching', function () {
    // Protocol handler for osx
    electron_1.app.on('open-url', function (event, url) {
        event.preventDefault();
        sendProtocolRedirect(url);
    });
});

function sendProtocolRedirect(url, retrying) {
    if (retrying === void 0) {
        retrying = false;
    }
    if (win && win.webContents) {
        console.log('sendProtocolRedirect', url);
        win.webContents.send('protocol-redirect', url);
    } else if (!retrying) {
        // If we are opening the launcher for the first time, we won't have win
        // Wait 5 seconds and try again
        console.error('sendProtocolRedirect win.webContents not defined', url);
        setTimeout(function () {
            return sendProtocolRedirect(url, true);
        }, 5000);
    }
}
