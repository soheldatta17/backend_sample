const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// List of 100 football facts
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
    "The first official football rules were codified by the Cambridge Rules in 1848.",
    "The first World Cup was held in 1930 and won by Uruguay.",
    "The only World Cup that was not held due to war was in 1942 and 1946.",
    "Brazil has won the most World Cups, with a total of 5 titles.",
    "The record for the most goals scored in a single World Cup is held by Just Fontaine of France, who scored 13 goals in 1958.",
    "The first football match was played in 1869 between Rutgers and Princeton.",
    "The largest football stadium in the world is the Rungrado 1st of May Stadium in Pyongyang, North Korea.",
    "The FIFA World Cup trophy is made of 18-carat gold.",
    "The highest-scoring football match was AS Adema 149–0 SO l’Emyrne, played on October 31, 2002.",
    "The shortest football match lasted only 2 seconds, between Start and Tele in 2011.",
    "The most red cards in a single football match is 36, in a game between Claypole and Victoriano Arenas in Argentina.",
    "The most expensive transfer in football history was Neymar's move from Barcelona to Paris Saint-Germain in 2017 for €222 million.",
    "The first live TV broadcast of a football match was in 1937, featuring Arsenal and Arsenal Reserves.",
    "Diego Maradona's 'Hand of God' goal was scored in the 1986 World Cup quarter-final against England.",
    "The first player to score a hat-trick in a World Cup final was Geoff Hurst of England in 1966.",
    "The first Women's World Cup was held in 1991, and the United States won the tournament.",
    "The largest margin of victory in an international football match was 31-0, by Australia against American Samoa in 2001.",
    "The term 'Soccer' originated from an abbreviation of the word 'Association' in 'Association Football'.",
    "Cristiano Ronaldo became the first footballer to reach 500 million followers across social media platforms.",
    "The 2026 FIFA World Cup will be hosted by the United States, Canada, and Mexico.",
    "Football is the most popular sport in the world, with an estimated 4 billion fans.",
    "The Ballon d'Or is awarded annually to the best male footballer in the world.",
    "The first Ballon d'Or was awarded to Stanley Matthews of Blackpool in 1956.",
    "Marta of Brazil is the only player to have won the FIFA World Player of the Year award six times.",
    "The 'Golden Goal' rule was first introduced in 1993 but was abolished in 2004.",
    "The Premier League was founded in 1992.",
    "The Champions League is the most prestigious club competition in European football.",
    "Real Madrid has won the most Champions League titles, with 13 victories.",
    "The offside rule was introduced in 1863.",
    "The 'Magic Sponge' is a term used for the treatment of minor injuries in football.",
    "The FA Cup is the oldest football competition in the world, first held in 1871.",
    "The 'Derby' match refers to games played between two local rivals.",
    "A 'Nutmeg' is when a player kicks the ball through an opponent's legs.",
    "Football boots with studs were invented by Adolf Dassler, founder of Adidas.",
    "In 2005, Australia switched from the Oceania Football Confederation to the Asian Football Confederation.",
    "The most goals scored in a single World Cup tournament by a team is 27 by Hungary in 1954.",
    "The only goalkeeper to have won the Ballon d'Or is Lev Yashin of the Soviet Union.",
    "The first World Cup to use VAR (Video Assistant Referee) was in 2018.",
    "The FIFA World Cup trophy weighs 6.1 kilograms.",
    "The highest attendance for a football match is 199,854, in a game between Brazil and Uruguay in 1950.",
    "The original World Cup trophy, the Jules Rimet Trophy, was stolen in 1983 and never recovered.",
    "The FIFA Puskás Award is given for the most beautiful goal of the year.",
    "A 'Bicycle Kick' is an acrobatic strike where a player kicks an airborne ball backward over their own head.",
    "The maximum number of substitutions allowed in a football match is 5.",
    "The World Cup was first broadcast in color in 1970.",
    "The 'Panenka' penalty is named after Antonín Panenka, who used the technique in the 1976 European Championship final.",
    "The most goals scored by a player in a single World Cup match is 5, by Oleg Salenko of Russia in 1994.",
    "Footballers typically run an average of 10 kilometers per match.",
    "The term 'Tiki-taka' is used to describe a style of play characterized by short passing and movement.",
    "The record for the most consecutive World Cup matches scored in is held by Ronaldo of Brazil, with 11 goals.",
    "The Maracanã Stadium in Brazil is one of the most iconic football stadiums in the world.",
    "The FIFA Women's World Cup is held every four years, just like the men's tournament.",
    "The most goals scored in a Premier League season by a single player is 32, by Mohamed Salah.",
    "The only African country to reach the World Cup quarter-finals is Cameroon, in 1990.",
    "The record for the fastest red card in World Cup history is 56 seconds, by José Batista of Uruguay in 1986.",
    "The World Cup trophy is insured for $50,000.",
    "The first World Cup to feature 32 teams was in France in 1998.",
    "A 'Hat-trick' in football means scoring three goals in a single match.",
    "The longest unbeaten run in international football is 37 matches, held by Italy.",
    "The first penalty shootout in World Cup history was in 1982.",
    "The World Cup has been won by only 8 different countries.",
    "The only player to score in every round of the World Cup, including the final, is Jairzinho of Brazil in 1970.",
    "The youngest player to play in a World Cup match is Norman Whiteside of Northern Ireland, aged 17 years and 41 days.",
    "The highest-scoring World Cup final was in 1958, where Brazil beat Sweden 5-2.",
    "The first World Cup to use goal-line technology was in 2014.",
    "The most goals scored in a single World Cup by a player is 13, by Just Fontaine in 1958.",
    "The first goal in World Cup history was scored by Lucien Laurent of France in 1930.",
    "The 'Scorpion Kick' is a famous save made by Colombian goalkeeper René Higuita.",
    "The first African team to reach the World Cup quarter-finals was Cameroon in 1990.",
    "The most goals scored in a single Premier League season by a team is 106, by Manchester City in 2017-18.",
    "The oldest player to score in a World Cup match is Roger Milla of Cameroon, aged 42 years and 39 days.",
    "The only country to have played in every World Cup is Brazil.",
    "The record for the most goals scored in a single World Cup final is held by Geoff Hurst, with 3 goals in 1966.",
    "The highest attendance for a World Cup match is 173,850, in the final of the 1950 World Cup.",
    "The 'Golden Boot' is awarded to the top scorer in the World Cup.",
    "The first Women's World Cup final to be decided by a penalty shootout was in 1999.",
    "The first goal scored in the Premier League was by Brian Deane of Sheffield United.",
    "The record for the most goals scored in a single international match is 31, by Australia against American Samoa in 2001.",
    "The only player to win the World Cup as both player and manager is Mário Zagallo of Brazil.",
    "The most goals scored in a single Champions League season by a player is 17, by Cristiano Ronaldo.",
    "The 'Treble' is the term used when a club wins three major trophies in a single season.",
    "The first World Cup to be held in multiple countries will be in 2026.",
    "The most yellow cards in a single World Cup match is 16, in a game between Portugal and the Netherlands in 2006.",
    "The only player to have won the Ballon d'Or, World Cup, and Champions League in the same year is Zinedine Zidane.",
    "The most goals scored in a single Bundesliga season by a player is 40, by Gerd Müller.",
    "The first player to score in four different World Cups is Uwe Seeler of Germany.",
    "The 'Wall of Fame' at the Maracanã Stadium features footprints of legendary footballers.",
    "The most goals scored in a single Serie A season by a team is 125, by Torino in 1947-48."
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
    const randomFact = footballFacts[Math.floor(Math.random() * footballFacts.length)];
    res.json({ fact: randomFact });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
