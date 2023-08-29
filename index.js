// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { exec } = require("child_process");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 200,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
    mainWindow.loadFile("index.html");
};

const excApp = (programPath) => {
    // open app
    exec(programPath, (err, stdout, stderr) => {
        if (err) {
            console.error("Error:", err);
            return;
        }
        console.log("Open successfully!");
    });
};

app.whenReady().then(() => {
    createWindow();
    ipcMain.on("exec", (event, path) => {
        excApp(path);
    });
    ipcMain.on("npmStart", () => {
        // exec("code -n . && npm start");
        // exec("ode");
        // exec("code --reuse-window && npm start");
        exec("code D:\\ElectronJS\\tool1 && npm start");
    });

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
