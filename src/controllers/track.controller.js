const Track = require("../models/track.model");

const getAllTracks = (req, res) => {
  if (req.query.album) {
    const { album } = req.query;
    Track.getTracksByAlbum(album)
      .then((results) => {
        if (results !== null && results.length > 0) {
          res.status(200).send(results);
        } else {
          res.status(404).send(`Tracks from album ${album} not found`);
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error retrieving tracks from db.");
      });
  } else {
    Track.getAll()
      .then((results) => {
        if (results !== null && results.length > 0) {
          res.status(200).send(results);
        } else {
          res.status(404).send("Tracks not found");
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error retrieving tracks from db.");
      });
  }
};

const createTrack = (req, res) => {
  Track.create(req.body)
    .then((result) => {
      const createdTrack = {
        id: result.insertId,
        id_album: req.body.id_album,
        title: req.body.title,
        youtube_url: req.body.youtube_url,
      };
      res.status(201).json(createdTrack);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving tracks from db.");
    });
};

const editTrack = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  Track.edit(id, body)
    .then((result) => {
      res.status(200).send(`track with id ${id} successfully updated.`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving tracks from db.");
    });
};

const deleteTrack = (req, res) => {
  const { id } = req.params;
  Track.deleteSong(id)
    .then((results) => {
      if (results.affectedRows) {
        res.status(202).send(`The track with id ${id} has been deleted!`);
      } else {
        res.status(404).send(`Track with id ${id} was not found`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving tracks from db.");
    });
};

module.exports = {
  getAllTracks,
  createTrack,
  editTrack,
  deleteTrack,
};
