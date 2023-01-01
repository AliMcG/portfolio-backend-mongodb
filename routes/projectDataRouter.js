import express from "express";
import { getProjectData, createProjectData } from "../controllers/projectDataController.js";

const router = express.Router()

router.get("/", (req, res) => {
  res.json("Hello from project")
})
router.get("/project-data", getProjectData)

router.post("/project-data", createProjectData)

router.delete("/", (req, res) => {
  res.json("Nothing to delete")
})

export default router