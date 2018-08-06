#!/usr/bin/env node

// global package
const chalk = require("chalk");
const fs = require("fs");
const readline = require("readline");
const path = require("path");

// private package
const saveConfig = require("../src/saveConfig");
const showConfig = require("../src/config");
const showList = require("../src/showList");
const run = require("../src/run");
const start = require("../src/start");
const useGroup = require("../src/useGroup");
const addGroup = require("../src/addGroup");
const removeGroup = require("../src/removeGroup");
const addProject = require("../src/addProject");
const removeProject = require("../src/removeProject");

// config data
const script = process.argv[2];
const configData = require("../scmq.json");
const data = fs.readFileSync(path.join(__dirname, "../config.txt"));
const dir1 = data.toString().split("\n")[0];
const dir2 = data.toString().split("\n")[1];
const kYype = data.toString().split("\n")[2];
const ip = data.toString().split("\n")[3];

// global data
const flag = true;

// switch
if (flag)
  switch (script) {
    case undefined:
    case "start":
    case "run":
      showList(configData);
      process.argv[3] ? start(configData, process.argv[3]) : start(configData);
      break;
    case "list":
      showList(configData);
      break;
    case "use":
      useGroup(configData, process.argv[3]);
      break;
    case "add":
      process.argv[3] === "group" || process.argv[3] === "g"
        ? addGroup(configData, process.argv[4])
        : addProject(
            configData,
            process.argv[3],
            process.argv[4],
            process.argv[5],
            process.argv[6]
          );
      break;
    case "remove":
      process.argv[3] === "group" || process.argv[3] === "g"
        ? removeGroup(configData, process.argv[4])
        : removeProject(configData, process.argv[3], process.argv[4]);
      break;
    case "-v":
    case "--version":
      console.log("SCMQ V" + require("../package.json").version);
      break;
    case "config-set":
      // save config info
      saveConfig(process.argv[3], process.argv[4], dir1, dir2, kYype, ip);
      break;
    case "help":
    case "-help":
    case "-h":
    case "h":
      // help
      console.log(
        chalk.blue(":D pls go : https://github.com/KnoveZ/scmq  see some API ")
      );
      break;
    case "go":
      // start
      showConfig(dir1, dir2, kYype, ip);
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question(chalk.whiteBright("Go? (Press N stop)"), function(answer) {
        if (answer === "N" || answer === "n") console.log("Bye!");
        else {
          run(
            dir1.split("=")[1],
            dir2.split("=")[1],
            kYype.split("=")[1],
            ip.split("=")[1]
          );
        }
        rl.close();
      });
      break;
    case "config":
      showConfig(dir1, dir2, kYype, ip);
      break;
    default:
      console.log(`unkown script ${chalk.cyan(script)}.`);
      break;
  }
else console.log(chalk.red("Error!"));
