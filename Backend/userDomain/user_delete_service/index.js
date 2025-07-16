import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3012;

app.use(express.json());
app.use(userRoutes);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Conectado a PostgreSQL`);
  } catch (error) {
    console.error('Error conectando a la base de datos:', error.message);
  }
  console.log(`Microservicio User Delete ejecutándose en http://localhost:${PORT}`);
});
