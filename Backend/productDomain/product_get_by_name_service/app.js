const express = require('express');
const app = express();
const productRoutes = require('./app/routes/productRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3018;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

//Test2
