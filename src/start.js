const chalk = require("chalk");
const nodeCmd = require("node-cmd");
const readline = require("readline");

function start(configData, inputGroup) {
  // group check
  const group = configData.group;
  if (group && group.length > 0) {
    let nowSelection = "";
    let flag = false;
    if (!inputGroup) {
      nowSelection = configData.use || group[0].title;
    } else {
      group.map(item => {
        if (item.title === inputGroup) {
          flag = true;
          nowSelection = inputGroup;
          console.log("But now set run group is => " + chalk.bgBlue(nowSelection));
          console.log(chalk.blue('———————————————————————————————————————————————'));
        }
      });
    }
    if (inputGroup && !flag) {
      console.log("this group is undefind!");
    } else {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question(chalk.whiteBright("Start ? (Press N stop)"), function(
        answer
      ) {
        if (answer === "N" || answer === "n") console.log("Bye!");
        else {
          group.map(item => {
            if (item.title === nowSelection) {
              if (item.group && item.group.length > 0) {
                const projectArray = item.group;
                for (let i = 0; i < projectArray.length; i++) {
                  const driveLetterDir = projectArray[i].dir.substr(0, 1);
                  console.log("running ... " + projectArray[i].title);
                  nodeCmd.get(
                    `${driveLetterDir}:&cd ${projectArray[i].dir}&${
                      projectArray[i].comd
                    }`,
                    function(err, data, stderr) {
                      console.log(data);
                    }
                  );
                }
              } else {
                console.log(
                  'sorry, you group need to set project, please bind "scmq set <>" to add a project. you should bind "scmq help" get help.'
                );
              }
            }
          });
        }
        rl.close();
        console.log(
          chalk.blue("———————————————————————————————————————————————")
        );
      });
    }
  } else
    console.log(
      'sorry, you are not configured at the moment, please bind "scmq add <>" to add a group. you should bind "scmq help" get help.'
    );
}

exports = module.exports = start;
