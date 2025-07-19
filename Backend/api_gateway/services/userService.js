const axios = require('axios');
require('dotenv').config();

exports.createUser = async (req, res) => {
  try {
    const response = await axios.post(`${process.env.USER_CREATE_URL}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error creating user' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const response = await axios.put(`${process.env.USER_UPDATE_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error updating user' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const response = await axios.delete(`${process.env.USER_DELETE_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error deleting user' });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.USER_LIST_URL}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error listing users' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.USER_GET_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error getting user' });
  }
};
