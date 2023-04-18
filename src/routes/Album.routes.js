const express = require("express")
const AlbumController = require("../controllers/album.controller")
const albumRouter = express.Router()

//* as a user, I want to be able to see all albums.
albumRouter.get("/",  AlbumController.getAllAlbums)

//* as a user, I want to be able to see an album by entering its id in the url.
albumRouter.get("/:id", AlbumController.getAlbumsById)

//* as a user, I want to be able to create a new album.
albumRouter.post("/", AlbumController.createAlbum)

//* as a user, I want to be able to modify an album.
albumRouter.put("/:id", AlbumController.updateAlbum)


module.exports = albumRouter