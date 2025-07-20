import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import routes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Ruta raíz para test básico
app.get('/', (req, res) => {
  res.send('Microservicio User Delete activo');
});

app.use('/users', routes);

const PORT = 3012;
app.listen(PORT, () => {
  console.log(`Microservicio User Delete ejecutándose en http://localhost:${PORT}`);
});
