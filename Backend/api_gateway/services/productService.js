const axios = require('axios');
require('dotenv').config();

exports.createProduct = async (req, res) => {
  try {
    const response = await axios.post(`${process.env.PRODUCT_CREATE_URL}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error creating product' });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.PRODUCT_LIST_URL}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error listing products' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.PRODUCT_GET_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error getting product' });
  }
};

exports.updateProductByName = async (req, res) => {
  try {
    const response = await axios.put(`${process.env.PRODUCT_UPDATE_URL}?name=${req.params.name}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error updating product' });
  }
};

exports.deleteProductByName = async (req, res) => {
  try {
    const response = await axios.delete(`${process.env.PRODUCT_DELETE_URL}/${req.params.name}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Error deleting product' });
  }
};
