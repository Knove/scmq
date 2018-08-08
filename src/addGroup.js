const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

function addGroup(configData, value) {
  console.log(chalk.blue("———————————————————————————————————————————————"));
  const group = configData.group;
  if (value) {
    let flag = true;
    group.map(item => {
      if (item.title === value) {
        flag = false;
      }
    });
    if (flag) {
      configData.group.push({
        title: value,
        group: []
      });

      fs.writeFile(
        path.join(__dirname, "../scmq.json"),
        JSON.stringify(configData),
        function(err) {
          if (err) {
            return console.error(err);
          }
          console.log("success add " + chalk.bgBlue(value) + " group!");
        }
      );
    } else console.log("this group is existed! Please change group name.");
  } else console.log('please input group name! comd: "scmq add group <>" ');
}

exports = module.exports = addGroup;
