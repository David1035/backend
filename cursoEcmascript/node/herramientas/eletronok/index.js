const { app, BrowserWindow } = require('electron');

let mainWindow;

// Espera a que la aplicación esté lista
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true, // Mejora la seguridad
            nodeIntegration: false  // Evita acceso no controlado a Node.js
        }
    });

    mainWindow.loadFile('index.html'); // Carga el archivo HTML

    // Manejar cuando la ventana se cierra
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
