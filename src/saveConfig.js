const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

function saveConfig(dir, text, dir1, dir2, kYype, ip) {
  let writeText = "";
  if (text.indexOf("http://") < 0 && dir === "ip" && text) text = "http://" + text;
  dir === "dir1" ? (writeText += "dir1=" + text) : (writeText += dir1);
  writeText += "\n";
  dir === "dir2" ? (writeText += "dir2=" + text) : (writeText += dir2);
  writeText += "\n";
  dir === "type" ? (writeText += "type=" + text) : (writeText += kYype);
  writeText += "\n";
  dir === "ip" ? (writeText += "ip=" + text) : (writeText += ip);
  writeText += "\n";
  if (text)
    fs.writeFile(path.join(__dirname, "../config.txt"), writeText, function(
      err
    ) {
      if (err) {
        return console.error(err);
      }
      console.log("write Config " + chalk.blue(dir) + " success!");
    });
  else console.log("please input value!");
}

exports = module.exports = saveConfig;
