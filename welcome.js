const CFonts = require("cfonts");

const welcome = () => {
  CFonts.say("Manisha|Basra", {
    font: "block",
    align: "left",
    colors: ["#f3702f"],
    background: "transparent",
    letterSpacing: 2,
    lineHeight: 2,
    space: true,
    maxLength: "0"
  });
};

module.exports = welcome;
