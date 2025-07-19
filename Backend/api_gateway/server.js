const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
