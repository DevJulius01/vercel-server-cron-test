
async function script() {
    // Lógica de la función asincrónica
    console.log('Ejecutando función...');
    // Simulando una tarea asincrónica
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Función finalizada.');
}

module.exports = script;