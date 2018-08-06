const chalk = require('chalk');

function showConfig(dir1, dir2, kYype, ip){
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
    console.log(chalk.magenta('【CONFIG】'));
    console.log('dir1: ');
    console.log(dir1.split('=')[1] || '<   >');
    console.log('dir2: ');
    console.log(dir2.split('=')[1] || '<   >');
    console.log('ip: ');
    console.log(ip.split('=')[1] || '<   >');
    console.log('type: ');
    console.log(chalk.bgWhite.red(kYype.split('=')[1]));
    console.log(chalk.blue('———————————————————————————————————————————————'));
}

exports = module.exports = showConfig;