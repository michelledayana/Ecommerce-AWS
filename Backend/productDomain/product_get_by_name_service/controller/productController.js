const pool = require('../database/connection');

const getProductsByName = async (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery) {
    return res.status(400).json({ message: "Query parameter 'name' is required" });
  }

  try {
    const result = await pool.query(
      `SELECT * FROM products WHERE LOWER(name) LIKE LOWER($1)`,
      [`%${nameQuery}%`]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products by name:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getProductsByName };
