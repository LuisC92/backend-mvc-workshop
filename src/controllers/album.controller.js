const Album = require("../models/album.model");

const getAllAlbums = (req, res) => {
  Album.getAll()
    .then((results) => res.status(200).json(results))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving albums from db.");
    });
};

const getAlbumsById = (req, res) => {
  const { id } = req.params;
  Album.getById(id)
    .then((results) => {
      if (results.length) {
        res.status(200).send(results);
      } else {
        res.status(404).send(`No albums found with id: ${id}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving albums from db.");
    });
};

const createAlbum = (req, res) => {
  //   console.log(req.body);
  Album.create(req.body)
    .then((result) => {
      const createdAlbum = {
        id: result.insertId,
        title: req.body.title,
        genre: req.body.genre,
        picture: req.body.picture,
        artist: req.body.artist,
      };
      res.status(201).json(createdAlbum);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving albums from db.");
    });
};

const updateAlbum = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  Album.edit(id, body)
    .then((results) => {
      res.status(200).send("The album has been updated!");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving albums from db.");
    });
};

const deleteAlbum = (req, res) => {
  const { id } = req.params;
  Album.deleteAlb(id)
    .then((results) => {
      if (results.affectedRows) {
        res.status(202).send(`The album with id ${id} has been deleted!`);
      } else {
        res.status(404).send(`Album with id ${id} was not found`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving albums from db.");
    });
};

module.exports = {
  getAllAlbums,
  getAlbumsById,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};
