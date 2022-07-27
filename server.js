import express, { json } from "express"
import cors from "cors"
import logger from "morgan"
import mongoose from "mongoose"
import projectDataRouter from "./routes/projectDataRouter.js"
const PORT = process.env.PORT || 5000
const server = express()


server.use(cors())
server.use(logger("dev"))
server.use(express.json())

server.use("/api/v1", projectDataRouter)

mongoose.connect(process.env.MONG_DB)
  .then(() => {
    server.listen(PORT, () => {console.log(`Connected to db and listening on ${PORT}`)})
  })
  .catch((error) => {
    console.log(error)
  })