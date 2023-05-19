const http = require('http');

const server = http.createServer((request, response) => {
    // Capturando la URL de la solicitud
    const url = new URL(request.url, `http://${request.headers.host}/api/script`);

    // Capturando un parámetro específico llamado "param"
    const paramValue = url.searchParams.get('param');

    // Enviando el valor del parámetro como respuesta
    response.end(`El valor del parámetro es: ${paramValue}`);
    if (paramValue === process.env.TOKEN) server.close(() => { console.log('servidor detenido') })
});

server.listen(3000, () => {
    console.log('Servidor en funcionamiento en el puerto 3000');
});