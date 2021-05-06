// Load modules and Create server with express
// directly invocked: const app = require('express')();
// Express

const express = require("express");
const path = require("path");
const hbs = require("hbs");
const multer = require("multer");

// Initialize app and set port
const app = express();
const port = 5000;

app.use(express.static(__dirname + "/public"));

// Hbs
app.set("view engine", hbs);
app.engine("html", require("hbs").__express);
app.set("views", __dirname + "/views");

//- Exercici 1
// Creu un server amb express que retorni a una petició GET /user un json amb el seu nom, edat, i la url sol·licitada.
// Adjunti en l'exercici l'exportació del Postman corresponent.

app.get("/user", (req, res) => {
  const url = req.url;
  res.status(200).json({ user: "Ismael", age: 18, url: url });
});

// - Exercici 1
//Afegeixi una pàgina de index.html visualizable que redirigeixi a una altra about.html
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/public/index.html"));
}); //

app.get("/about.html", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/public/about.html"));
});

/// Exercici 2
// Executi el punt anterior utilitzant hbs (https://www.npmjs.com/package/hbs)
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500.";

app.get("/hbs/", (req, res) => {
  res.render("index.hbs", {
    title: "Index with hbs module",
    contentHeader: "Index Header",
    paragraph: text,
    link: "/hbs/about.hbs",
  });
});

app.get("/hbs/about.hbs", (req, res) => {
  res.render("index.hbs", {
    title: "About site with hbs module",
    contentHeader: "Back to Index",
    paragraph: text,
    link: "/hbs/",
  });
}); //

// Nivell 3
// Exercici 1: Afegeixi un endpoint /upload per a pujar un fitxer al servidor de tipus png, jpg o gif i
// retorni un missatge d'error en cas que no coincideixi amb aquestes extensions

// Setup Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Destination where the files should be stored on disk
    cb(null, "uploads/");
  }
})

const uploadFileFilter = (req, file, cb) => {
  if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
      cb(null, true);
  } else{
      cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: uploadFileFilter, }).single('myFile');

app.post('/upload', upload, (req, res) => {
  const file = req.file
  if (!file) {
    res.status(400).send("Please upload a file!");
  }
  res.send(file)
  
})





// Rest of routes not accesible
app.all("*", (req, res) => {
  res.status(404).send("<h1>Sorry, no page found</h1>");
});

app.listen(port, () => {
  console.log("Server listeing on port 5000");
});
