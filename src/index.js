const express = require('express');
const cors = require('cors');
const itemRoutes = require('./routes/items');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto ' + PORT);
});