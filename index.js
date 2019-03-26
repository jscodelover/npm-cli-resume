const inquirer = require("inquirer");
const chalk = require("chalk");
const resume = require("./resume.json");

const resumeContext = chalk.bold.whiteBright;
const WelcomeMessage = "Hey developer, Welcome to my resume !!!!";

function main() {
  console.log(resumeContext(WelcomeMessage));
  resumeHandler();
}

function resumeHandler() {
  inquirer
    .prompt({
      type: "list",
      message: "What do you want know about me?",
      name: "resumeField",
      choices: [...Object.keys(resume), "Exit"]
    })
    .then(answers => {
      console.log(answers);
    });
}

main();
