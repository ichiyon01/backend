const dbPool = require('../config/database');

const findAll = () => {
  const SQLQuery = 'SELECT * FROM products';
  return dbPool.execute(SQLQuery);
}

const findOneById = (id) => {
  const SQLQuery = 'SELECT * FROM products WHERE id = ?';
  return dbPool.execute(SQLQuery, [id]);
}

const createProduct = (name, image, url, address, price, desc, telp) => {
  const SQLQuery = 'INSERT INTO products (name, image, url, address, price, description, telephone) VALUES (?, ?, ?, ?, ?, ?, ?)';
  return dbPool.execute(SQLQuery, [name, image, url, address, price, desc, telp]);
}

const updateProductById = (id, name, image, url, address, price, desc, telp) => {
  const SQLQuery = 'UPDATE products SET name = ?, image = ?, url = ?, address = ?, price = ?, description = ?, telephone = ? WHERE id = ?';
  return dbPool.execute(SQLQuery, [name, image, url, address, price, desc, telp, id]);
}

const deleteProductById = (id) => {
  const SQLQuery = 'DELETE FROM products WHERE id = ?';
  return dbPool.execute(SQLQuery, [id]);
}

module.exports = {
  findAll,
  findOneById,
  createProduct,
  updateProductById,
  deleteProductById
};
