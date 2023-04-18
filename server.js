const express = require('express');
require("dotenv").config()
const albumRouter = require("./src/routes/Album.routes")

const port = process.env.PORT

const server = express();

server.use(express.json())

server.get("/", (req, res)=>{
    res.send("Welcome to the Albums and Tracks server")
})

server.use("/albums", albumRouter)

server.listen(port, ()=>{
    console.log("server listening on port ", port)
});
