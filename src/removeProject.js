const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

function removeProject(configData, value, projectName) {
  console.log(chalk.blue("———————————————————————————————————————————————"));
  const group = configData.group;
  const newGroup = [];
  if (group && group.length > 0) {
    let flag = false;
    group.map(item => {
      if (item.title === value) {
        const newProjectArray = [];
        item.group.map(item1 => {
          if (item1.title === projectName) flag = true;
          else newProjectArray.push(item1);
        });
        item.group = newProjectArray;
      }
      newGroup.push(item);
    });
    if (flag) {
      configData.group = newGroup;
      fs.writeFile(
        path.join(__dirname, "../scmq.json"),
        JSON.stringify(configData),
        function(err) {
          if (err) {
            return console.error(err);
          }
          console.log("remove success!");
        }
      );
    } else console.log("this group is undefind!");
  } else {
    console.error(
      'sorry, you are not configured at the moment, please bind "scmq add group <>" to add a group.'
    );
  }
}

exports = module.exports = removeProject;
