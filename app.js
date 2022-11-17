
/*
   Skeleton for future infrastructure...
*/

// API server**************
const express = require('express');
const app = express();
const port = 8080;

const games = [{
    id: 1,
    title: 'Warstance'
},
{
    id: 2,
    title: 'Wordcramp'
}
];

// New idea for AI 
let ability = [{
    id: 1,
    skill_set: 'count'
},
{
    id: 2,
    skill_set: 'where are you?'
}
];

// API routes**************
app.get('/', (req, res) => {
    res.send('---Welcome to Jujosoft AI API!---');
});

app.get('/api/games', (req, res) => {
    res.send(games);
});

app.get('/api/ability', (req, res) => {
    res.send(ability);
});

app.listen(port, () => {
    console.log(`App started on ${port}!`);
});





