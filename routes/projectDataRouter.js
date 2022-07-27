import express from "express";
import { getProjectData } from "../controllers/projectDataController";

const router = express.Router()

router.get("/project-data", getProjectData)

export default router