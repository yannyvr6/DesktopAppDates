const { contectBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld ('electronAPI', {
    loadPage: (page) => ipcRenderer.send('load-page', page),
});

