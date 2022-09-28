import express from "express";
import { getKeeperData, createKeeperData, deleteKeeperData } from "../controllers/keeperDataController.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.json("Hello from the keeper app")
})
router.get("/keeper-app", getKeeperData)

router.post("/keeper-app", createKeeperData)

// router.patch("/keeper-app", updateKeeperData)

router.delete("/keeper-app", deleteKeeperData)

// router.delete("/", (req, res) => {
//   res.json("Nothing to delete")
// })

export default router