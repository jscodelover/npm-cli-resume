const inquirer = require("inquirer");
const chalk = require("chalk");
const resume = require("./resume.json");

const resumeContextColor = chalk.bold.whiteBright;
const responseFieldColor = chalk.bold.magentaBright;
const WelcomeMessage = "Hey developer, Welcome to my resume !!!!";

function main() {
  console.log(resumeContextColor(WelcomeMessage));
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
    .then(({ resumeField }) => {
      if (resumeField === "Exit") return;
      console.log(responseFieldColor(`${resumeField} :- `));
      resume[`${resumeField}`].forEach(content =>
        console.log(chalk.redBright.italic(content))
      );
      console.log(
        resumeContextColor(
          "________________________________________________________"
        )
      );
      console.log();
      inquirer
        .prompt({
          type: "list",
          message: "Go Back or Exit...",
          name: "returnOption",
          choices: ["Back", "Exit"]
        })
        .then(({ returnOption }) => {
          if (returnOption === "Exit") return;
          resumeHandler();
        });
    });
}

main();
