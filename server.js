const express = require('express');
const app = express();
const port = 3000;

//////////// phase 1
app.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <h2>99 Bottles of beer on the wall...</h2> <br
            <h3><a href="/98">Take one down, pass it around</a><h3>
        </body>
    </html>`);
});

//////////// phase 2
app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles > 0) {
        res.send(`
    <html>
        <body>
            <h2>${req.params.number_of_bottles} Bottles of beer on the wall...</h2> <br
            <h3><a href="/${req.params.number_of_bottles - 1}">Take one down, pass it around</a><h3>
        </body>
    </html>`);
        //////////// phase 3
    } else
        res.send(`
    <html>
        <body>
            <h2>Beer run...</h2> <br
            <h3><a href="/99">Nose goes!</a><h3>
        </body>
    </html>`);
});

app.listen(port, () => {
    console.log('listening on port', port);
});