import express from 'express';
import { deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.delete('/:userId', deleteUser);

export default router;

router.get('/:userId', (req, res) => {
  res.send(`Estás consultando usuario con ID: ${req.params.userId}`);
});