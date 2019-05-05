const inquirer = require("inquirer");
const chalk = require("chalk");
const resume = require("./data/resume.json");
const welcome = require("./welcome");
const animation = require("./animation");

const resumeContextColor = chalk.bold.underline.blueBright;
const responseFieldColor = chalk.bold.magentaBright;
const WelcomeMessage = "Hey developer, Welcome to my resume !!!!";

function main() {
  welcome();
  animation(WelcomeMessage);
  setTimeout(() => {
    resumeHandler();
  }, 750);
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
        animation("See you soon...");
        return;
      }
      console.log("\n" + responseFieldColor(`${resumeField} :- \n`));
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
          if (returnOption === "Exit") {
            animation("See you soon...");
            return;
          }
          resumeHandler();
        });
    });
}

main();
