const dbPool = require('../config/database');

const findAll = () => {
  const SQLQuery = 'SELECT uuid, name, email, role FROM users';
  return dbPool.execute(SQLQuery);
}

const findOneByUUID = (uuid) => {
  const SQLQuery = 'SELECT uuid, name, email, role FROM users WHERE uuid = ?';
  return dbPool.execute(SQLQuery, [uuid]);
}

const createUser = (name, email, password, role) => {
  const SQLQuery = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
  return dbPool.execute(SQLQuery, [name, email, password, role]);
}

const updateUserByUUID = (uuid, name, email, password, role) => {
  const SQLQuery = 'UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE uuid = ?';
  return dbPool.execute(SQLQuery, [name, email, password, role, uuid]);
}

const deleteUserByUUID = (uuid) => {
  const SQLQuery = 'DELETE FROM users WHERE uuid = ?';
  return dbPool.execute(SQLQuery, [uuid]);
}

module.exports = {
  findAll,
  findOneByUUID,
  createUser,
  updateUserByUUID,
  deleteUserByUUID
};
