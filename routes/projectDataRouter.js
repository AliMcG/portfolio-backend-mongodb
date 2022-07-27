import express from "express";
import { getProjectData, createProjectData } from "../controllers/projectDataController.js";

const router = express.Router()

router.get("/", (req, res) => {
  res.json("Hello from back")
})
router.get("/project-data", getProjectData)

router.post("/project-data", createProjectData)

export default router