const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("app", {
    exec: (path) => ipcRenderer.send("exec", path),
    npmStart: () => ipcRenderer.send("npmStart"),
});
