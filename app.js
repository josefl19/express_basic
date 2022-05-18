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

// Respondiendo texto
// nueva ruta: localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a LaunchX')
});

// Regresando un objeto
// nueva ruta: localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorers = {name: "Explorer", msg: "Hello"}
    res.send(explorers)
});

// Query Params: Recibir parámetros por la URL
// http://localhost:3000/explorers/carlo
// req.params = {"explorerName":"carlo"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
});

// Inicializando la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});