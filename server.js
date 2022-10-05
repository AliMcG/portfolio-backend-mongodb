import express from "express"
import cors from "cors"
import logger from "morgan"
import mongoose from "mongoose"
// import { auth, requiredScopes  } from 'express-oauth2-jwt-bearer';
import projectDataRouter from "./routes/projectDataRouter.js"
import keeperRouter from "./routes/keeperRouter.js"
import mapRouter from "./routes/mapRouter.js"

const PORT = process.env.PORT || 5000
const server = express()

// const checkJwt = auth({
//   audience: process.env.AUDIENCE,
//   issuerBaseURL: process.env.ISSUER_BASE_URL
// });

server.use(cors())
server.use(logger("dev"))
server.use(express.json())


server.use("/api/v1", projectDataRouter)

server.use("/keep/api", keeperRouter)

server.use("/map-api", mapRouter)


mongoose.connect(process.env.MONG_DB)
  .then(() => {
    server.listen(PORT, () => {console.log(`Connected to db and listening on ${PORT}`)})
  })
  .catch((error) => {
    console.log(error)
  })