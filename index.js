const app = require("./utils/app");

// Iniciar el servidor
const server = app.listen(3000, () => {
    console.log('Servidor en funcionamiento en el puerto 3000');
});

module.exports = app;