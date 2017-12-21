var app, electron, BrowserWindow, win, url, path;

electron = require('electron');
app = electron[0];
BrowserWindow = electron[1];
url = require('url');
path = require('path');

function createWindow() {
    win = new electron.BrowserWindow();

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', function () {
        win = null;
    });
}

electron.app.on('ready', createWindow);
electron.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron.app.quit();
    }
});
electron.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});

exports.fn = function () {
    return 42;
};
