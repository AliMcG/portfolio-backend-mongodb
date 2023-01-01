import express from "express"
import cors from "cors"
import logger from "morgan"
import mongoose from "mongoose"
import { auth } from 'express-oauth2-jwt-bearer';
import projectDataRouter from "./routes/projectDataRouter.js"
import keeperRouter from "./routes/keeperRouter.js"
import mapRouter from "./routes/mapRouter.js"

const PORT = process.env.PORT || 4000
const server = express()

server.use(cors())
server.use(logger("dev"))
server.use(express.json())

const checkJwt = auth({
  audience: "http://localhost:4000",
  issuerBaseURL: process.env.ISSUER_BASE_URL
});



// server.use("/", (req, res, next)  => {
//   res.json("Hello")
// })

server.use("/api/v1", projectDataRouter)

server.use("/keep/api", checkJwt, keeperRouter)

server.use("/map-api", mapRouter)

server.use(function(err, req, res, next){
  res.status(err.status || 500);
  return res.json({error: err });
});

mongoose.connect(process.env.MONG_DB)
  .then(() => {
    server.listen(PORT, () => {console.log(`Connected to db and listening on ${PORT}`)})
  })
  .catch((error) => {
    console.log(error)
  })