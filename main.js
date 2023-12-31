const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1390,
    height: 900,
    frame: false, // Hide the title bar
    webPreferences: {
      nodeIntegration: true, // Keep on or it will break enbeds
      webaudio: false, // Enable web audio support for api requests NOT BROWSER
      sandbox: false, // Disable sandbox mode
      devTools: false, // Disable DevTools
      enableRemoteModule: false, // Disable remote module
      contextIsolation: false // Disable context isolation
    }
  });

  function loadIndexPage() {
    mainWindow.loadFile(path.join(__dirname, 'FYC', 'FYCREWirte Code', 'index.html'));
  }

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyUp') {
      if (input.code === 'ShiftLeft') {
        loadIndexPage();
      }
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'FYC', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
});
