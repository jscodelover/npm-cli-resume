const inquirer = require("inquirer");
const chalk = require("chalk");

const resumeContext = chalk.bold.whiteBright;
const WelcomeMessage = "Hey developer, Welcome to my resume !!!!";

function main() {
  console.log(resumeContext(WelcomeMessage));
}

main();
