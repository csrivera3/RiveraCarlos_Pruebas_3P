const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simular endpoint de respuesta
app.get('/', (req, res) => {
  res.send('Integración continua funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
