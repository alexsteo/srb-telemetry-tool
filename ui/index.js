const { app, BrowserWindow } = require('electron')
const path = require('path')

try {
    require('electron-reloader')(module, {
        debug: true,
        watchRenderer: true,
        ignore: './telemetry'
    });
} catch (_) { console.log('Error'); }

function createWindow () {
    const win = new BrowserWindow({
        width: 1920,
        height: 860,
        sandbox: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            sandbox: false
        }
    })

    win.webContents.openDevTools()

    win.loadFile('./index/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
