// Usando el objeto express
const express = require('express');

// App de Express
const app = express();

// Puerto en que se vera la app: localhost:3000
const port = 3000;

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hola mundo!')
});

// Inicializando la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});