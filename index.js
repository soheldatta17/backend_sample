const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// List of football facts
const footballFacts = [
    "Football is also known as soccer in some parts of the world.",
    "The first football club was formed in 1857, called Sheffield FC.",
    "The FIFA World Cup is the most-watched sporting event in the world.",
    "Pele is the only player to have won three FIFA World Cups.",
    "The fastest goal in World Cup history was scored by Hakan Şükür in 11 seconds.",
    "Lionel Messi and Cristiano Ronaldo are considered two of the greatest players of all time.",
    "The 2022 FIFA World Cup was held in Qatar.",
    "The Premier League is the most-watched football league globally.",
    "The term 'hat-trick' refers to a player scoring three goals in a single game.",
    "The first official football rules were codified by the Cambridge Rules in 1848."
];

// Route to handle GET requests at '/'
app.get('/', (req, res) => {
    res.send('Hi this is a back-end server deployed by Sohel to save the form details. You need an API key to continue...!');
});

// Route to handle GET requests at '/hello'
app.get('/hello', (req, res) => {
    res.send('hello world');
});

// Route to handle GET requests at '/facts'
app.get('/facts', (req, res) => {
    res.json(footballFacts);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
