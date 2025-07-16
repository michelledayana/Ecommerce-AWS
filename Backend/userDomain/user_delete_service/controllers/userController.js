import { deleteUserById } from '../services/userService.js';

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.status(200).json({ message: 'Usuario eliminado', user });
  } catch (error) {
    return res.status(500).json({ message: 'Error del servidor', error: error.message });
  }
};
