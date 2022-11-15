
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

// API routes**************
app.get('/', (req, res) => {
    res.send('---Welcome to Jujosoft AI API!---');
});

app.get('/api/games', (req, res) => {
    res.send(games);
});

app.listen(port, () => {
    console.log(`App started on ${port}!`);
});





