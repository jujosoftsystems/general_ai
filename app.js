
/*
   Skeleton for future infrastructure...
   ------NODEJS API server----------
*/

// Use Express framework
const express = require('express');
const app = express();
const port = 8080;

// Call AI functions
const count_fun = require("./count.js");
const quotes_fun = require("./random_quotes.js");

const games = [
    {
        id: 1,
        title: 'Warstance'
    },
    {
        id: 2,
        title: 'Wordcramp'
    }
];
 
let ability_list = [
    {
        id: 1,
        skill_set: 'count'
    },
    {
        id: 2,
        skill_set: 'random quote'
    }
];


// API routes
app.get('/', (req, res) => {
    res.send('---Welcome to Jujosoft AI API!---');
});

app.get('/api/games', (req, res) => {
    res.send(games);
});

app.get('/api/ability_list', (req, res) => {
    res.send(ability_list);
});

app.get('/api/count_ability', (req, res) => {
    // Call URL Example: http://192.168.1.177:8080/api/count_ability?startcount=23&endcount=45
    let startcount = req.query.startcount;
    let endcount = req.query.endcount;
    
    res.send(count_fun.count( startcount, endcount));
});

app.get('/api/random_quote', (req, res) => {
    res.send(quotes_fun.random_quote());
});

// What port is running
app.listen(port, () => {
    console.log(`App started on ${port}!`);
});





