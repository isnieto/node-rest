//- Exercici 1
// Creu un server amb express que retorni a una petició GET /user un json amb el seu nom, edat, i la url sol·licitada.
// Adjunti en l'exercici l'exportació del Postman corresponent.

/* 
const index ="<html><header><title>Node exercise</title></header><body><h1>Homepage</h1><p>Dat ist ein Test!</p></body></html>"
const about ="<html><header><title>ABOut me</title></header><body><h1>About us</h1><p>Here we talk about ourselves</p></body></html>"
 */

const { readFileSync } = require("fs");

const index = readFileSync( 'test.html');

// Create server
const http = require('http');
const server = http.createServer((req, res)=>{

    const url = req.url;
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(index);
        res.end();
    } else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("hola");
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write("Sorry, page not found");
        res.end();
    }
}) // end server

server.listen(5000);


// Create server with express
/* const express = require('express');
const app = express(); */