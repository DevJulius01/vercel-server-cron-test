//require('dotenv').config()
const express = require('express');
const script = require('../utils/script');
const app = express();
const { ACCESS_KEY } = process.env


// Ruta para ejecutar la función asincrónica
app.get('/exec', (req, res) => {
    const acceso = req.query.access; // Obtener el valor del parámetro "acceso"

    // Verificar la seguridad con la llave de acceso
    if (acceso === ACCESS_KEY) {
        script()
        console.log("did it!")
    }
    else {
        res.status(403).send('Acceso no autorizado.');
    }
});

// Iniciar el servidor
const server = app.listen(3000, () => {
    console.log('Servidor en funcionamiento en el puerto 3000');
});

module.exports = app;