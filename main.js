const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 447
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
        }
    })
})

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })