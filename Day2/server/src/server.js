const express = require("express")
const {join} = require("path")
const listEndPoints = require("express-list-endpoints");
const mongoose = require("mongoose")
const usersRouter = require("./services/users")

const server = express()
server.use(express.json())
server.use("/users", usersRouter)
server.use((error, req, res, next)=>{
    res.status (error.httpStatusCode) 
    res.send('Error')
})
const port = 3000

console.log(listEndPoints(server))

mongoose
.connect("mongodb://localhost:27017/basic-auth",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(
    server.listen(port, () =>{
        console.log("Running on port", port)
    })
)
.catch((err) => console.log(err))