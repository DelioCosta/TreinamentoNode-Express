const express = require('express');

const app = express();

const porta = 3000;

// app.get('/', (req, res) =>{
//     res.send(req.query);
// });

app.get('/:name?', (req, res) =>{
    const {name} = req.params;

    res.send(`Hello ${name || "world!"}`);
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}`);
});