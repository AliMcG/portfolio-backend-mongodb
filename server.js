import express from "express"
import cors from "cors"
import logger from "morgan"
import mongoose from "mongoose"
const PORT = process.env.PORT
const server = express()


server.use(cors())
server.use(logger("dev"))

server.use("/api/v1", projectDataRouter)

mongoose.connect(process.env.MONG_DB)
  .then(() => {
    server.listen(PORT, () => {console.log(`Connected to db and listening on ${PORT}`)})
  })
  .catch((error) => {
    console.log(error)
  })