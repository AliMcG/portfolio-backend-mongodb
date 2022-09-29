import express, { json } from "express"
import cors from "cors"
import logger from "morgan"
import mongoose from "mongoose"
import projectDataRouter from "./routes/projectDataRouter.js"
import keeperRouter from "./routes/keeperRouter.js"
const PORT = process.env.PORT || 5000
const server = express()

const corsOptions ={
  origin: "http://localhost:3000"
}
server.use(cors())
server.use(logger("dev"))
server.use(express.json())

server.use("/api/v1", projectDataRouter)

server.use("/keep/api", cors(corsOptions), keeperRouter)


mongoose.connect(process.env.MONG_DB)
  .then(() => {
    server.listen(PORT, () => {console.log(`Connected to db and listening on ${PORT}`)})
  })
  .catch((error) => {
    console.log(error)
  })