const inquirer = require("inquirer");
const chalk = require("chalk");
const terminalLink = require("terminal-link");
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
      resumeField !== "Exit" &&
        console.log("\n" + responseFieldColor(`${resumeField} :- \n`));
      switch (resumeField) {
        case "Exit":
          animation("See you soon...");
          return;
        case "Contact Me":
          Object.keys(resume["Contact Me"]).forEach(key => {
            console.log(
              chalk.yellow(
                `${terminalLink(`${key}: `, resume["Contact Me"][key])}`
              )
            );
          });
          break;
        default:
          resume[`${resumeField}`].forEach(content =>
            console.log(chalk.yellow(content))
          );
      }
      resumeField !== "Exit" &&
        console.log(
          responseFieldColor(
            "________________________________________________________\n"
          )
        );
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
