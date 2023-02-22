const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('system_info', {
    // ここでカレントディレクトリを取る方法がわからないのでとりあえずmainで取得させる
    directory: () => ipcRenderer.invoke('directory'),
})