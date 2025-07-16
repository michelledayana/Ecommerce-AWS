import User from '../models/user.js';

export const deleteUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.destroy();
  return user;
};
