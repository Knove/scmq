const chalk = require('chalk');

function showList(configData){
    // show Time
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
    // group check
    const group = configData.group;
    if (group && group.length > 0) {
        console.log(chalk.magenta('              [ CONFIG LIST ]'));
        console.log(chalk.blue('———————————————————————————————————————————————'));
        let i = 0;
        group.map( item => {
            i ++;
            console.log(chalk.red.bgWhite('----[Group '+ i +']-----'));
            console.log(chalk.yellow('Title: ' + item.title));
            if (item.group && item.group.length > 0) {
            let j = 0;
            item.group.map( item => {
                j ++;
                console.log(chalk.blue('  > · [Project '+ j +']'));
                console.log(chalk.yellow('  Title:' + item.title));
                console.log(chalk.yellow('  Dir:' + item.dir));
                console.log(chalk.yellow('  Command:' + item.comd));
            });
            } else console.log(chalk.yellow('Group: <  >'));
        })
        console.log(chalk.red.bgWhite('------------------'));
        const nowSelection = configData.use || group[0].title;
        console.log("Group you config is => " + chalk.bgBlue(nowSelection));
    } else console.log('sorry, you are not configured at the moment, please bind "scmq add <>" to add a group.');
    console.log(chalk.blue('———————————————————————————————————————————————'));
}

exports = module.exports = showList;