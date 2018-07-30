const fs = require("fs");
const chalk = require('chalk');

function saveConfig(dir, text, dir1, dir2, kYype){
    let writeText = '';
    dir === 'dir1' ? writeText += ('dir1=' + text) : writeText += dir1; writeText += '\n';
    dir === 'dir2' ? writeText += ('dir2=' + text) : writeText += dir2; writeText += '\n';
    dir === 'type' ? writeText += ('type=' + text) : writeText += kYype;
    if (text)
    fs.writeFile('config.txt', writeText , function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('write Config ' + chalk.blue(dir) + ' success!' );
     });
    
}

exports = module.exports = saveConfig;