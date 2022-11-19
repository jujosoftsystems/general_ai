
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
let ability_list = [{
    id: 1,
    skill_set: 'count'
},
{
    id: 2,
    skill_set: 'locate me'
}
];

// API routes**************
app.get('/', (req, res) => {
    res.send('---Welcome to Jujosoft AI API!---');
});

app.get('/api/games', (req, res) => {
    res.send(games);
});

app.get('/api/ability_list', (req, res) => {
    res.send(ability_list);
});

app.listen(port, () => {
    console.log(`App started on ${port}!`);
});





