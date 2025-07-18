const express = require('express');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3022;

app.use(express.json());
app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`product-get-by-name-service running on port ${PORT}`);
});
