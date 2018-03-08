'use strict';
// Vinicio - This file is the controller of the application

// Load the express library from node_modules
const express = require('express');
// Instantiate express so we can use its functionality
const app = express();

// Designate a port to serve our app on
// "process" is in the Node environment, use a port if it is set up, or set your own
const PORT = process.env.PORT || 3000;

// Tell the server which directory to serve files from
app.use(express.static('./public'));

// Set up a route to send a message
app.get('/message', (request,response) => {
    console.log('Sir gregor is cute too!!');
    // Vinicio - .send is acting as the view
    response.send('<h1>The hound is <strong>cute</strong>!!</h1>');
});

// Set up a route to send a file
// app.get('/hound',(request,response) => {
//     console.log('NOTHING!!!');
// });
app.get('/hound-is-cute',(request,response) => {
    console.log();// vinicio - this is the controller
    response.sendFile('/public/hound-v2.html',{root: '.'});
    // vinicio - this is the controller
});

app.get('/hound',(request,response) => {
    console.log();// vinicio - this is the controller
    response.sendFile('/public/hound-v2.html',{root: '.'});
    // vinicio - this is the controller
});

// Can we perform other methods on the same route?
app.post('/hound',(request,response) => {

});

// Start the app so it listens for changes

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));