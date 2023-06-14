const { app, BrowserWindow } = require('electron');

// Create a new Electron window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load your HTML file
  win.loadFile('index.html');
}

// Create the window when the Electron app is ready
app.whenReady().then(createWindow);
