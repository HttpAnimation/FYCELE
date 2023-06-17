const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1390,
    height: 900,
    frame: false, // Hide the title bar
    webPreferences: {
      nodeIntegration: true,
      webaudio: true // Enable web audio support
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

