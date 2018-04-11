const express = require('express');
const pg = require('pg');
const PORT = 3000;

const app = express();
const connnString = "postgres://localhost:5432/cinema";

const client = new pg.Client(connnString);
client.connect();

app.use(express.static('./public'));

app.get('/actors', (request, response) => {
    
    client.query(`
        SELECT * FROM actors;
    `).then(result => {
        response.send(result.rows);
    })
});

app.get('/movies', (request, response) => {
    
    client.query(`
        SELECT * FROM movies;
    `).then(result => {
        response.send(result.rows);
    })
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));