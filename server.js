// Load modules and Create server with express
// directly invocked: const app = require('express')();
const path = require('path')
const express = require('express');
const app = express();

//- Exercici 1
// Creu un server amb express que retorni a una petició GET /user un json amb el seu nom, edat, i la url sol·licitada.
// Adjunti en l'exercici l'exportació del Postman corresponent.

const requrl = path.join(__dirname + '/');

app.get('/user', (req, res) => { 
    res.status(200).json({user: "Ismael", age: 18, url: requrl})
    //res.send("Testing");
})

// - Exercici 1
//Afegeixi una pàgina de index.html visualizable que redirigeixi a una altra about.html
app.get('/', (req, res) => { 
    res.status(200).sendFile(path.join(__dirname + '/index.html'));
})// 

app.get('/about.html', (req, res) => { 
    res.status(200).sendFile(path.join(__dirname + '/about.html'));
})// 
// Exercici 2
// Executi el punt anterior utilitzant hbs (https://www.npmjs.com/package/hbs)

// Nivell 3
// Exercici 1: Afegeixi un endpoint /upload per a pujar un fitxer al servidor de tipus png, jpg o gif i 
// retorni un missatge d'error en cas que no coincideixi amb aquestes extensions



// all() for whatever ressource is needed to be access
app.all('*', (req, res) => {
    res.status(404).send("<h1>Sorry, no page found</h1>")
})

app.listen(5000, () => {
    console.log("Server listeing on port 5000")
})