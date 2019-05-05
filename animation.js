const chalkAnimation = require("chalk-animation");

const animation = displayMessage => {
  const message = chalkAnimation.rainbow(`\n${displayMessage}\n`);
  setTimeout(() => {
    message.stop();
  }, 700);
};

module.exports = animation;
