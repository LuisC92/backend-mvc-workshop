const database = require("../../db-config");

const getAll = () => {
  return database.query("Select * from track").then(([results]) => results);
};

const create = (body) => {
  return database
    .query("Insert into track set ?", body)
    .then(([results]) => results);
};

const getTracksByAlbum = (album) => {
  return database
    .query("Select * from track where id_album = ?", album)
    .then(([results]) => results);
};

const edit = (id, body) => {
  return database
    .query("Update track set ? where id = ?", [body, id])
    .then(([results]) => results);
};

const deleteSong = (id) => {
  return database
    .query("Delete from track where id = ?", id)
    .then(([results]) => results);
};

module.exports = {
  getAll,
  create,
  getTracksByAlbum,
  edit,
  deleteSong
};
