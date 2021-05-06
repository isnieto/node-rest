// Setting route controllers for all endpoint of th app

const path = require("path");




const uploadController = require("../controller/upload.js");
const templateController = require("../controller/hbs_templates.js");

module.exports = (app) => {

  // Return data
  app.get("/user", (req, res) => {
    const url = req.url;
    res.status(200).json({ user: "Ismael", age: 18, url: url });
  });

  // Statics sites
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/public/index.html"));
  }); //

  app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/public/about.html"));
  });

  // HBS template
  app.get("/hbs/", templateController.indexSite);

  app.get("/hbs/about.hbs", templateController.aboutSite);

  // Upload a file  a new player
  app.post("/upload", uploadController, (req, res) => {
    const file = req.file;
    if (!file) {
      res.status(400).send("Please upload a file!");
    }
    res.send(file);
  });

  // Rest of routes not accesible
  app.all("*", (req, res) => {
    res.status(404).json({ message: "Sorry, this page is not available" });
  });
};
