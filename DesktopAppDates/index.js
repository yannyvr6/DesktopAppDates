const path = require('path');
const {app, BrowserWindow, ipmain} = require('electron');
const fs = require('fs');

let win;
function createWindow() {
    win = new BrowserWindow({
        width: 550,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.removeMenu();
    win.loadFile("index.html");

    ipcMain.on("load-pages", (event, page) => {
        win.loadFile(page);
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().lengeth === 0) {
            createWindow();
        }
    });
});