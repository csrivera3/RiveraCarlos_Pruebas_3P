const express = require('express');
const app = express();
const PORT = process.env.PORT;

//Simular endpoint de respuesta
app.get('/', (req, res) => {
    res.send('Integracion continua funcionando correctamente');
    });
//Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});