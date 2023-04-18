const database = require("../../db-config");

const getAll = () => {
  return database.query("Select * from album").then(([results]) => results);
};

const getById = (id) => {
  return database
    .query("Select * from album Where id = ?", id)
    .then(([results]) => results);
};

const create = (album) => {
  return database
    .query("Insert into album set ? ", album)
    .then(([results]) => results);
};

const edit = (id, body) => {
  return database
    .query("Update album set ? Where id = ?", [body, id])
    .then(([results]) => results);
};

const deleteAlb = (id) => {
  return database
    .query("Delete from album where id = ?", id)
    .then(([results]) => results);
};

module.exports = {
  getAll,
  getById,
  create,
  edit,
  deleteAlb,
};
