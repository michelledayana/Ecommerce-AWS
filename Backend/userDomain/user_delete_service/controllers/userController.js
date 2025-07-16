import User from '../models/user.js';

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleted = await User.destroy({ where: { id: userId } });
    if (deleted) {
      res.status(200).json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
