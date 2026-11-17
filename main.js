const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
let win, normal;
function criar() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({
    width: 1100, height: 700, minWidth: 760, minHeight: 520,
    backgroundColor: '#0b0b0d', title: 'MeuMP3', autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.loadFile('index.html');
}
// Mini player: janela pequena que fica sempre por cima
ipcMain.on('mini', (e, on) => {
  if (on) {
    normal = win.getBounds();
    win.setMinimumSize(340, 170); win.setSize(400, 190); win.setAlwaysOnTop(true);
  } else {
    win.setAlwaysOnTop(false); win.setMinimumSize(760, 520);
    if (normal) win.setBounds(normal);
  }
});
app.whenReady().then(criar);
app.on('window-all-closed', () => app.quit());
