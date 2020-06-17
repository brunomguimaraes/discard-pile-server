import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('User List!');

    // JSON

    response.json([
        'Xabaluria',
        'Laruxa',
        'Bruxonilda',
        'Ryu'
    ]);
});

app.listen(3333);