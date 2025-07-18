const pool = require('../database/connection');

const getProductsByName = async (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery) {
    return res.status(400).json({ message: "Query parameter 'name' is required" });
  }

  try {
    console.log(`Buscando productos con nombre parecido a: %${nameQuery}%`);
    const result = await pool.query(
      `SELECT * FROM products WHERE LOWER(name) LIKE LOWER($1)`,
      [`%${nameQuery}%`]
    );
    console.log('Resultado de la consulta:', result.rows);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.json(result.rows);
  } catch (error) {
    console.error('Error en consulta:', error);  // Muestra detalle completo del error en consola
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getProductsByName };
