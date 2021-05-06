// Load hbs template
const hbs = require("hbs");
/// Exercici 2
// Executi el punt anterior utilitzant hbs (https://www.npmjs.com/package/hbs)

const templateHbs = (() => {
  let text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500.";

  return {
    indexSite: (req, res) => {
      res.render("index.hbs", {
        title: "Index with hbs module",
        contentHeader: "Index Header",
        paragraph: text,
        link: "/hbs/about.hbs",
      });
    },

    aboutSite: (req, res) => {
      res.render("index.hbs", {
        title: "About site with hbs module",
        contentHeader: "Back to Index",
        paragraph: text,
        link: "/hbs/",
      });
    },
  };
})();

module.exports = templateHbs;
