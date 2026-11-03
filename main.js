const { app, BrowserWindow, Menu } = require('electron');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
function criar() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 1100, height: 700, minWidth: 760, minHeight: 520,
    backgroundColor: '#0b0b0d', title: 'Meu Player MP3', autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  w.loadFile('index.html');
}
app.whenReady().then(criar);
app.on('window-all-closed', () => app.quit());
