const express = require('express');

const trackRouter = express.Router();

const TrackController = require("../controllers/track.controller")

//* as a user, I want to be able to see all songs.
//* as a user, I want to list all the songs from an album.
trackRouter.get("/", TrackController.getAllTracks)

//* as a user, I want to create and assign a song to an album.
trackRouter.post("/", TrackController.createTrack)

//* as a user, I want to edit a song from an album.
trackRouter.put("/:id", TrackController.editTrack)

//* as a user, I want to delete a song.
trackRouter.delete("/:id", TrackController.deleteTrack)

module.exports = trackRouter