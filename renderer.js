const renderInit = async () => {
    const currentDirectory = document.getElementById('current_directory')
    currentDirectory.innerText = await system_info.directory()
}

renderInit()