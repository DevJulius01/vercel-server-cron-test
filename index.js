const app = require("./api/app");

// Iniciar el servidor
const server = app.listen(3000, () => {
    console.log('Servidor en funcionamiento en el puerto 3000');
});