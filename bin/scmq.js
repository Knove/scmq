#!/usr/bin/env node

// global package
const chalk = require('chalk');
const fs = require("fs");
const readline = require('readline');
// private package
const saveConfig = require("../src/saveConfig");
const run = require("../src/run");
// config data
const script = process.argv[2];
const data = fs.readFileSync('config.txt');
const dir1 = data.toString().split('\n')[0];
const dir2 = data.toString().split('\n')[1];
const kYype = data.toString().split('\n')[2];
// global data
const flag = true;

console.log(chalk.blue(''));
console.log(chalk.blue('                    :||||||||||%%%%%%$&@##@@$||||%%%$@@@@@#|      .":`  '));
console.log(chalk.blue('       .":;;:"`":;|&###@$$$%$&&@277@@###&|!!!!!!!|%%&@@@@@@@@@##@@@@@&:::::     '));
console.log(chalk.blue('!!::::::""::;!|%$%|$#####@@#@@###@@@$%|!%%%%|;;:"`.     '));
console.log(chalk.blue(':|;;;!!||||%%%$|:.  "|!||:` "$&&&&@&:       '));
console.log(chalk.blue('"||%$$$$$$!`        ;$%!` ..   ;@@@@%`        '));
console.log(chalk.blue('`%&$!"             ;$$!.       .|@@@@%`       SCMQ '+ require('../package.json').version +'   '));
console.log(chalk.blue('                  "%$$:         `%@@@@&;      By Knove        '));
console.log(chalk.blue('                                  !@@@@@&;      '));
console.log(chalk.blue('                                   "$@@&&&;   '));
console.log(chalk.blue('                                     .|@$"    '));
console.log(chalk.blue('———————————————————————————————————————————————'));

if (flag)
switch (script) {
    case '-v':
    case '--version':
      console.log('SCMQ V' + require('../package.json').version);
      break;
    case 'config-set':
      // save config info
      saveConfig(process.argv[3],process.argv[4], dir1, dir2, kYype); 
      break;
    case 'help':
    case '-help':
    case '-h':
    case 'h':
      // help
      console.log(chalk.blue(':D pls go : https://github.com/KnoveZ/scmq  see some API '));
      break;
    case 'go':
      // start
      const  rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
      });
      rl.question(chalk.whiteBright('Go? (Press N stop)'), function(answer) {
          if (answer === 'N' || answer === 'n' ) console.log('Bye!');
          else {
            run(dir1.split('=')[1], dir2.split('=')[1], kYype.split('=')[1]);
          }   
          rl.close();
    });
      break;
    case 'config':
      console.log(chalk.magenta('【CONFIG】'));
      console.log('DIR - 1 : ');
      console.log(dir1.split('=')[1] || '<   >');
      console.log('DIR - 2 : ');
      console.log(dir2.split('=')[1] || '<   >');
      console.log('TYPE : ');
      console.log(chalk.bgWhite.red(kYype.split('=')[1]) + ' eg. dev,tst,test');
      console.log(chalk.blue('———————————————————————————————————————————————'));
      break;
    default:
      console.log(`unkown script ${chalk.cyan(script)}.`);
      break;
  }
  else console.log(chalk.red('Error!'));