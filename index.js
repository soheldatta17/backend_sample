const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle GET requests at '/'
app.get('/', (req, res) => {
    res.send('Hi this is a back-end server deployed by Sohel to save the form details. You need an API key to continue...!');
});

// Route to handle GET requests at '/hello'
app.get('/hello', (req, res) => {
    res.send('hello world');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
