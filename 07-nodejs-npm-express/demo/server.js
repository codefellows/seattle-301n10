// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = 3000;

app.get('/ping', (request, response) => {
    response.send({type:'ball!'});
})

// Define which directory we will serve files from
app.use(express.static('public'));

// Here is one way to set up a route... bats...
app.get('/bats', (request, response) => {
    response.sendFile('bats.png', {root: './public/imgs'});
});

// Here is our sneaky secret 'weasels' route...
app.get('/private-text', (request, response) => {
    response.sendFile('private.txt', {root:'./private'});
});



// Let's 404 everything except for our routes and index.html ( or other stuff in public )
app.use((request, response) => {
    response.sendFile('404.html', {root: './public'})
});


// Now let's tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log('Listening on PORT', PORT));
