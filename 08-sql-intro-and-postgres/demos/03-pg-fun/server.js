'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const pg = require('pg');

// WARNING: Database must exist - so run CREATE DATABASE whatever; from psql shell as needed
// NOTE: connectionString structure different for Unix/Windows
const connectionString = 'postgres://localhost:5432/users';
const client = new pg.Client(connectionString);
client.connect();

const app = express();

createTable(); // creates users table as needed

app.get('/users', (request, response) => {
    client.query(`
        SELECT * FROM users;
    `).then(result => response.send(result.rows));
});

app.post('/users', express.urlencoded({extended: true}), (request, response) => {

    const { name, age, ninja } = request.body; // whoah, that's cool. Break onto separate lines if you like

    client.query(`
        INSERT INTO users (name, age, ninja) VALUES ('${name}',${age}, ${ninja});
    `).then(result => response.send(result));
});

app.put('/users', express.urlencoded({extended: true}), (request, response) => {
    // just send body back until SQL query written
    response.send(request.body);
});

app.delete('/users/:id', (request, response) => {
    // what's the :id about? We'll talk about it soon
    response.send('delete coming soon ' + request.params.id);
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));

////// Create database table helper function //////
function createTable() {
    
    // NOTE: in this case the table name 'users' is same as Database name 'users' 
    // but they are different things and need not match

    client.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        age INTEGER,
        ninja BOOLEAN
      );`)
        .then(function (response) {
            console.log(response)
        })
}