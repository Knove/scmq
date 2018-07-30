const nodeCmd = require('node-cmd');
const fs = require("fs");
const chalk = require('chalk');

function run(dir1, dir2, kYype){
    console.log(chalk.blue('———————————————————————————————————————————————'));
    if (dir1 && dir2 && kYype) {
    // 1. reload roadhogrc file
    const data = fs.readFileSync(dir2 + '/.roadhogrc');
    let roadhogrc = data.toString();
    const nowRoadhogrc = roadhogrc.replace(/dev/g, kYype).replace(/test/g, kYype).replace(/tst/g, kYype);
    fs.writeFile(dir2 + '/.roadhogrc', nowRoadhogrc , function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('update type to ' + chalk.bgWhite.red(kYype) + ' success!' );
        // 2. start servers
        console.log('running ...' + dir1);  
        nodeCmd.get(
          `cd ${dir1}&yarn start`,
          function(err, data, stderr){
              console.log(data);
          }
        );
        console.log('running ...' + dir2);  
        nodeCmd.get(
        `cd ${dir2}&yarn start`,
        function(err, data, stderr){
            console.log(data);
        }
        );
     });
    } else {
        console.error('please to bind "scmq config-set <key> <value>" set config!');
    }
}

exports = module.exports = run;