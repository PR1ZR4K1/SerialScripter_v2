function getScripts(dir)
{
    const fs = require('fs');
    const path = require('path');

    const directoryPath = dir;
    const scripts = [];

    const fileList = fs.readdirSync(directoryPath);
    for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        let fileSize; 

        if (stats.isFile()) {
            if (stats.size > 1000000){
                fileSize = (stats.size / 1000000).toFixed(2) + " MB";
            }
            else if (stats.size > 1000){
                fileSize = (stats.size / 1000).toFixed(2) + " KB";
            }
            else{
                fileSize = stats.size + " B";
            }

            const scriptName = path.basename(file);
            scripts.push({'script_name': scriptName, 'file_size': fileSize, 'selected': false});
        }
    }

    return scripts;
}

console.log(getScripts('./scripts/linux'))
// module.exports = { getScripts };

