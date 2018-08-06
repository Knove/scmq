const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

function addProject(configData, inGroup, title, dir, comd) {
  console.log(chalk.blue("———————————————————————————————————————————————"));
  const group = configData.group;
  const newGroup = [];
  if (group && group.length > 0) {
    let flag = false;
    let existed = true;
    group.map(item => {
      if (item.title === inGroup) {
        item.group.map(item1 => {
          if (item1.title === title) {
            existed = false; // existed！
          }
        });
        item.group.push({
          title,
          dir,
          comd
        });
        flag = true;
      }
      newGroup.push(item);
    });
    if (flag) {
      if (title && dir && comd) {
        if (existed) {
          fs.writeFile(
            path.join(__dirname, "../scmq.json"),
            JSON.stringify(configData),
            function(err) {
              if (err) {
                return console.error(err);
              }
              console.log("success add " + chalk.bgBlue(title) + " project!");
            }
          );
        } else
          console.log("this project is existed! Please change project name.");
      } else
        console.log(
          'please bind "scmq add <GROUP NAME> <PROJECT NAME> <PROJECT DIR> <START COMMAND>" to add a project.'
        );
    } else console.log("this group is undefind!");
  } else {
    console.error(
      'sorry, you are not configured at the moment, please bind "scmq add group <>" to add a group.'
    );
  }
}

exports = module.exports = addProject;
