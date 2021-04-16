//- Exercici 1
// Creu un server amb express que retorni a una petició GET /user un json amb el seu nom, edat, i la url sol·licitada.
// Adjunti en l'exercici l'exportació del Postman corresponent.

// Create server
const http = require('http');
const server = http.createServer((req, res)=>{
    console.log("user hit the server");
    res.end("Thank you")
})

server.listen(5000);


// Create server with express
/* const express = require('express');
const app = express(); */