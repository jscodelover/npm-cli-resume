const inquirer = require("inquirer");
const chalk = require("chalk");
const resume = require("./resume.json");
const welcome = require("./welcome");

const resumeContextColor = chalk.bold.blueBright;
const responseFieldColor = chalk.bold.magentaBright;
const WelcomeMessage = "Hey developer, Welcome to my resume !!!!";

function main() {
  welcome();
  console.log(`\n ${resumeContextColor(WelcomeMessage)}\n`);
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
      if (resumeField === "Exit") {
        console.log(chalk.red("\nSee you soon!!"));
        return;
      }
      console.log("\n" + responseFieldColor(`${resumeField} :- `));
      resume[`${resumeField}`].forEach(content =>
        console.log(chalk.yellow.italic(content))
      );
      console.log(
        responseFieldColor(
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
