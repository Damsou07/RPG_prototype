import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true, // masque le menu par défaut (File, Edit, View…)
    icon: path.join('./assets/katana.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // En dev : charge le serveur React
  if (!app.isPackaged) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
