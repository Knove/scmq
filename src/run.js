const nodeCmd = require("node-cmd");
const fs = require("fs");
const chalk = require("chalk");

function run(dir1, dir2, kYype, ip) {
  console.log(chalk.blue("———————————————————————————————————————————————"));
  if (dir1 && dir2 && kYype) {
    // 1. reload roadhogrc file
    const driveLetterDir1 = dir1.substr(0, 1);
    const driveLetterDir2 = dir2.substr(0, 1);
    const data = fs.readFileSync(dir2 + "/.roadhogrc");
    let roadhogrc = data.toString();
    const nowRoadhogrc = roadhogrc
      .replace(/dev/g, kYype)
      .replace(/test/g, kYype)
      .replace(/tst/g, kYype)
      .replace(/ttt/g, kYype);
    fs.writeFile(dir2 + "/.roadhogrc", nowRoadhogrc, function(err) {
      if (err) {
        return console.error(err);
      }
      console.log("update type to " + chalk.bgWhite.red(kYype) + " success!");
      const data = fs.readFileSync(dir1 + "/.roadhogrc");
      let roadhogrc = JSON.parse(data.toString());
      if (ip) {
        roadhogrc.proxy["/ipos-chains"].target = ip;
        roadhogrc.proxy["/login"].target = ip;
      }
      const nowRoadhogrc = JSON.stringify(roadhogrc);
      fs.writeFile(dir1 + "/.roadhogrc", nowRoadhogrc, function(err) {
        if (err) {
          return console.error(err);
        }
        console.log("update IP to " + chalk.bgWhite.blue(ip) + " success!");

        // 2. start servers
        console.log("running ..." + dir1);
        nodeCmd.get(`${driveLetterDir1}:&cd ${dir1}&npm start`, function(
          err,
          data,
          stderr
        ) {
          console.log(data);
        });
        console.log("running ..." + dir2);
        nodeCmd.get(`${driveLetterDir2}:&cd ${dir2}&npm start`, function(
          err,
          data,
          stderr
        ) {
          console.log(data);
        });
      });
    });
  } else {
    console.error('please to bind "scmq config-set <key> <value>" set config!');
  }
}

exports = module.exports = run;
