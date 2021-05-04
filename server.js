// Load modules and Create server with express
// directly invocked: const app = require('express')();
const path = require('path')
const express = require('express');
const app = express();

//- Exercici 1
// Creu un server amb express que retorni a una petició GET /user un json amb el seu nom, edat, i la url sol·licitada.
// Adjunti en l'exercici l'exportació del Postman corresponent.



app.get('/user', (req, res) => { 
    const url = req.url
    res.status(200).json({user: "Ismael", age: 18, url: url})
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

app.get('/upload', (req, res) => { 
    res.status(200).sendFile(path.join(__dirname + '/index.html'));
})



// Para el resto no disponisble
app.all('*', (req, res) => {
    res.status(404).send("<h1>Sorry, no page found</h1>")
})

app.listen(5000, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})