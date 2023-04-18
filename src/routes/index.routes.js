const albumRouter = require("./Album.routes")
const trackRouter = require("./Track.routes")

const setupRoutes = (server) =>{
    server.use("/albums", albumRouter)
    server.use("/tracks", trackRouter)
}

module.exports = {
    setupRoutes
}